import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Download, Mail, Linkedin, Play } from 'lucide-react';
import headshotSrc from '@assets/Gemini_Generated_Image_gs6rpxgs6rpxgs6r_1784820433895.png';
import { Route, Switch, Router as WouterRouter } from 'wouter';

/* ─── Shared primitives ─────────────────────────────────────────────────── */

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-2xl md:text-3xl mb-2 tracking-tight">{label}</h2>
      <div className="h-[1px] bg-black" />
    </div>
  );
}

function WorkCard({ title, href, description }: { title: string; href: string; description: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="border border-black p-8 md:p-10 flex flex-col justify-between gap-6 group hover:bg-black hover:text-white transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-sans">{title}</span>
        <ArrowUpRight strokeWidth={1} className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className="text-xs font-sans leading-relaxed tracking-wide opacity-70 group-hover:opacity-90">
        {description}
      </p>
    </a>
  );
}

/* ─── Navigation ────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Explore',   href: '#explore' },
  { label: 'Resume',    href: '#resume' },
  { label: 'Contact',   href: '#contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative z-50">
      <div className="flex items-center justify-between px-6 py-6 border-b border-black bg-white">
        <div className="text-sm font-medium tracking-[0.2em] uppercase font-sans">
          S. Raghoui
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black hover:text-black transition-transform duration-300"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X strokeWidth={1} size={28} /> : <Menu strokeWidth={1} size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 py-5 px-6 border-b border-black bg-white text-xs tracking-[0.25em] uppercase font-sans animate-in slide-in-from-top-4 fade-in duration-300">
          {NAV_LINKS.map((link, i) => (
            <React.Fragment key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && (
                <span className="hidden md:inline">&middot;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <div className="w-full px-6 py-10 md:py-16 flex flex-col items-center animate-in fade-in duration-700">
      {/* Video Placeholder */}
      <div className="w-full max-w-[800px] aspect-video bg-black flex items-center justify-center mb-16 relative group">
        <div className="w-16 h-16 md:w-20 md:h-20 border-[1px] border-white rounded-full flex items-center justify-center text-white cursor-pointer group-hover:bg-white group-hover:text-black transition-all duration-500 ease-out">
          <Play strokeWidth={1} className="w-6 h-6 md:w-8 md:h-8 ml-1" />
        </div>
      </div>

      {/* Locations */}
      <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans mb-10 opacity-80">
        Seoul &middot; Abu Dhabi &middot; Riyadh
      </div>

      {/* Name */}
      <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-center mb-4 tracking-tight">
        Safia Raghoui
      </h1>

      {/* Legal name note */}
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-10 text-center">
        Fatima Ezzahraa Raghoui, known professionally as Safia
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-black mb-12 max-w-5xl" />

      {/* Subtitles */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          Global Growth Manager &amp; Market Entry Strategist
        </div>
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          AI Product Builder
        </div>
      </div>
    </div>
  );
}

/* ─── About ─────────────────────────────────────────────────────────────── */

