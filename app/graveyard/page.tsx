"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────
type Status = "pending" | "missed" | "submitted";

interface Grave {
  _id: string;
  title: string;
  subject: string;
  dueDate: Date;
  status: Status;
  epitaph: string;
  bloomed: boolean;
  createdAt: Date;
}

interface Petal {
  id: number;
  x: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  swing: number;
  shape: "flower" | "petal" | "star";
}

// ── Seed data ──────────────────────────────────────────────────────────────
const SEED_GRAVES: Grave[] = [
  { _id: "g1", title: "DBMS Assignment #3", subject: "Database Management", dueDate: new Date(Date.now() - 1000*60*60*24*5), status: "missed", epitaph: "Here lies query optimization. It ran too slow and was never seen again.", bloomed: false, createdAt: new Date() },
  { _id: "g2", title: "OS Lab Report", subject: "Operating Systems", dueDate: new Date(Date.now() - 1000*60*60*24*2), status: "missed", epitaph: "Gone but not forgotten. Like a deadlock — eternal, unresolved.", bloomed: false, createdAt: new Date() },
  { _id: "g3", title: "Math Internal Test", subject: "Engineering Mathematics", dueDate: new Date(Date.now() - 1000*60*60*24*8), status: "missed", epitaph: "May it rest in the integral it never solved.", bloomed: true, createdAt: new Date() },
  { _id: "g4", title: "CN Presentation", subject: "Computer Networks", dueDate: new Date(Date.now() + 1000*60*60*24*1), status: "pending", epitaph: "Still breathing... for now. OSI model wept.", bloomed: false, createdAt: new Date() },
  { _id: "g5", title: "Java Mini Project", subject: "OOP with Java", dueDate: new Date(Date.now() - 1000*60*60*24*12), status: "missed", epitaph: "NullPointerException: life not found.", bloomed: false, createdAt: new Date() },
  { _id: "g6", title: "DSA Quiz #2", subject: "Data Structures", dueDate: new Date(Date.now() - 1000*60*60*24*1), status: "submitted", epitaph: "Submitted 11:58 PM. Two minutes of courage.", bloomed: false, createdAt: new Date() },
  { _id: "g7", title: "Software Engineering Doc", subject: "SE & Project Mgmt", dueDate: new Date(Date.now() + 1000*60*60*24*3), status: "pending", epitaph: "A waterfall of procrastination. The end is near.", bloomed: false, createdAt: new Date() },
  { _id: "g8", title: "IOT Lab Practical", subject: "Internet of Things", dueDate: new Date(Date.now() - 1000*60*60*24*20), status: "missed", epitaph: "The things were not connected. Neither was the student.", bloomed: false, createdAt: new Date() },
];

const FLOWER_COLORS = ["#ff2d78","#ff6bca","#ff9ef0","#00f5ff","#39ff14","#ffaa00","#fff","#c084fc","#fb923c","#f472b6","#a3e635"];
const FLOWER_SHAPES: Petal["shape"][] = ["flower","petal","star"];

function randomBetween(a: number, b: number) { return a + Math.random() * (b - a); }

// ── Flower Petal SVG ───────────────────────────────────────────────────────
function FlowerSVG({ color, shape, size }: { color: string; shape: Petal["shape"]; size: number }) {
  if (shape === "star") return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    </svg>
  );
  if (shape === "petal") return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="4" ry="10" fill={color} style={{ filter: `drop-shadow(0 0 3px ${color})` }} />
    </svg>
  );
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      {[0,60,120,180,240,300].map((deg, i) => (
        <ellipse key={i} cx="16" cy="16" rx="5" ry="9"
          transform={`rotate(${deg} 16 16) translate(0 -5)`}
          fill={color} opacity="0.85" />
      ))}
      <circle cx="16" cy="16" r="4" fill="#fff8" />
    </svg>
  );
}

