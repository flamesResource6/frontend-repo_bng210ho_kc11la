import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_200px_at_50%_-20%,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>Revolution Project • Minecraft RP</p>
        <p className="text-white/50">Join: dsc.gg/revorr</p>
      </div>
    </footer>
  )
}
