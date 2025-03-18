"use client"

import type React from "react"
import { motion } from "framer-motion"

interface GlassmorphicCardProps {
  children: React.ReactNode
}

export default function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/10"
    >
      {children}
    </motion.div>
  )
}

