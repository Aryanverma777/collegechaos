'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Sun, Moon, User, Plus } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils/utils'
import { useEffect, useState } from 'react'

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'Graveyard', href: '/graveyard' },
  { name: 'Attendance', href: '/attendance' },
  { name: 'Roast My Code', href: '/roast' },
  { name: 'Leaderboard', href: '/leaderboard' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (pathname === '/') return null

  return (
    <nav className="fixed top-[38px] left-0 right-0 z-[90] h-[60px] bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] flex items-center justify-between px-6 transition-colors duration-300">
      <Link href="/home" className="flex items-center gap-2">
        <span className="font-syne font-extrabold text-xl text-[var(--text-primary)]">
          💀 CollegeChaos
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all relative",
                isActive ? "text-[var(--upvote-active)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-[var(--upvote-active)]/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          )
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] hover:scale-110 transition-transform text-[var(--icon-default)] hover:text-[var(--icon-active)]">
          <User size={20} />
        </button>
        
        {mounted && (
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center hover:scale-110 transition-transform overflow-hidden text-[var(--icon-default)] hover:text-[var(--icon-active)]"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 0 : 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </button>
        )}

        <button className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-[8px] bg-[var(--btn-primary-bg)] text-white font-syne font-bold text-sm hover:opacity-85 transition-opacity">
          <Plus size={18} />
          New Post
        </button>
      </div>
    </nav>
  )
}
