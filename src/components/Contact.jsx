import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#020617] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Let's Build Smarter, Together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-3 max-w-2xl text-sky-100/90"
        >
          Tell us about your business and where automation can unlock growth.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 rounded-2xl border border-sky-800/60 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(56,189,248,0.08)]"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-sky-200">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-sky-800/60 bg-[#0b1220] px-3 py-2 text-sky-50 placeholder-sky-300/40 outline-none focus:border-sky-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-sky-200">Business</label>
                <input required className="mt-1 w-full rounded-lg border border-sky-800/60 bg-[#0b1220] px-3 py-2 text-sky-50 placeholder-sky-300/40 outline-none focus:border-sky-400" placeholder="Acme Co." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-sky-200">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-sky-800/60 bg-[#0b1220] px-3 py-2 text-sky-50 placeholder-sky-300/40 outline-none focus:border-sky-400" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-sky-200">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-lg border border-sky-800/60 bg-[#0b1220] px-3 py-2 text-sky-50 placeholder-sky-300/40 outline-none focus:border-sky-400" placeholder="What would you like to automate?"/>
              </div>
            </div>
            <div className="mt-6">
              <button className="relative inline-flex items-center gap-2 rounded-lg bg-sky-500/90 px-5 py-2.5 font-semibold text-white transition hover:bg-sky-400">
                <span className="absolute inset-0 -z-0 rounded-lg bg-sky-500 blur-md opacity-40" />
                <span className="relative z-10">Start the Build</span>
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-sky-800/60 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sky-100/90">Email us at</p>
            <a href="mailto:hello@buildstart.io" className="text-sky-300 hover:text-sky-200">hello@buildstart.io</a>
            <div className="mt-6 rounded-xl border border-sky-800/60 bg-[#0b1220] p-4 text-sm text-sky-100/80">
              "BuildStart is the missing piece that bridges technology and human creativity."
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative mt-14 rounded-2xl border border-sky-800/60 bg-white/5 p-6">
          <div className="pointer-events-none absolute inset-0 -z-0 rounded-2xl bg-sky-500/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-sky-100/80">© {new Date().getFullYear()} BuildStart. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-4 text-sky-200">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
