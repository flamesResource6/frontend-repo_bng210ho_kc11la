import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Server, BadgeDollarSign, FileText, Car, Workflow, Scale, Info } from 'lucide-react'

const Section = ({ title, accent, children, icon: Icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="relative rounded-2xl border border-white/10 bg-black/60 p-6 md:p-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
  >
    <div className="absolute -inset-px rounded-2xl bg-[radial-gradient(600px_120px_at_10%_0%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(600px_120px_at_90%_100%,rgba(45,212,191,0.15),transparent_60%)]" style={{ maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)' }} />
    <div className="relative">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <span className={`inline-block h-2 w-2 rounded-full ${accent}`} />
        {Icon && <Icon size={14} className="text-white/70" />}
        {title}
      </div>
      <div className="prose prose-invert max-w-none text-white/80">
        {children}
      </div>
    </div>
  </motion.section>
)

export default function Sections() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 space-y-8">
      <Section title="The City" accent="bg-fuchsia-400" icon={Building2}>
        <p>
          A dense, neon-streaked metropolis under constant watch. Districts range from corporate highrises to industrial docks and undercity markets. Every block has a story, and every move has consequences.
        </p>
      </Section>

      <Section title="Server Information" accent="bg-teal-300" icon={Server}>
        <ul className="list-disc pl-5 space-y-1">
          <li>Version: Java Edition (Forge/Fabric with required mods)</li>
          <li>Focus: Serious roleplay with tactical mechanics and city simulation</li>
          <li>Access: Via Discord. Whitelisted onboarding with rules verification</li>
          <li>Performance: Optimized server with active moderation and logging</li>
        </ul>
      </Section>

      <Section title="What the Server Has" accent="bg-purple-400" icon={Info}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Jobs & Careers" icon={BadgeDollarSign}>
            Work in government, security, paramedics, logistics, tech, or the underground. Progression paths and payroll cycles.
          </Feature>
          <Feature title="Economy" icon={Scale}>
            Player-driven markets, vendors, contracts, taxes, fines, and financial records. Earn it. Spend it. Account for it.
          </Feature>
          <Feature title="Documents" icon={FileText}>
            IDs, licenses, permits, warrants, and formal reports with signatures and audit trails.
          </Feature>
          <Feature title="Vehicles" icon={Car}>
            Ground fleets and specialized transport with maintenance and registry systems.
          </Feature>
          <Feature title="RP Systems" icon={Workflow}>
            Medical, policing, evidence, radio comms, dispatch, and incident management with realistic cooldowns.
          </Feature>
        </div>
      </Section>

      <Section title="Rules" accent="bg-red-400" icon={Scale}>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Respect serious RP at all times. Stay in character.</li>
          <li>No RDM/VDM. Follow escalation and consequence.</li>
          <li>Use approved mods only. No exploits or client-side advantages.</li>
          <li>Follow staff directives and city laws. Appeal through Discord.</li>
          <li>Use radio channels appropriately. Secure comms during ops.</li>
        </ol>
      </Section>
    </div>
  )
}

function Feature({ title, icon: Icon, children }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-center gap-2 text-white">
        {Icon && <Icon size={16} className="text-teal-300" />}<span className="font-semibold">{title}</span>
      </div>
      <p className="text-white/70 text-sm">{children}</p>
    </div>
  )
}
