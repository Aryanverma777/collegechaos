'use client'

import { motion } from 'framer-motion'
import { Ticker } from '@/components/layout/Ticker'
import { Navbar } from '@/components/layout/Navbar'
import { Image as ImageIcon, Tag, User, Share2, ThumbsUp, ThumbsDown, MessageSquare, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils/utils'

const stories = [
  { id: 1, initials: 'JD', name: 'John' },
  { id: 2, initials: 'AS', name: 'Alice' },
  { id: 3, initials: 'RK', name: 'Rahul' },
  { id: 4, initials: 'MP', name: 'Maya' },
  { id: 5, initials: 'SK', name: 'Sam' },
]

const categories = [
  { name: 'All', icon: '' },
  { name: 'Rant 😤', color: 'red' },
  { name: 'Meme 😂', color: 'amber' },
  { name: 'Gossip 👀', color: 'purple' },
  { name: 'Question ❓', color: 'teal' },
  { name: 'Confession 💀', color: 'pink' },
  { name: 'Random 🎲', color: 'green' },
]

const posts = [
  {
    id: 1,
    author: 'Rahul S.',
    initials: 'RS',
    time: '2h ago',
    category: 'Rant',
    text: 'The canteen food today is literally a biohazard. I think the "paneer" just blinked at me. 💀',
    upvotes: 42,
    downvotes: 3,
    comments: 12,
  },
  {
    id: 2,
    author: 'Anonymous',
    initials: '?',
    time: '5h ago',
    category: 'Confession',
    text: 'I haven\'t attended a single DBMS lecture this month. At this point, I\'m too afraid to ask where the class even is.',
    upvotes: 156,
    downvotes: 12,
    comments: 45,
  }
]

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <main className="min-h-screen bg-[var(--bg-base)] transition-colors duration-300">
      <Ticker />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-[118px] pb-12 flex gap-8">
        {/* LEFT FEED */}
        <div className="flex-1 max-w-[680px] space-y-6">
          {/* STORIES */}
          <div className="glass-card p-4 flex gap-4 overflow-x-auto no-scrollbar">
            <button className="flex-shrink-0 flex flex-col items-center gap-2 group">
              <div className="w-[58px] h-[58px] rounded-full border-2 border-dashed border-[var(--upvote-active)] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-[var(--upvote-active)] text-2xl">+</span>
              </div>
              <span className="text-[11px] font-medium text-[var(--text-secondary)]">You</span>
            </button>
            {stories.map((story) => (
              <button key={story.id} className="flex-shrink-0 flex flex-col items-center gap-2 group">
                <div className="w-[58px] h-[58px] rounded-full p-[2px] story-ring-unviewed group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-[var(--bg-post)] flex items-center justify-center font-bold text-sm text-[var(--text-primary)]">
                    {story.initials}
                  </div>
                </div>
                <span className="text-[11px] font-medium text-[var(--text-secondary)]">{story.name}</span>
              </button>
            ))}
          </div>

          {/* CREATE POST */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--btn-primary-bg)] flex items-center justify-center font-bold text-white flex-shrink-0">Y</div>
              <textarea 
                placeholder="What's the chaos today? 👀"
                className="w-full bg-[var(--bg-input)] border border-[var(--border-default)] rounded-[8px] p-3 focus:outline-none focus:border-[#a8a8a8] resize-none min-h-[80px] text-[var(--text-primary)] placeholder:text-[var(--placeholder)]"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs font-medium hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                  <ImageIcon size={14} /> Image
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs font-medium hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                  <Tag size={14} /> Category
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs font-medium hover:bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                  <User size={14} /> Anonymous
                </button>
              </div>
              <button className="px-6 py-2 rounded-[8px] bg-[var(--btn-primary-bg)] text-white font-syne font-bold text-sm hover:opacity-85">Share</button>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all",
                  activeCategory === cat.name 
                    ? "bg-[var(--btn-primary-bg)] text-white" 
                    : "bg-[var(--bg-elevated)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* POSTS */}
          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[var(--upvote-active)] to-accent-pink flex items-center justify-center font-bold text-white text-sm">
                      {post.initials}
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-sm text-[var(--text-primary)]">{post.author}</h4>
                      <p className="text-[11px] text-[var(--text-secondary)]">{post.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      post.category === 'Rant' ? "bg-accent-red/10 text-accent-red" : "bg-accent-pink/10 text-accent-pink"
                    )}>
                      {post.category}
                    </span>
                    <button className="text-[var(--icon-default)] hover:text-[var(--icon-active)]"><MoreHorizontal size={18} /></button>
                  </div>
                </div>
                
                <p className="text-sm leading-relaxed text-[var(--text-primary)]">
                  {post.text}
                </p>

                <div className="pt-4 border-t border-[var(--divider)] flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--upvote-active)] transition-colors">
                      <ThumbsUp size={16} /> {post.upvotes}
                    </button>
                    <button className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-accent-red transition-colors">
                      <ThumbsDown size={16} /> {post.downvotes}
                    </button>
                    <button className="flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                      <MessageSquare size={16} /> {post.comments}
                    </button>
                  </div>
                  <button className="text-[var(--icon-default)] hover:text-[var(--icon-active)]"><Share2 size={16} /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden xl:block w-[300px] space-y-6 sticky top-[118px] h-fit">
          {/* ER DASHBOARD */}
          <div className="glass-card p-6 border-accent-red/20">
            <h3 className="font-syne font-bold text-lg mb-4 flex items-center gap-2 text-[var(--text-primary)]">
              🏥 College ER
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Deadline Deaths', value: '5 today', color: 'text-accent-red', link: 'View Graveyard →' },
                { label: 'Attendance Critical', value: '2 at risk', color: 'text-accent-amber', link: 'Check Status →' },
                { label: 'Roasts Pending', value: '12 fresh', color: 'text-accent-teal', link: 'Get Roasted →' },
                { label: 'Posts Today', value: '47', color: 'text-accent-teal', link: '' },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[var(--text-secondary)]">{item.label}</span>
                    <span className={cn("text-xs font-bold", item.color)}>{item.value}</span>
                  </div>
                  {item.link && <button className="text-[10px] text-[var(--upvote-active)] hover:underline">{item.link}</button>}
                  {i < 3 && <div className="border-b border-[var(--divider)] pt-2" />}
                </div>
              ))}
            </div>
          </div>

          {/* TRENDING */}
          <div className="glass-card p-6">
            <h3 className="font-syne font-bold text-lg mb-4 text-[var(--text-primary)]">🔥 Trending</h3>
            <div className="space-y-4">
              {[
                { title: 'How to survive 8am lectures?', upvotes: '1.2k', cat: 'Question' },
                { title: 'The library ghost is real.', upvotes: '856', cat: 'Gossip' },
                { title: 'Finals are coming...', upvotes: '2.4k', cat: 'Meme' },
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <h4 className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--upvote-active)] transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] text-[var(--text-secondary)]">{item.upvotes} upvotes</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)]">{item.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