// ── Grave Card ─────────────────────────────────────────────────────────────
function GraveCard({ grave, index, onBloom, onAdd }: {
  grave: Grave; index: number;
  onBloom: (id: string) => void;
  onAdd?: () => void;
}) {
  const [risen, setRisen] = useState(false);
  const [blooming, setBlooming] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRisen(true), index * 120 + 100);
    return () => clearTimeout(t);
  }, [index]);

  const handleBloom = () => {
    if (grave.bloomed) return;
    setBlooming(true);
    onBloom(grave._id);
    setTimeout(() => setBlooming(false), 1200);
  };

  const statusColors: Record<Status, { col: string; label: string }> = {
    missed:    { col: "#ff2d78", label: "💀 MISSED" },
    pending:   { col: "#ffaa00", label: "⚠️ PENDING" },
    submitted: { col: "#39ff14", label: "✅ SUBMITTED" },
  };
  const sc = statusColors[grave.status];

  const daysAgo = Math.round((Date.now() - grave.dueDate.getTime()) / (1000*60*60*24));
  const overdue = grave.dueDate < new Date();

  return (
    <div className="grave-wrap" style={{ transitionDelay: `${index * 80}ms` }}>
      {/* Ground crack effect */}
      <div className="ground-crack" />

      {/* Grave stone */}
      <div className={`grave-card ${risen ? "grave-risen" : "grave-hidden"} ${grave.bloomed ? "grave-bloomed" : ""} ${blooming ? "grave-shaking" : ""}`}>

        {/* Status glow dot */}
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full pulse-dot"
          style={{ background: sc.col, boxShadow: `0 0 8px ${sc.col}` }} />

        {/* Cross / symbol at top */}
        <div className="flex justify-center mb-3">
          {grave.status === "submitted" ? (
            <div className="grave-symbol" style={{ borderColor: "#39ff14", boxShadow: "0 0 10px #39ff1466" }}>
              <span className="font-orbitron text-[#39ff14] text-xs font-black">✓</span>
            </div>
          ) : grave.status === "pending" ? (
            <div className="grave-symbol" style={{ borderColor: "#ffaa00", boxShadow: "0 0 10px #ffaa0066" }}>
              <span className="font-orbitron text-[#ffaa00] text-xs font-black">!</span>
            </div>
          ) : (
            <div className="cross-wrap" style={{ filter: `drop-shadow(0 0 6px ${grave.bloomed ? "#ff2d78" : "#ff2d7866"})` }}>
              <div className="cross-v" style={{ background: grave.bloomed ? "#ff2d78" : "#ff2d7866" }} />
              <div className="cross-h" style={{ background: grave.bloomed ? "#ff2d78" : "#ff2d7866" }} />
              {grave.bloomed && <div className="bloom-burst" />}
            </div>
          )}
        </div>

        {/* Subject chip */}
        <div className="subject-chip" style={{ borderColor: sc.col + "66", color: sc.col, background: sc.col + "11" }}>
          {grave.subject.toUpperCase()}
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-[0.72rem] font-bold text-white text-center tracking-wide leading-snug my-2 px-1">
          {grave.title}
        </h3>

        {/* Date */}
        <p className="font-tech text-[0.58rem] text-center mb-2" style={{ color: sc.col }}>
          {overdue
            ? `${Math.abs(daysAgo)}d overdue`
            : `due in ${daysAgo === 0 ? "TODAY" : `${Math.abs(daysAgo)}d`}`
          }
        </p>

        {/* Epitaph */}
        <p className="font-tech text-[0.6rem] text-white/30 text-center italic leading-relaxed px-2 mb-3 border-t border-white/5 pt-2">
          "{grave.epitaph}"
        </p>

        {/* Status badge */}
        <div className="flex justify-center mb-3">
          <span className="font-orbitron text-[0.48rem] tracking-widest px-2 py-1 border"
            style={{ color: sc.col, borderColor: sc.col + "55", background: sc.col + "11" }}>
            {sc.label}
          </span>
        </div>

        {/* Bloom button */}
        {grave.status === "missed" && (
          <button onClick={handleBloom} disabled={grave.bloomed}
            className={`bloom-btn w-full ${grave.bloomed ? "bloomed" : ""}`}>
            {grave.bloomed ? (
              <span className="flex items-center justify-center gap-1.5">
                <span>🌸</span>
                <span>BLOOMED</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                <span>🌺</span>
                <span>BLOOM</span>
              </span>
            )}
          </button>
        )}
      </div>

      {/* Grave mound */}
      <div className="grave-mound" style={{ boxShadow: grave.bloomed ? `0 0 20px ${sc.col}44` : undefined }} />
      {/* Flowers on bloomed graves */}
      {grave.bloomed && (
        <div className="grave-flowers">
          {["🌸","🌺","🌼"].map((f, i) => (
            <span key={i} className="grave-flower-emoji" style={{ animationDelay: `${i * 0.3}s` }}>{f}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Add Grave Modal ────────────────────────────────────────────────────────
function AddGraveModal({ onClose, onAdd }: { onClose: () => void; onAdd: (g: Omit<Grave, "_id" | "bloomed" | "createdAt">) => void }) {
  const [form, setForm] = useState({ title: "", subject: "", dueDate: "", status: "missed" as Status, epitaph: "" });
  const submit = () => {
    if (!form.title || !form.subject || !form.dueDate) return;
    onAdd({ ...form, dueDate: new Date(form.dueDate) });
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md px-4">
      <div className="w-full max-w-md bg-[#02020a] relative" style={{ border: "1px solid #ff2d7844", boxShadow: "0 0 40px #ff2d7811" }}>
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #ff2d78, #00f5ff, transparent)" }} />
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <p className="font-orbitron text-sm font-black text-white tracking-wider">⚰️ ADD TO GRAVEYARD</p>
          <button onClick={onClose} className="text-white/30 hover:text-[#ff2d78] transition-colors">✕</button>
        </div>
        <div className="p-5 flex flex-col gap-3">
          {[
            { label: "ASSIGNMENT TITLE", key: "title", placeholder: "What died today..." },
            { label: "SUBJECT", key: "subject", placeholder: "Which class claimed it..." },
            { label: "DUE DATE", key: "dueDate", placeholder: "", type: "date" },
            { label: "EPITAPH (optional)", key: "epitaph", placeholder: "Last words..." },
          ].map(({ label, key, placeholder, type }) => (
            <div key={key}>
              <label className="font-orbitron text-[0.5rem] tracking-[0.25em] text-[#ff2d7888] mb-1.5 block">&gt; {label}</label>
              <input type={type ?? "text"} className="modal-input" placeholder={placeholder}
                value={(form as Record<string,string>)[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
            </div>
          ))}
          <div>
            <label className="font-orbitron text-[0.5rem] tracking-[0.25em] text-[#ff2d7888] mb-1.5 block">&gt; STATUS</label>
            <div className="flex gap-2">
              {(["missed","pending","submitted"] as Status[]).map(s => (
                <button key={s} onClick={() => setForm({ ...form, status: s })}
                  className="flex-1 py-2 font-orbitron text-[0.5rem] tracking-widest border transition-all"
                  style={{
                    borderColor: form.status === s ? (s === "missed" ? "#ff2d78" : s === "pending" ? "#ffaa00" : "#39ff14") : "#ffffff11",
                    color: form.status === s ? (s === "missed" ? "#ff2d78" : s === "pending" ? "#ffaa00" : "#39ff14") : "#ffffff33",
                    background: form.status === s ? (s === "missed" ? "#ff2d7811" : s === "pending" ? "#ffaa0011" : "#39ff1411") : "transparent",
                  }}>
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <button onClick={onClose} className="flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-white/25 border border-white/10 hover:border-white/20 transition-all">CANCEL</button>
            <button onClick={submit} className="flex-1 py-3 font-orbitron text-[0.58rem] tracking-widest text-[#ff2d78] border border-[#ff2d78] hover:bg-[#ff2d7811] transition-all" style={{ boxShadow: "0 0 8px #ff2d7833" }}>BURY IT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function GraveyardPage() {
  const [graves, setGraves] = useState<Grave[]>(SEED_GRAVES);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState<Status | "all">("all");
  const petalId = useRef(0);

  useEffect(() => { setMounted(true); }, []);

  const spawnPetals = useCallback((burst = false) => {
    const count = burst ? 60 : 25;
    const newPetals: Petal[] = Array.from({ length: count }, () => ({
      id: petalId.current++,
      x: randomBetween(0, 100),
      size: randomBetween(burst ? 18 : 14, burst ? 34 : 26),
      color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
      delay: randomBetween(0, burst ? 0.4 : 0.8),
      duration: randomBetween(3.5, 6.5),
      rotation: randomBetween(0, 360),
      swing: randomBetween(-40, 40),
      shape: FLOWER_SHAPES[Math.floor(Math.random() * FLOWER_SHAPES.length)],
    }));
    setPetals(p => [...p, ...newPetals]);
    setTimeout(() => {
      const ids = new Set(newPetals.map(p => p.id));
      setPetals(p => p.filter(x => !ids.has(x.id)));
    }, 8000);
  }, []);

  const handleBloom = useCallback((id: string) => {
    setGraves(prev => prev.map(g => g._id === id ? { ...g, bloomed: true } : g));
    spawnPetals(true);
  }, [spawnPetals]);

  const handleAdd = (data: Omit<Grave, "_id" | "bloomed" | "createdAt">) => {
    setGraves(prev => [{ ...data, _id: Math.random().toString(36).slice(2), bloomed: false, createdAt: new Date() }, ...prev]);
  };

  const filtered = filter === "all" ? graves : graves.filter(g => g.status === filter);
  const missedCount  = graves.filter(g => g.status === "missed").length;
  const pendingCount = graves.filter(g => g.status === "pending").length;
  const bloomedCount = graves.filter(g => g.bloomed).length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-tech { font-family: 'Share Tech Mono', monospace; }

        .glow-pink  { text-shadow: 0 0 8px #ff2d78, 0 0 20px #ff2d78; }
        .glow-cyan  { text-shadow: 0 0 8px #00f5ff, 0 0 20px #00f5ff; }
        .glow-green { text-shadow: 0 0 8px #39ff14, 0 0 20px #39ff14; }

        /* Fog / mist background */
        .graveyard-bg {
          background: radial-gradient(ellipse at 20% 80%, rgba(255,45,120,0.06) 0%, transparent 50%),
                      radial-gradient(ellipse at 80% 20%, rgba(0,245,255,0.04) 0%, transparent 50%),
                      radial-gradient(ellipse at 50% 100%, rgba(57,255,20,0.04) 0%, transparent 40%),
                      #01010a;
          background-attachment: fixed;
        }

        /* Grid */
        .grid-bg {
          background-image: linear-gradient(rgba(255,45,120,0.025) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(255,45,120,0.025) 1px,transparent 1px);
          background-size: 44px 44px;
        }

        /* Ground strip */
        .ground-strip {
          position: fixed; bottom: 72px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, transparent, #39ff1433, #ff2d7833, #39ff1433, transparent);
          z-index: 5;
        }

        /* Grave wrapper */
        .grave-wrap {
          display: flex; flex-direction: column; align-items: center;
          transition: transform 0.2s;
        }
        .grave-wrap:hover { transform: translateY(-4px); }

        /* Grave card */
        .grave-card {
          background: linear-gradient(180deg, #0a0415 0%, #060210 100%);
          border: 1px solid #ff2d7833;
          padding: 1rem;
          width: 200px;
          position: relative;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 15px rgba(255,45,120,0.08), inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .grave-hidden { opacity: 0; transform: translateY(60px) scale(0.85); }
        .grave-risen  { opacity: 1; transform: translateY(0) scale(1); }
        .grave-bloomed {
          border-color: #ff2d7888;
          box-shadow: 0 0 25px rgba(255,45,120,0.2), 0 0 50px rgba(255,45,120,0.08);
        }
        .grave-shaking {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
          0%,100% { transform: translateX(0) rotate(0); }
          20% { transform: translateX(-4px) rotate(-1.5deg); }
          40% { transform: translateX(4px) rotate(1.5deg); }
          60% { transform: translateX(-3px) rotate(-1deg); }
          80% { transform: translateX(3px) rotate(1deg); }
        }

        /* Cross */
        .cross-wrap { position: relative; width: 28px; height: 34px; }
        .cross-v { position: absolute; left: 50%; top: 0; transform: translateX(-50%); width: 4px; height: 100%; border-radius: 2px; }
        .cross-h { position: absolute; top: 35%; left: 0; width: 100%; height: 4px; border-radius: 2px; }
        .bloom-burst {
          position: absolute; inset: -8px; border-radius: 50%;
          background: radial-gradient(circle, #ff2d7844 0%, transparent 70%);
          animation: burst 2s ease-out infinite;
        }
        @keyframes burst { 0%{transform:scale(0.5);opacity:1} 100%{transform:scale(2);opacity:0} }

        /* Grave symbol circle */
        .grave-symbol {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid; display: flex; align-items: center; justify-content: center;
        }

        /* Subject chip */
        .subject-chip {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.42rem; letter-spacing: 0.15em;
          border: 1px solid; padding: 2px 8px; text-align: center;
          margin: 0 auto; display: block; width: fit-content;
        }

        /* Ground crack */
        .ground-crack {
          width: 160px; height: 8px;
          background: linear-gradient(90deg, transparent, rgba(255,45,120,0.3), transparent);
          margin-top: 2px; position: relative;
        }
        .ground-crack::before {
          content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 60%; height: 1px;
          background: linear-gradient(90deg, transparent, #ff2d7888, transparent);
        }

        /* Grave mound */
        .grave-mound {
          width: 180px; height: 18px;
          background: linear-gradient(180deg, #1a0a1a, #0a0510);
          border: 1px solid #ff2d7822; border-top: none;
          border-radius: 0 0 50% 50%;
        }

        /* Flowers on bloomed grave */
        .grave-flowers { display: flex; gap: 4px; margin-top: 4px; }
        .grave-flower-emoji {
          font-size: 14px; animation: flower-bounce 2s ease-in-out infinite;
        }
        @keyframes flower-bounce {
          0%,100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }

        /* Bloom button */
        .bloom-btn {
          font-family: 'Orbitron', sans-serif;
          font-size: 0.55rem; letter-spacing: 0.15em;
          padding: 0.55rem; text-transform: uppercase;
          border: 1px solid #ff2d78;
          color: #ff2d78; background: transparent;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 0 8px #ff2d7833;
        }
        .bloom-btn:hover:not(:disabled) {
          background: #ff2d7822;
          box-shadow: 0 0 16px #ff2d78, 0 0 30px #ff2d7844;
          transform: scale(1.02);
        }
        .bloom-btn.bloomed {
          border-color: #ff2d7844; color: #ff2d7888;
          cursor: default; box-shadow: none;
          background: #ff2d7808;
        }

        /* Falling petals */
        .petal-container {
          position: fixed; inset: 0; pointer-events: none; z-index: 100; overflow: hidden;
        }
        .falling-petal {
          position: absolute; top: -60px;
          animation: petal-fall linear forwards;
        }
        @keyframes petal-fall {
          0%   { transform: translateY(0) rotate(0deg) translateX(0); opacity: 1; }
          20%  { opacity: 1; }
          80%  { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(720deg) translateX(var(--swing)); opacity: 0; }
        }

        /* Stat cards */
        .stat-card {
          background: #06060f; border: 1px solid #ff2d7822;
          padding: 1rem 1.25rem; flex: 1;
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: #ff2d7855; }

        /* Filter buttons */
        .filter-btn { transition: all 0.2s; cursor: pointer; }

        /* Modal input */
        .modal-input {
          width:100%; background:#03030c; border:1px solid #ff2d7822;
          padding:0.6rem 0.8rem; font-family:'Share Tech Mono',monospace;
          font-size:0.8rem; color:#e0e0ff; outline:none; transition:border-color 0.2s;
          caret-color:#ff2d78;
        }
        .modal-input::placeholder { color:#ffffff18; }
        .modal-input:focus { border-color:#ff2d7855; }
        .modal-input[type="date"] { color-scheme: dark; }

        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.2} }
        .pulse-dot { animation: pulse-dot 1.4s ease-in-out infinite; }
        @keyframes flicker { 0%,95%,100%{opacity:1} 96%{opacity:0.5} 97%{opacity:1} 98%{opacity:0.3} 99%{opacity:1} }
        .flicker { animation: flicker 5s infinite; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #ff2d7833; }

        /* Moon */
        .moon {
          position: fixed; top: 80px; right: 60px;
          width: 64px; height: 64px; border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #fffde0, #ffe57a);
          box-shadow: 0 0 20px #ffe57a88, 0 0 60px #ffe57a33;
          pointer-events: none; z-index: 1;
          animation: moon-glow 4s ease-in-out infinite;
        }
        @keyframes moon-glow { 0%,100%{box-shadow:0 0 20px #ffe57a88,0 0 60px #ffe57a33} 50%{box-shadow:0 0 30px #ffe57acc,0 0 80px #ffe57a55} }

        /* Mist */
        .mist {
          position: fixed; bottom: 68px; left: 0; right: 0; height: 80px;
          background: linear-gradient(to top, rgba(57,255,20,0.04), transparent);
          pointer-events: none; z-index: 4;
        }
      `}</style>

      {/* ── Falling Petals Layer ── */}
      <div className="petal-container">
        {petals.map(p => (
          <div key={p.id} className="falling-petal"
            style={{
              left: `${p.x}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              "--swing": `${p.swing}px`,
            } as React.CSSProperties}>
            <div style={{ transform: `rotate(${p.rotation}deg)` }}>
              <FlowerSVG color={p.color} shape={p.shape} size={p.size} />
            </div>
          </div>
        ))}
      </div>

      <div className="graveyard-bg grid-bg min-h-screen font-tech">

        {/* Moon */}
        <div className="moon" />

        {/* Mist */}
        <div className="mist" />

        {/* Ground strip */}
        <div className="ground-strip" />

        {/* ── Navbar ── */}
        <nav className="sticky top-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-b border-[#ff2d7822] px-4 py-3 flex items-center justify-between">
          <div className={`flex items-center gap-3 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
            <Link href="/" className="font-orbitron font-black text-sm text-[#00f5ff] glow-cyan flicker tracking-widest">
              COLLEGE<span className="text-[#ff2d78] glow-pink">CHAOS</span>
            </Link>
            <span className="text-white/20 font-tech text-xs">/</span>
            <span className="font-orbitron text-[0.6rem] tracking-[0.2em] text-[#ff2d78] glow-pink">GRAVEYARD</span>
          </div>
          <button onClick={() => setShowModal(true)}
            className="font-orbitron text-[0.58rem] tracking-widest px-4 py-2 border border-[#ff2d78] text-[#ff2d78] hover:bg-[#ff2d7811] transition-all"
            style={{ boxShadow: "0 0 10px #ff2d7833" }}>
            + ADD GRAVE
          </button>
        </nav>

        {/* ── Header ── */}
        <div className={`px-6 py-8 text-center transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="font-orbitron text-[0.55rem] tracking-[0.35em] text-[#ff2d78] glow-pink mb-3">// DEADLINE_GRAVEYARD</p>
          <h1 className="font-orbitron font-black text-4xl md:text-5xl text-white tracking-tight leading-none mb-2">
            HERE LIE YOUR<br />
            <span className="text-[#ff2d78] glow-pink">DEADLINES</span>
          </h1>
          <p className="font-tech text-sm text-white/25 mt-3">May they rest in the peace you never gave them.</p>

          {/* Bloom all button */}
          <button onClick={() => spawnPetals(false)}
            className="mt-4 font-orbitron text-[0.55rem] tracking-[0.2em] px-5 py-2.5 border border-[#ff2d7855] text-[#ff2d78] hover:bg-[#ff2d7811] hover:border-[#ff2d78] transition-all"
            style={{ boxShadow: "0 0 12px #ff2d7822" }}>
            🌸 SHOWER PETALS
          </button>
        </div>

        {/* ── Stats row ── */}
        <div className={`flex gap-3 px-6 mb-6 max-w-xl mx-auto transition-all duration-500 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {[
            { label: "BURIED", val: missedCount, col: "#ff2d78" },
            { label: "PENDING", val: pendingCount, col: "#ffaa00" },
            { label: "BLOOMED", val: bloomedCount, col: "#ff2d78" },
            { label: "TOTAL", val: graves.length, col: "#00f5ff" },
          ].map(({ label, val, col }) => (
            <div key={label} className="stat-card text-center">
              <p className="font-orbitron text-2xl font-black" style={{ color: col, textShadow: `0 0 10px ${col}` }}>{val}</p>
              <p className="font-orbitron text-[0.42rem] tracking-widest text-white/25 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Filter ── */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8 px-4">
          {([["all","ALL","#00f5ff"],["missed","💀 MISSED","#ff2d78"],["pending","⚠️ PENDING","#ffaa00"],["submitted","✅ SUBMITTED","#39ff14"]] as [Status|"all",string,string][]).map(([s, l, col]) => (
            <button key={s} onClick={() => setFilter(s)}
              className="filter-btn font-orbitron text-[0.5rem] tracking-widest px-3 py-1.5 border"
              style={{
                borderColor: filter === s ? col : "#ffffff11",
                color: filter === s ? col : "#ffffff33",
                background: filter === s ? col + "11" : "transparent",
                boxShadow: filter === s ? `0 0 8px ${col}44` : "none",
              }}>
              {l}
            </button>
          ))}
        </div>

        {/* ── Graveyard grid ── */}
        <div className="px-4 pb-32 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {filtered.map((g, i) => (
              <GraveCard key={g._id} grave={g} index={i} onBloom={handleBloom} />
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-orbitron text-white/15 text-sm tracking-widest">NO GRAVES HERE</p>
                <p className="font-tech text-white/10 text-xs mt-2">your deadlines are safe... for now</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom Nav ── */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#01010a]/95 backdrop-blur-md border-t border-[#ff2d7822]"
          style={{ boxShadow: "0 -4px 30px rgba(255,45,120,0.06)" }}>
          <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,#00f5ff55,#ff2d7855,#39ff1455,transparent)" }} />
          <div className="flex items-center justify-around px-2 py-1 max-w-lg mx-auto">
            <Link href="/" className="group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" className="transition-all group-hover:stroke-[#00f5ff] group-hover:scale-110">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#00f5ff] transition-colors">CANTEEN</span>
            </Link>
            <Link href="/graveyard" className="group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#ff2d78" strokeWidth="1.8" className="transition-all" style={{ filter: "drop-shadow(0 0 6px #ff2d78)" }}>
                <rect x="3" y="11" width="18" height="11" rx="1"/><path d="M12 3v8M8 7l4-4 4 4"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest" style={{ color: "#ff2d78", textShadow: "0 0 6px #ff2d78" }}>GRAVEYARD</span>
            </Link>
            <button onClick={() => setShowModal(true)} className="flex flex-col items-center gap-0.5 py-1 px-2 -mt-4 group">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-[#ff2d78] bg-[#ff2d7811] group-hover:bg-[#ff2d7822] transition-all group-hover:scale-105"
                style={{ boxShadow: "0 0 12px #ff2d7866" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff2d78" strokeWidth="2.2" style={{ filter: "drop-shadow(0 0 6px #ff2d78)" }}>
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-[#ff2d78] mt-0.5">BURY</span>
            </button>
            <Link href="/attendance" className="group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" className="transition-all group-hover:stroke-[#39ff14] group-hover:scale-110">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#39ff14] transition-colors">ATTENDANCE</span>
            </Link>
            <Link href="/roast" className="group flex flex-col items-center gap-0.5 py-2 px-3">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" className="transition-all group-hover:stroke-[#ffaa00] group-hover:scale-110">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
              <span className="font-orbitron text-[0.4rem] tracking-widest text-white/25 group-hover:text-[#ffaa00] transition-colors">ROAST CODE</span>
            </Link>
          </div>
          <div className="h-1" />
        </div>
      </div>

      {showModal && <AddGraveModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}
    </>
  );
}