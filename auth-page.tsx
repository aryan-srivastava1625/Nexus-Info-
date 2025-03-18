"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import GlassmorphicCard from "./glassmorphic-card"
import CustomInput from "./custom-input"
import RainyBackground from "./rainy-background"

export default function NexusAuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <RainyBackground />
      <GlassmorphicCard>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            {isLogin ? "Welcome to Nexus" : "Join Nexus"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && <CustomInput type="text" placeholder="Full Name" icon={<FiUser />} />}
            <CustomInput type="email" placeholder="Email" icon={<FiMail />} />
            <CustomInput type="password" placeholder="Password" icon={<FiLock />} />
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
                <span>Remember me</span>
              </label>
              {isLogin && (
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-md font-semibold shadow-lg hover:shadow-xl transition duration-300"
              type="submit"
            >
              {isLogin ? "Login to Nexus" : "Create Account"}
            </motion.button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-300">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
            <button onClick={toggleMode} className="ml-2 text-blue-400 hover:underline focus:outline-none">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </div>
        </motion.div>
      </GlassmorphicCard>
    </div>
  )
}

