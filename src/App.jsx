import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    document.title = 'BuildStart | AI Automation for SMEs';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'BuildStart helps SMEs automate their systems and marketing using intelligent AI-driven solutions to boost profits and scale faster.';
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', content);
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen w-full select-none bg-[#020617] text-white antialiased">
      {/* Simple top nav */}
      <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            {/* Logo: four rounded squares with top-right offset */}
            <div className="grid grid-cols-2 gap-1.5">
              <span className="h-3.5 w-3.5 rounded-md bg-white" />
              <span className="h-3.5 w-3.5 translate-x-0 -translate-y-0.5 rounded-md bg-white" />
              <span className="h-3.5 w-3.5 rounded-md bg-white" />
              <span className="h-3.5 w-3.5 rounded-md bg-white" />
            </div>
            <span className="font-semibold tracking-tight">BuildStart</span>
          </a>
          <nav className="hidden gap-6 text-sm text-sky-100 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-full bg-sky-500/90 px-4 py-1.5 text-white hover:bg-sky-400">Start</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
