import React from 'react'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* global gradient aura */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_-10%_10%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(1200px_600px_at_110%_90%,rgba(45,212,191,0.12),transparent_60%)]" />

      <Hero />

      <div className="relative">
        {/* subtle grid lines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        <Sections />
      </div>

      <Footer />
    </div>
  )
}

export default App
