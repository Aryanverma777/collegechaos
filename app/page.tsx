"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../app/firebase/config';
import { useRouter } from "next/dist/client/components/navigation";
import { signOut } from "firebase/auth";

// ── Types ──────────────────────────────────────────────────────────────────
type Category = "Rant" | "Meme" | "Gossip" | "Question" | "Confession" | "Random";
type MediaType = "none" | "image" | "video";

interface Comment {
  commentId: string;
  text: string;
  author: string;
  avatar: string;
  createdAt: Date;
}

interface Post {
  _id: string;
  title: string;
  body: string;
  author: string;
  avatar: string;
  isAnonymous: boolean;
  category: Category;
  mediaType: MediaType;
  mediaUrl?: string;
  upvotes: number;
  downvotes: number;
  comments: Comment[];
  createdAt: Date;
  saved: boolean;
}

interface Story {
  id: string;
  author: string;
  avatar: string;
  preview: string;
  seen: boolean;
  time: string;
}

// ── Constants ──────────────────────────────────────────────────────────────
const CAT_COLORS: Record<Category, { border: string; text: string; bg: string }> = {
  Rant:       { border: "#ff2d78", text: "#ff2d78", bg: "#ff2d7818" },
  Meme:       { border: "#00f5ff", text: "#00f5ff", bg: "#00f5ff18" },
  Gossip:     { border: "#ffaa00", text: "#ffaa00", bg: "#ffaa0018" },
  Question:   { border: "#a855f7", text: "#a855f7", bg: "#a855f718" },
  Confession: { border: "#39ff14", text: "#39ff14", bg: "#39ff1418" },
  Random:     { border: "#ff6b35", text: "#ff6b35", bg: "#ff6b3518" },
};

const TICKER = [
  "🔴 47 deadlines missed in 24h", "⚡ USB chai machine post: 893 upvotes",
  "💀 OS Assignment joins graveyard", "📉 3 students below 60% attendance",
  "🔥 bubble_sort.py: most roasted this week", "🏆 Anonymous confession hits 1204 upvotes",
];

// Placeholder images from picsum (landscape college vibes)
const SEED_POSTS: Post[] = [
  {
    _id: "1", title: "Prof said 'Google it' when I asked for help",
    body: "Paid ₹80,000 in fees this semester just to be told to Google it. I could've stayed home and done that for free. At least Google doesn't take attendance.",
    author: "frustrated_coder", avatar: "FC", isAnonymous: false, category: "Rant",
    mediaType: "image", mediaUrl: "https://picsum.photos/seed/campus1/800/500",
    upvotes: 247, downvotes: 3, saved: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 23),
    comments: [
      { commentId: "c1", text: "My prof said the same thing and HE wrote the textbook 💀", author: "anon_42", avatar: "A4", createdAt: new Date() },
      { commentId: "c2", text: "We are literally paying to Google together bro", author: "devnull_kid", avatar: "DK", createdAt: new Date() },
    ],
  },
  {
    _id: "2", title: "Attendance is at 61%. Send help.",
    body: "The calculator says I need to attend the next 14 classes in a row to get to 75%. There are only 12 left this semester. I have transcended attendance. I am free.",
    author: "Anonymous", avatar: "??", isAnonymous: true, category: "Confession",
    mediaType: "none",
    upvotes: 512, downvotes: 11, saved: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    comments: [
      { commentId: "c3", text: "Brother has achieved enlightenment fr fr", author: "zen_bunker", avatar: "ZB", createdAt: new Date() },
    ],
  },
  {
    _id: "3", title: "Who put a USB in the chai machine???",
    body: "Someone in Block C plugged a USB into the canteen tea machine and now it boots to a Linux terminal. I respect it. I fear it. The chai now runs on Arch btw.",
    author: "blockC_witness", avatar: "BW", isAnonymous: false, category: "Gossip",
    mediaType: "image", mediaUrl: "https://picsum.photos/seed/lab2/800/600",
    upvotes: 893, downvotes: 2, saved: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    comments: [
      { commentId: "c4", text: "Was it you? It was you wasn't it", author: "sherlock_h", avatar: "SH", createdAt: new Date() },
      { commentId: "c5", text: "I would drink that chai with honour", author: "anon", avatar: "AN", createdAt: new Date() },
    ],
  },
  {
    _id: "4", title: "Submitted a 3am assignment. 90% vibes, 10% desperation.",
    body: "No sources. No structure. Just energy. Got 7.5/10. My prof commented 'creative approach.' I don't know what I wrote. Neither does he.",
    author: "Anonymous", avatar: "??", isAnonymous: true, category: "Meme",
    mediaType: "image", mediaUrl: "https://picsum.photos/seed/desk3/800/500",
    upvotes: 1204, downvotes: 7, saved: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 14),
    comments: [
      { commentId: "c7", text: "Peak academic performance fr", author: "3am_philosopher", avatar: "3P", createdAt: new Date() },
      { commentId: "c8", text: "The grind never stops 🙏", author: "grindset_guy", avatar: "GG", createdAt: new Date() },
    ],
  },
  {
    _id: "5", title: "Is it cheating if you ask ChatGPT in an open-book exam?",
    body: "Genuinely asking. The exam was open-book. My phone is a book. A very smart book. The prof never defined what 'book' means legally.",
    author: "legal_loophole", avatar: "LL", isAnonymous: false, category: "Question",
    mediaType: "none",
    upvotes: 341, downvotes: 44, saved: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    comments: [],
  },
];

