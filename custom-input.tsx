"use client"

import type React from "react"
import { motion } from "framer-motion"

interface CustomInputProps {
  type: string
  placeholder: string
  icon: React.ReactNode
}

export default function CustomInput({ type, placeholder, icon }: CustomInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">{icon}</div>
      <input
        type={type}
        className="w-full pl-10 pr-3 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 border border-white/10"
        placeholder={placeholder}
      />
    </motion.div>
  )
}

