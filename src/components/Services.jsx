import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Automation Systems',
    points: [
      'Process automation & workflow orchestration',
      'CRM and app integrations (HubSpot, Slack, Notion, GSheets)',
      'Human-in-the-loop approvals and QA'
    ]
  },
  {
    title: 'Marketing Intelligence',
    points: [
      'Predictive analytics & marketing mix insights',
      'Attribution, cohort tracking, and dashboards',
      'Automated campaigns across channels'
    ]
  },
  {
    title: 'Custom Solutions',
    points: [
      'Tailored automation pipelines for ops, sales, finance',
      'Data pipelines and model-driven decisioning',
      'Security, governance, and documentation'
    ]
  }
];

function Metric({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-sky-800/60 bg-white/5 px-5 py-4 text-center"
    >
      <div className="text-3xl font-extrabold text-sky-300">{value}</div>
      <div className="text-sm text-sky-100/80">{label}</div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#020617] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Services built for SME momentum.
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-sky-800/60 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-lg"
            >
              <div className="absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: 'radial-gradient(600px circle at 0% 0%, rgba(56,189,248,0.25), transparent 40%)' }} />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sky-100/90">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="text-sky-300 hover:text-sky-200">Learn more →</a>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-300/10 group-hover:ring-sky-300/30" />
            </motion.div>
          ))}
        </div>

        {/* Results / mini case metrics */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Metric label="Efficiency Increase" value="+48%" />
          <Metric label="Manual Work Reduced" value="-60%" />
          <Metric label="Revenue Lift" value="+32%" />
        </div>
      </div>
    </section>
  );
}
