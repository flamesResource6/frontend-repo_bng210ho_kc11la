import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Shield, Radio, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-black">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient cinematic vignettes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(168,85,247,0.22),transparent_60%),radial-gradient(1200px_600px_at_80%_110%,rgba(45,212,191,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm text-xs text-white/70"
        >
          <Shield size={14} className="text-teal-300" />
          Tactical Roleplay Environment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(20,184,166,0.15)]"
        >
          Revolution Project
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/80"
        >
          A cinematic, city-scale Minecraft RP server with a gritty, modern military vibe. Build a life, follow the rules of the city, and navigate power, economy, and order.
        </motion.p>

        {/* Discord CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 max-w-xl rounded-2xl border border-white/10 bg-black/60 p-5 sm:p-6 backdrop-blur-md shadow-[0_0_40px_rgba(20,184,166,0.12)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-teal-300 text-xs uppercase tracking-wider">Access Required</p>
              <h3 className="mt-1 text-white font-semibold">Join via Discord only • Mods required to play</h3>
              <p className="text-white/70 text-sm">Short link: <span className="font-mono text-white">dsc.gg/revorr</span></p>
            </div>
            <a
              href="https://dsc.gg/revorr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-teal-400 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/25 hover:brightness-110 transition"
            >
              <Radio size={16} /> Join via Discord <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* bottom edge gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