const SEED_STORIES: Story[] = [
  { id: "s1", author: "your_story", avatar: "+", preview: "", seen: false, time: "" },
  { id: "s2", author: "frustrated_coder", avatar: "FC", preview: "Just had the worst lab session ever 😭", seen: false, time: "2m" },
  { id: "s3", author: "blockC_witness", avatar: "BW", preview: "THE CHAI MACHINE UPDATE 🚨", seen: false, time: "15m" },
  { id: "s4", author: "zen_bunker", avatar: "ZB", preview: "Bunk philosophy thread incoming", seen: true, time: "1h" },
  { id: "s5", author: "3am_philosopher", avatar: "3P", preview: "Assignment submitted. I sleep.", seen: true, time: "2h" },
  { id: "s6", author: "legal_loophole", avatar: "LL", preview: "Got away with it again lmao", seen: false, time: "3h" },
  { id: "s7", author: "devnull_kid", avatar: "DK", preview: "New meme dropped, check it out", seen: true, time: "5h" },
  { id: "s8", author: "sherlock_h", avatar: "SH", preview: "I have evidence", seen: false, time: "6h" },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function timeAgo(date: Date) {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 60) return `${diff}s`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

function Avatar({ initials, size = 36, glow }: { initials: string; size?: number; glow?: string }) {
  const colors: Record<string, string> = {
    FC: "#ff2d78", BW: "#00f5ff", ZB: "#39ff14", "3P": "#ffaa00",
    LL: "#a855f7", DK: "#ff6b35", SH: "#00f5ff", AN: "#ff2d78",
    GG: "#39ff14", A4: "#ffaa00", DV: "#a855f7", "+": "#00f5ff",
    "??": "#ffffff44",
  };
  const color = colors[initials] ?? "#00f5ff";
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `${color}22`, border: `2px solid ${glow ?? color}`,
      boxShadow: `0 0 8px ${glow ?? color}88`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: size * 0.32, fontFamily: "Orbitron, sans-serif",
      fontWeight: "bold", color: glow ?? color, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

// ── Story Viewer ───────────────────────────────────────────────────────────
function StoryViewer({ story, onClose }: { story: Story; onClose: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setProgress(p => { if (p >= 100) { onClose(); return 0; } return p + 2; }), 60);
    return () => clearInterval(t);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-full max-w-sm mx-4" onClick={e => e.stopPropagation()}>
        {/* Progress bar */}
        <div className="h-0.5 bg-white/10 mb-3 rounded-full overflow-hidden">
          <div className="h-full bg-[#00f5ff] rounded-full transition-none" style={{ width: `${progress}%`, boxShadow: "0 0 6px #00f5ff" }} />
        </div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Avatar initials={story.avatar} size={36} />
          <span className="font-orbitron text-[0.65rem] tracking-widest text-white">{story.author}</span>
          <span className="font-tech text-[0.6rem] text-white/30 ml-auto">{story.time} ago</span>
          <button onClick={onClose} className="text-white/40 hover:text-white ml-2 text-lg">✕</button>
        </div>
        {/* Story content */}
        <div className="bg-[#050510] border border-[#00f5ff22] aspect-[9/16] flex items-center justify-center relative overflow-hidden"
          style={{ boxShadow: "0 0 30px #00f5ff22" }}>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(0,245,255,0.1) 40px,rgba(0,245,255,0.1) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(0,245,255,0.1) 40px,rgba(0,245,255,0.1) 41px)" }} />
          <div className="text-center px-8 z-10">
            <p className="font-orbitron text-[0.5rem] tracking-[0.3em] text-[#00f5ff88] mb-3">// STORY</p>
            <p className="font-tech text-white/70 text-sm leading-relaxed">{story.preview || "Add your story to the Canteen feed"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Post Card ──────────────────────────────────────────────────────────────
function PostCard({ post, onVote, onSave, onComment }: {
  post: Post;
  onVote: (id: string, dir: "up" | "down") => void;
  onSave: (id: string) => void;
  onComment: (id: string, text: string) => void;
}) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const col = CAT_COLORS[post.category];
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    if (!commentText.trim()) return;
    onComment(post._id, commentText);
    setCommentText("");
  };

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) onVote(post._id, "up");
  };

  return (
    <article className="post-card">
      {/* ── Header ── */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative">
          <Avatar initials={post.isAnonymous ? "??" : post.avatar} size={38} glow={col.border} />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border border-[#010105]"
            style={{ background: col.border, boxShadow: `0 0 4px ${col.border}` }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-orbitron text-[0.65rem] tracking-widest text-white truncate">
            {post.isAnonymous ? "Anonymous" : post.author}
          </p>
          <p className="font-tech text-[0.55rem] text-white/25">{timeAgo(post.createdAt)} ago</p>
        </div>
        <span className="font-orbitron text-[0.48rem] tracking-[0.2em] px-2 py-1 border shrink-0"
          style={{ color: col.text, borderColor: col.border + "88", background: col.bg, boxShadow: `0 0 6px ${col.border}33` }}>
          {post.category.toUpperCase()}
        </span>
        <button className="text-white/20 hover:text-white/60 transition-colors ml-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>
          </svg>
        </button>
      </div>

      {/* ── Media ── */}
      {post.mediaType === "image" && post.mediaUrl && (
        <div className="relative bg-[#03030a] overflow-hidden" style={{ aspectRatio: "4/3" }}>
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#00f5ff33] border-t-[#00f5ff] rounded-full animate-spin" />
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.mediaUrl} alt={post.title} className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: imageLoaded ? 1 : 0 }} onLoad={() => setImageLoaded(true)} />
          {/* Neon overlay on hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(to top, ${col.border}44 0%, transparent 50%)` }} />
        </div>
      )}

      {/* ── Caption ── */}
      <div className="px-4 pt-3 pb-1">
        <p className="font-orbitron text-[0.7rem] tracking-wide text-white/90 mb-1.5 leading-snug">{post.title}</p>
        <p className="font-tech text-[0.75rem] text-white/45 leading-relaxed">{post.body}</p>
      </div>

      {/* ── Actions row ── */}
      <div className="flex items-center gap-1 px-3 py-2">
        {/* Like */}
        <button onClick={handleLike} className="flex items-center gap-1.5 px-2 py-1.5 rounded transition-all group">
          <svg width="22" height="22" viewBox="0 0 24 24" fill={liked ? "#ff2d78" : "none"} stroke={liked ? "#ff2d78" : "rgba(255,255,255,0.4)"} strokeWidth="1.8"
            className="transition-all group-hover:scale-110"
            style={liked ? { filter: "drop-shadow(0 0 6px #ff2d78)" } : {}}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span className="font-orbitron text-[0.58rem] tracking-widest" style={{ color: liked ? "#ff2d78" : "rgba(255,255,255,0.3)" }}>
            {post.upvotes + (liked ? 1 : 0)}
          </span>
        </button>

        {/* Comment */}
        <button onClick={() => { setShowAllComments(true); setTimeout(() => inputRef.current?.focus(), 100); }}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded transition-all group">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"
            className="transition-all group-hover:stroke-[#00f5ff] group-hover:scale-110">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span className="font-orbitron text-[0.58rem] tracking-widest text-white/30 group-hover:text-[#00f5ff]">
            {post.comments.length}
          </span>
        </button>

        {/* Share */}
        <button className="flex items-center gap-1.5 px-2 py-1.5 rounded transition-all group">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"
            className="transition-all group-hover:stroke-[#39ff14] group-hover:scale-110">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>

        {/* Downvote */}
        <button onClick={() => onVote(post._id, "down")}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded transition-all group">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.8"
            className="transition-all group-hover:stroke-[#ffaa00] group-hover:scale-110">
            <polyline points="17 11 12 6 7 11"/><line x1="12" y1="18" x2="12" y2="6"/>
          </svg>
          <span className="font-orbitron text-[0.55rem] tracking-widest text-white/20 group-hover:text-[#ffaa00]">{post.downvotes}</span>
        </button>

        {/* Save — right side */}
        <button onClick={() => onSave(post._id)} className="ml-auto flex items-center px-2 py-1.5 transition-all group">
          <svg width="21" height="21" viewBox="0 0 24 24" fill={post.saved ? "#00f5ff" : "none"} stroke={post.saved ? "#00f5ff" : "rgba(255,255,255,0.4)"} strokeWidth="1.8"
            className="transition-all group-hover:scale-110"
            style={post.saved ? { filter: "drop-shadow(0 0 6px #00f5ff)" } : {}}>
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      {/* ── Comments section ── */}
      <div className="px-4 pb-4">
        {post.comments.length > 0 && (
          <div className="mb-2">
            {/* Show first comment always */}
            <p className="font-tech text-[0.72rem] text-white/50 mb-1">
              <span className="font-orbitron text-[0.62rem] text-white/70 mr-2">{post.comments[0].author}</span>
              {post.comments[0].text}
            </p>
            {/* Show all toggle */}
            {post.comments.length > 1 && !showAllComments && (
              <button onClick={() => setShowAllComments(true)}
                className="font-orbitron text-[0.55rem] tracking-widest text-white/25 hover:text-[#00f5ff] transition-colors">
                View all {post.comments.length} comments
              </button>
            )}
            {showAllComments && post.comments.slice(1).map(c => (
              <p key={c.commentId} className="font-tech text-[0.72rem] text-white/50 mb-1">
                <span className="font-orbitron text-[0.62rem] text-white/70 mr-2">{c.author}</span>
                {c.text}
              </p>
            ))}
          </div>
        )}

        {/* Comment input */}
        <div className="flex items-center gap-2 pt-2 border-t border-white/5">
          <input ref={inputRef}
            className="flex-1 bg-transparent font-tech text-[0.75rem] text-white/60 placeholder:text-white/15 outline-none caret-[#00f5ff]"
            placeholder="Add a comment..."
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && submit()}
            maxLength={200}
          />
          {commentText && (
            <button onClick={submit}
              className="font-orbitron text-[0.55rem] tracking-widest text-[#00f5ff] hover:glow-cyan transition-all">
              POST
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

// ── Create Post Modal ──────────────────────────────────────────────────────
function CreatePostModal({ onClose, onCreate }: {
  onClose: () => void;
  onCreate: (p: Omit<Post, "_id" | "upvotes" | "downvotes" | "comments" | "createdAt" | "saved">) => void;
}) {
  const [step, setStep] = useState<"media" | "details">("media");
  const [form, setForm] = useState({
    title: "", body: "", author: "", category: "Rant" as Category,
    isAnonymous: false, mediaType: "none" as MediaType, mediaUrl: "",
  });

  const submit = () => {
    if (!form.body.trim()) return;
    onCreate({
      ...form,
      author: form.isAnonymous ? "Anonymous" : (form.author || "you"),
      avatar: form.isAnonymous ? "??" : (form.author.slice(0, 2).toUpperCase() || "YO"),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4">
      <div className="w-full max-w-md bg-[#02020a] relative overflow-hidden" style={{ border: "1px solid #00f5ff33", boxShadow: "0 0 40px #00f5ff11, 0 0 80px #ff2d7808" }}>

        {/* Animated top border */}
        <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #ff2d78, #00f5ff, #39ff14, #ff2d78)", backgroundSize: "300%", animation: "border-run 3s linear infinite" }} />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          {step === "media" ? (
            <p className="font-orbitron text-sm font-black text-white tracking-wider">NEW POST</p>
          ) : (
            <button onClick={() => setStep("media")} className="font-orbitron text-[0.6rem] tracking-widest text-white/40 hover:text-white transition-colors">← BACK</button>
          )}
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full transition-all ${step === "media" ? "bg-[#00f5ff]" : "bg-white/20"}`} style={step === "media" ? { boxShadow: "0 0 6px #00f5ff" } : {}} />
            <div className={`w-2 h-2 rounded-full transition-all ${step === "details" ? "bg-[#00f5ff]" : "bg-white/20"}`} style={step === "details" ? { boxShadow: "0 0 6px #00f5ff" } : {}} />
          </div>
          <button onClick={onClose} className="font-orbitron text-white/30 hover:text-[#ff2d78] transition-colors text-base">✕</button>
        </div>

        {step === "media" ? (
          <div className="p-5">
            <p className="font-orbitron text-[0.52rem] tracking-[0.3em] text-[#00f5ff88] mb-4">// SELECT MEDIA TYPE</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {([["none", "📝", "TEXT ONLY"], ["image", "🖼", "IMAGE"], ["video", "🎬", "VIDEO"]] as [MediaType, string, string][]).map(([type, icon, label]) => (
                <button key={type} onClick={() => setForm({ ...form, mediaType: type })}
                  className="flex flex-col items-center gap-2 py-5 border transition-all"
                  style={{
                    borderColor: form.mediaType === type ? "#00f5ff" : "#ffffff11",
                    background: form.mediaType === type ? "#00f5ff11" : "transparent",
                    boxShadow: form.mediaType === type ? "0 0 12px #00f5ff33" : "none",
                  }}>
                  <span className="text-2xl">{icon}</span>
                  <span className="font-orbitron text-[0.48rem] tracking-widest" style={{ color: form.mediaType === type ? "#00f5ff" : "#ffffff33" }}>{label}</span>
                </button>
              ))}
            </div>

            {(form.mediaType === "image" || form.mediaType === "video") && (
              <div className="mb-5">
                <label className="font-orbitron text-[0.52rem] tracking-[0.25em] text-[#00f5ff88] mb-2 block">&gt; MEDIA URL</label>
                <input className="modal-input" placeholder="https://..." value={form.mediaUrl}
                  onChange={e => setForm({ ...form, mediaUrl: e.target.value })} />
              </div>
            )}

            <button onClick={() => setStep("details")}
              className="w-full py-3 font-orbitron text-[0.65rem] tracking-[0.2em] text-[#00f5ff] border border-[#00f5ff] hover:bg-[#00f5ff11] transition-all"
              style={{ boxShadow: "0 0 8px #00f5ff33" }}>
              NEXT →
            </button>
          </div>
        ) : (
          <div className="p-5">
            <p className="font-orbitron text-[0.52rem] tracking-[0.3em] text-[#ff2d7888] mb-4">// POST DETAILS</p>

            {/* Category */}
            <div className="mb-4">
              <label className="font-orbitron text-[0.52rem] tracking-widest text-white/25 mb-2 block">CATEGORY</label>
              <div className="flex flex-wrap gap-1.5">
                {(Object.keys(CAT_COLORS) as Category[]).map(cat => {
                  const col = CAT_COLORS[cat];
                  const active = form.category === cat;
                  return (
                    <button key={cat} onClick={() => setForm({ ...form, category: cat })}
                      className="font-orbitron text-[0.48rem] tracking-widest px-2.5 py-1 border transition-all"
                      style={{ borderColor: active ? col.border : "#ffffff11", color: active ? col.text : "#ffffff33", background: active ? col.bg : "transparent" }}>
                      {cat.toUpperCase()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Title */}
            <div className="mb-3">
              <input className="modal-input" placeholder="Post headline (optional)" maxLength={100}
                value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            </div>

            {/* Body */}
            <div className="mb-3">
              <textarea className="modal-input resize-none" rows={3} placeholder="What's the chaos today..."
                maxLength={500} value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} />
              <p className="font-tech text-[0.52rem] text-white/20 text-right mt-1">{form.body.length}/500</p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mb-5">
              <input className="modal-input flex-1" placeholder="Your handle..." disabled={form.isAnonymous}
                value={form.author} onChange={e => setForm({ ...form, author: e.target.value })}
                style={{ opacity: form.isAnonymous ? 0.3 : 1 }} />
              <label className="flex items-center gap-2 cursor-pointer shrink-0">
                <input type="checkbox" className="neon-check" checked={form.isAnonymous}
                  onChange={e => setForm({ ...form, isAnonymous: e.target.checked })} />
                <span className="font-orbitron text-[0.5rem] tracking-widest text-white/30">ANON</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button onClick={onClose}
                className="flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-white/25 border border-white/10 hover:border-white/20 transition-all">
                CANCEL
              </button>
              <button onClick={submit}
                className="flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-[#ff2d78] border border-[#ff2d78] hover:bg-[#ff2d7811] transition-all"
                style={{ boxShadow: "0 0 8px #ff2d7844" }}>
                TRANSMIT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  
  console.log("Current user:", user);

  if(!user){
    router.push("/login");
  }

  const [posts, setPosts] = useState<Post[]>(SEED_POSTS);
  const [stories, setStories] = useState<Story[]>(SEED_STORIES);
  const [filter, setFilter] = useState<Category | "All">("All");
  const [showModal, setShowModal] = useState(false);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const openStory = (s: Story) => {
    setActiveStory(s);
    setStories(prev => prev.map(st => st.id === s.id ? { ...st, seen: true } : st));
  };

  const handleVote = (id: string, dir: "up" | "down") =>
    setPosts(prev => prev.map(p => p._id === id ? { ...p, upvotes: dir === "up" ? p.upvotes + 1 : p.upvotes, downvotes: dir === "down" ? p.downvotes + 1 : p.downvotes } : p));

  const handleSave = (id: string) =>
    setPosts(prev => prev.map(p => p._id === id ? { ...p, saved: !p.saved } : p));

  const handleComment = (id: string, text: string) =>
    setPosts(prev => prev.map(p => p._id !== id ? p : {
      ...p, comments: [...p.comments, { commentId: Math.random().toString(36).slice(2), text, author: "you", avatar: "YO", createdAt: new Date() }]
    }));

  const handleCreate = (data: Omit<Post, "_id" | "upvotes" | "downvotes" | "comments" | "createdAt" | "saved">) =>
    setPosts(prev => [{ ...data, _id: Math.random().toString(36).slice(2), upvotes: 0, downvotes: 0, comments: [], createdAt: new Date(), saved: false }, ...prev]);

  const filtered = filter === "All" ? posts : posts.filter(p => p.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-tech { font-family: 'Share Tech Mono', monospace; }
        .glow-cyan { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff; }
        .glow-pink { text-shadow: 0 0 8px #ff2d78, 0 0 20px #ff2d78; }
        .glow-green { text-shadow: 0 0 8px #39ff14, 0 0 20px #39ff14; }

        /* Ticker */
        .ticker-track { display:flex; white-space:nowrap; animation: ticker 60s linear infinite; }
        @keyframes ticker { from { transform:translateX(0); } to { transform:translateX(-50%); } }

        /* Border animation */
        @keyframes border-run { to { background-position: 300% center; } }

        /* Post card */
        .post-card {
          background: #06060f;
          border: 1px solid #ffffff0a;
          border-radius: 2px;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .post-card:hover { border-color: #00f5ff22; }

        /* Story ring */
        .story-ring {
          background: linear-gradient(135deg, #ff2d78, #00f5ff, #39ff14);
          padding: 2px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .story-ring:hover { transform: scale(1.05); }
        .story-ring.seen { background: #ffffff22; }
        .story-inner {
          background: #06060f;
          border-radius: 50%;
          padding: 2px;
        }

        /* Modal inputs */
        .modal-input {
          width: 100%;
          background: #03030c;
          border: 1px solid #00f5ff22;
          padding: 0.65rem 0.8rem;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.8rem; color: #e0e0ff;
          outline: none;
          transition: border-color 0.2s;
          caret-color: #00f5ff;
        }
        .modal-input::placeholder { color: #ffffff18; }
        .modal-input:focus { border-color: #00f5ff55; }

        /* Checkbox */
        .neon-check {
          appearance: none; width: 14px; height: 14px;
          border: 1px solid #00f5ff44; background: transparent;
          cursor: pointer; position: relative; flex-shrink: 0;
          transition: border-color 0.2s;
        }
        .neon-check:checked { border-color: #39ff14; background: #39ff1422; box-shadow: 0 0 5px #39ff14; }
        .neon-check:checked::after {
          content: ''; position: absolute; left: 2px; top: 0;
          width: 6px; height: 9px;
          border: 1.5px solid #39ff14; border-top: none; border-left: none;
          transform: rotate(40deg);
        }

        /* Feed scroll */
        .feed-wrap { overflow-y: auto; }
        .feed-wrap::-webkit-scrollbar { width: 2px; }
        .feed-wrap::-webkit-scrollbar-thumb { background: #00f5ff22; }

        /* Stories scroll */
        .stories-scroll { overflow-x: auto; scrollbar-width: none; }
        .stories-scroll::-webkit-scrollbar { display: none; }

        /* Filter pills */
        .filter-pill { transition: all 0.2s; cursor: pointer; }

        /* Grid bg */
        .grid-bg {
          background-image: linear-gradient(rgba(0,245,255,0.02) 1px,transparent 1px), linear-gradient(90deg,rgba(0,245,255,0.02) 1px,transparent 1px);
          background-size: 48px 48px;
        }

        /* Stat box */
        .stat-box {
          background: #06060f; border: 1px solid #00f5ff11;
          padding: 0.9rem 1rem;
        }

        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .pulse-dot { animation: pulse-dot 1.4s ease-in-out infinite; }

        @keyframes flicker { 0%,95%,100%{opacity:1} 96%{opacity:0.5} 97%{opacity:1} 98%{opacity:0.3} 99%{opacity:1} }
        .flicker { animation: flicker 5s infinite; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 0.9s linear infinite; }

        /* Bottom nav */
        .bottom-nav-btn { transition: all 0.15s; }
        /* Push page content above the nav bar */
        .page-body { padding-bottom: 88px; }
      `}</style>

      <div className="font-tech min-h-screen bg-[#010108] grid-bg">

        <button onClick={() => signOut(auth)} className="bottom-nav-btn fixed bottom-4 right-4 z-50 bg-[#ff2d78] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#ff2d7811] transition-all">logout</button>

        {/* ══ TICKER ══ */}
        <div className="overflow-hidden bg-[#ff2d78] relative" style={{ height: 28 }}>
          <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 bg-[#cc0055] z-10">
            <span className="font-orbitron text-[0.5rem] tracking-[0.2em] text-white font-black pulse-dot">● LIVE</span>
          </div>
          <div className="overflow-hidden ml-20 h-full flex items-center">
            <div className="ticker-track font-orbitron text-[0.55rem] tracking-widest text-white/80">
              {[...TICKER, ...TICKER].map((t, i) => <span key={i} className="mx-6">{t}</span>)}
            </div>
          </div>
        </div>

        {/* ══ NAVBAR ══ */}
        <nav className="sticky top-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-3 flex items-center justify-between">
          <div className={`flex items-center gap-2 transition-all duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
            <span className="font-orbitron font-black text-base text-[#00f5ff] glow-cyan flicker tracking-widest">
              COLLEGE<span className="text-[#ff2d78] glow-pink">CHAOS</span>
            </span>
            <span className="font-tech text-[0.5rem] text-white/20 hidden sm:block">.io</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#39ff14] pulse-dot" style={{ boxShadow: "0 0 4px #39ff14" }} />
              <span className="font-orbitron text-[0.45rem] tracking-widest text-[#39ff14]">LIVE</span>
            </div>
          </div>

          <button onClick={() => setShowModal(true)}
            className="font-orbitron text-[0.58rem] tracking-[0.15em] px-4 py-2 border border-[#ff2d78] text-[#ff2d78] hover:bg-[#ff2d7811] transition-all"
            style={{ boxShadow: "0 0 10px #ff2d7844" }}>
            + POST
          </button>
        </nav>

        {/* ══ PAGE BODY ══ */}
        <div className="page-body max-w-5xl mx-auto px-2 md:px-4 py-5 flex gap-6">

          {/* ── CENTER (feed) ── */}
          <div className="flex-1 min-w-0 max-w-xl mx-auto w-full">

            {/* Stories bar */}
            <div className="bg-[#06060f] border border-white/5 p-4 mb-4">
              <div className="stories-scroll flex gap-4">
                {stories.map(s => (
                  <div key={s.id} className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer"
                    onClick={() => s.id !== "s1" && openStory(s)}>
                    {s.id === "s1" ? (
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#00f5ff44] flex items-center justify-center bg-[#00f5ff08]"
                          onClick={() => setShowModal(true)}>
                          <span className="font-orbitron text-xl font-black text-[#00f5ff55]">+</span>
                        </div>
                      </div>
                    ) : (
                      <div className={`story-ring ${s.seen ? "seen" : ""}`}>
                        <div className="story-inner">
                          <Avatar initials={s.avatar} size={52} />
                        </div>
                      </div>
                    )}
                    <span className="font-orbitron text-[0.45rem] tracking-wide text-white/35 text-center max-w-[56px] truncate">
                      {s.id === "s1" ? "Your Story" : s.author}
                    </span>
                    {s.time && <span className="font-tech text-[0.42rem] text-white/20">{s.time}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-2 flex-wrap mb-4 px-1">
              {(["All", ...Object.keys(CAT_COLORS)] as (Category | "All")[]).map(cat => {
                const col = cat !== "All" ? CAT_COLORS[cat as Category] : null;
                const active = filter === cat;
                return (
                  <button key={cat} onClick={() => setFilter(cat)}
                    className="filter-pill font-orbitron text-[0.48rem] tracking-widest px-3 py-1.5 border"
                    style={{
                      borderColor: active ? (col?.border ?? "#00f5ff") : "#ffffff0f",
                      color: active ? (col?.text ?? "#00f5ff") : "#ffffff2a",
                      background: active ? (col?.bg ?? "#00f5ff11") : "transparent",
                      boxShadow: active ? `0 0 8px ${col?.border ?? "#00f5ff"}33` : "none",
                    }}>
                    {cat.toUpperCase()}
                  </button>
                );
              })}
              <span className="font-tech text-[0.55rem] text-white/15 ml-auto">{filtered.length} posts</span>
            </div>

            {/* Post feed */}
            <div className="feed-wrap flex flex-col gap-3">
              {filtered.map(post => (
                <PostCard key={post._id} post={post} onVote={handleVote} onSave={handleSave} onComment={handleComment} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20 border border-white/5">
                  <p className="font-orbitron text-white/15 text-xs tracking-widest">NO POSTS IN THIS CATEGORY</p>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="w-64 shrink-0 hidden lg:block">

            {/* User card */}
            <div className="stat-box mb-4 flex items-center gap-3">
              <Avatar initials="YO" size={44} glow="#00f5ff" />
              <div>
                <p className="font-orbitron text-[0.62rem] font-bold text-white tracking-wide">you</p>
                <p className="font-tech text-[0.55rem] text-white/25">chaos agent</p>
              </div>
              <button onClick={() => setShowModal(true)} className="ml-auto font-orbitron text-[0.5rem] tracking-widest text-[#00f5ff] hover:glow-cyan transition-all">POST</button>
            </div>

            {/* ER Stats */}
            <p className="font-orbitron text-[0.5rem] tracking-[0.25em] text-[#ff2d7888] mb-2">// ER_DASHBOARD</p>
            <div className="flex flex-col gap-2 mb-5">
              {[
                { label: "ACTIVE POSTS", val: posts.length, col: "#00f5ff" },
                { label: "TOP UPVOTES", val: Math.max(...posts.map(p => p.upvotes)), col: "#39ff14" },
                { label: "COMMENTS", val: posts.reduce((s, p) => s + p.comments.length, 0), col: "#ffaa00" },
                { label: "SAVED", val: posts.filter(p => p.saved).length, col: "#a855f7" },
              ].map(({ label, val, col }) => (
                <div key={label} className="stat-box flex items-center justify-between">
                  <span className="font-orbitron text-[0.48rem] tracking-widest text-white/25">{label}</span>
                  <span className="font-orbitron text-base font-black" style={{ color: col, textShadow: `0 0 8px ${col}` }}>{val}</span>
                </div>
              ))}
            </div>

            {/* Trending */}
            <p className="font-orbitron text-[0.5rem] tracking-[0.25em] text-[#39ff1488] mb-2">// TRENDING</p>
            <div className="flex flex-col gap-2 mb-5">
              {[...posts].sort((a, b) => b.upvotes - a.upvotes).slice(0, 3).map((p, i) => (
                <div key={p._id} className="stat-box">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-orbitron text-[0.45rem] text-white/20">#{i + 1}</span>
                    <span className="font-orbitron text-[0.42rem] px-1.5 py-0.5 border"
                      style={{ color: CAT_COLORS[p.category].text, borderColor: CAT_COLORS[p.category].border + "66" }}>
                      {p.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-tech text-[0.62rem] text-white/45 leading-snug mb-1" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.title}</p>
                  <p className="font-orbitron text-[0.48rem] text-[#39ff14]">▲ {p.upvotes}</p>
                </div>
              ))}
            </div>

            {/* Module links */}
            <p className="font-orbitron text-[0.5rem] tracking-[0.25em] text-[#00f5ff44] mb-2">// MODULES</p>
            {[
              { label: "💀 Deadline Graveyard", href: "/graveyard", col: "#ff2d78" },
              { label: "📉 Attendance Doom", href: "/attendance", col: "#ffaa00" },
              { label: "🔥 Roast My Code", href: "/roast", col: "#39ff14" },
            ].map(({ label, href, col }) => (
              <Link key={href} href={href}
                className="flex items-center justify-between py-2.5 px-3 mb-1.5 border border-white/5 hover:border-white/15 font-orbitron text-[0.5rem] tracking-widest text-white/30 hover:text-white/60 transition-all">
                <span>{label}</span>
                <span style={{ color: col }}>→</span>
              </Link>
            ))}
          </aside>
        </div>

        {/* ══ BOTTOM NAV (Instagram-style) ══ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-t border-[#00f5ff18]"
          style={{ boxShadow: "0 -4px 30px rgba(0,245,255,0.06)" }}>

          {/* Neon top-border line */}
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #00f5ff55, #ff2d7855, #39ff1455, transparent)" }} />

          <div className="flex items-center justify-around px-2 py-1 max-w-lg mx-auto">

            {/* Home / Canteen */}
            <Link href="/" className="bottom-nav-btn group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.8"
                className="transition-all group-hover:scale-110" style={{ filter: "drop-shadow(0 0 6px #00f5ff)" }}>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest" style={{ color: "#00f5ff", textShadow: "0 0 6px #00f5ff" }}>CANTEEN</span>
            </Link>

            {/* Graveyard */}
            <Link href="/graveyard" className="bottom-nav-btn group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"
                className="transition-all group-hover:stroke-[#ff2d78] group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_6px_#ff2d78)]">
                <rect x="3" y="11" width="18" height="11" rx="1"/><path d="M12 3v8M8 7l4-4 4 4"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#ff2d78] transition-colors">GRAVEYARD</span>
            </Link>

            {/* Post button (center) */}
            <button onClick={() => setShowModal(true)}
              className="flex flex-col items-center gap-0.5 py-1 px-2 -mt-4 relative group">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#ff2d78] bg-[#ff2d7811] transition-all group-hover:bg-[#ff2d7822] group-hover:scale-105"
                style={{ boxShadow: "0 0 12px #ff2d7866, 0 0 30px #ff2d7833" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff2d78" strokeWidth="2.2"
                  style={{ filter: "drop-shadow(0 0 6px #ff2d78)" }}>
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-[#ff2d78] mt-0.5">POST</span>
            </button>

            {/* Attendance */}
            <Link href="/attendance" className="bottom-nav-btn group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"
                className="transition-all group-hover:stroke-[#39ff14] group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_6px_#39ff14)]">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#39ff14] transition-colors">ATTENDANCE</span>
            </Link>

            {/* Roast My Code */}
            <Link href="/roast" className="bottom-nav-btn group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8"
                className="transition-all group-hover:stroke-[#ffaa00] group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_6px_#ffaa00)]">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#ffaa00] transition-colors">ROAST CODE</span>
            </Link>
          </div>

          {/* Safe area spacer */}
          <div className="h-1" />
        </div>
      </div>

      {showModal && <CreatePostModal onClose={() => setShowModal(false)} onCreate={handleCreate} />}
      {activeStory && <StoryViewer story={activeStory} onClose={() => setActiveStory(null)} />}
    </>
  );
}