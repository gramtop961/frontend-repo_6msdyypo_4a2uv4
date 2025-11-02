import React from 'react';
import { motion } from 'framer-motion';
import { Cog, BarChart3, Rocket } from 'lucide-react';

const features = [
  {
    icon: Cog,
    title: 'Automation',
    desc: 'Streamline workflows, reduce manual work, and connect your tools with intelligent automations.'
  },
  {
    icon: BarChart3,
    title: 'Strategy',
    desc: 'Data-driven roadmaps that align technology with business outcomes and customer journeys.'
  },
  {
    icon: Rocket,
    title: 'Growth',
    desc: 'Acquire, retain, and scale more efficiently with systems that compound your results.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#020617] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          From Startup Chaos to Scalable Systems.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-4 max-w-2xl text-sky-100/90"
        >
          BuildStart bridges technology and strategy for small and medium businesses. We design, automate, and optimize operations so you can focus on growth.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-sky-800/60 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.08)] backdrop-blur"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-sky-400/20" />
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-sky-700/60 bg-sky-900/30 p-3 text-sky-300 shadow">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sky-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