function About() {
  return (
    <section id="about" className="w-full border-t border-black px-6 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="About" />
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Headshot */}
          <div className="w-full md:w-2/5 shrink-0 flex justify-center md:justify-start">
            <img
              src={headshotSrc}
              alt="Safia Raghoui"
              className="w-full max-w-[340px]"
            />
          </div>

          {/* Bio quote */}
          <div className="flex items-center md:min-h-[200px]">
            <p className="font-serif italic text-xl md:text-2xl lg:text-[1.6rem] leading-relaxed">
              "7+ years opening GCC markets for Asian platforms taught me how growth actually happens. Now I build the AI products myself, so the strategy and the execution live in the same hands."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ───────────────────────────────────────────────────────────── */

function Projects() {
  return (
    <section id="projects" className="w-full border-t border-black px-6 py-10 md:py-14">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        <SectionHeading label="Projects" />

        {/* Market-Entry & Partnership Tools */}
        <div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 tracking-tight">
            Market-Entry &amp; Partnership Tools
          </h3>
          <div className="h-[1px] bg-black mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <WorkCard
              title="Majlis AI"
              href="https://ff9dd202-bd25-42ed-aea4-65edb3b086c5-00-2nwarm2sw2uix.riker.replit.dev/"
              description="A guided AI market-entry advisor for Abu Dhabi — eleven questions generate a full strategic brief covering entry pathway, budget scenarios, cultural readiness, and regulatory flags, grounded in verified public regulation rather than AI guesswork. Available in English and Arabic."
            />
            <WorkCard
              title="Accord AI"
              href="https://preview--accord-ai-partnership.lovable.app/"
              description="An AI partnership-strategy advisor for the GCC — matches a company's goals to real partnership archetypes and recommends real, sourced partners from a self-collected 100-entry regional directory, with negotiation guidance specific to each deal type."
            />
          </div>
        </div>

        {/* Entertainment AI */}
        <div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 tracking-tight">
            Entertainment AI
          </h3>
          <div className="h-[1px] bg-black mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <WorkCard
              title="Volar AI"
              href="#"
              description="An AI character companion platform for storytelling and mentorship — original characters, culturally grounded, built with the same persona-architecture discipline as my market-entry tools."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio ──────────────────────────────────────────────────────────── */

function Portfolio() {
  return (
    <section id="portfolio" className="w-full border-t border-black px-6 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Portfolio" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          <WorkCard
            title="Portfolio"
            href="https://safia-raghoui.my.canva.site/"
            description="A curated Canva portfolio presenting key projects, brand decks, and market-entry case studies from seven years across the GCC."
          />
          <WorkCard
            title="Kanz Portfolio"
            href="https://try.ka.nz/ai/fatimaezzahraasafiaraghoui"
            description="An AI-verified professional profile on Kanz — a trust-layer credential linking identity to work history and domain expertise."
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Explore ────────────────────────────────────────────────────────────── */

function Explore() {
  return (
    <section id="explore" className="w-full border-t border-black px-6 py-8 md:py-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-gray-400 mb-4">
          Initiating
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="font-sans text-sm tracking-wide text-gray-600">
            <span className="text-black font-medium">Hub71 Initiate, Abu Dhabi</span>
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-black px-7 py-4 text-xs tracking-[0.2em] uppercase font-sans hover:bg-black hover:text-white transition-colors duration-300 self-start sm:self-auto"
          >
            <Download strokeWidth={1} className="w-4 h-4" />
            Download Pitch Deck (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Resume ─────────────────────────────────────────────────────────────── */

function Resume() {
  return (
    <section id="resume" className="w-full border-t border-black px-6 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Resume" />
        <a
          href="#"
          className="inline-flex items-center gap-4 border border-black px-10 py-6 text-xs tracking-[0.2em] uppercase font-sans hover:bg-black hover:text-white transition-colors duration-300"
        >
          <Download strokeWidth={1} className="w-5 h-5" />
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}

/* ─── Footer / Contact ───────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-black px-6 py-8">
      <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-gray-400 text-center mb-6">
        Contact
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-xs font-sans tracking-[0.2em] uppercase">
        <a
          href="mailto:f.raghoui@gmail.com"
          className="flex items-center gap-3 hover:opacity-60 transition-opacity"
        >
          <Mail strokeWidth={1} className="w-4 h-4" />
          <span>f.raghoui@gmail.com</span>
        </a>
        <span className="hidden md:inline">&middot;</span>
        <a
          href="https://linkedin.com/in/safia-raghoui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-60 transition-opacity"
        >
          <Linkedin strokeWidth={1} className="w-4 h-4" />
          <span>/in/safia-raghoui</span>
        </a>
        <span className="hidden md:inline">&middot;</span>
        <a
          href="https://wa.me/971508862193"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-60 transition-opacity"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span>+971 50 886 2193</span>
        </a>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Portfolio />
        <Explore />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={Home} />
        <Route>
          <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <div className="text-center">
              <h1 className="text-2xl font-serif text-black mb-4">404</h1>
              <p className="text-xs tracking-widest uppercase font-sans text-black">Page not found</p>
              <a href="/" className="inline-block mt-8 border border-black px-8 py-4 text-xs tracking-widest uppercase font-sans hover:bg-black hover:text-white transition-colors">
                Return Home
              </a>
            </div>
          </div>
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
