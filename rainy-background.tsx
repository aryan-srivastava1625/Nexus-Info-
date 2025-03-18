"use client"

import { useEffect, useRef } from "react"

export default function RainyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const raindrops: { x: number; y: number; speed: number; size: number }[] = []

    for (let i = 0; i < 100; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 5 + 2,
        size: Math.random() * 2 + 1,
      })
    }

    function drawRain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)"

      raindrops.forEach((drop) => {
        ctx.beginPath()
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2)
        ctx.fill()

        drop.y += drop.speed

        if (drop.y > canvas.height) {
          drop.y = 0
          drop.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(drawRain)
    }

    drawRain()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900"
    />
  )
}

