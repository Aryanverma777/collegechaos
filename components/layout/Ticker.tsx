'use client'

import { motion } from 'framer-motion'

const headlines = [
  "BREAKING: 3 deadlines died today 💀",
  "Student at 23% attendance — CRITICAL 🚨",
  "Code roasted 47 times this week 🔥",
  "New confession just dropped 👀",
  "5 bunks left before detention 😭"
]

export function Ticker() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[38px] bg-[#c0392b]/90 backdrop-blur-md flex items-center overflow-hidden border-b border-white/10">
      <div className="flex items-center px-4 bg-[#c0392b] h-full z-10 shadow-xl">
        <motion.div 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-white mr-2"
        />
        <span className="font-syne font-bold text-[12px] tracking-widest text-white">LIVE</span>
      </div>
      
      <div className="marquee flex-1">
        <div className="marquee-content">
          {[...headlines, ...headlines].map((text, i) => (
            <span key={i} className="text-white text-[12px] font-dmSans whitespace-nowrap">
              {text} <span className="mx-4 opacity-50">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
