import React, { useState, useRef } from 'react';
import { Menu, X, ArrowUpRight, Download, Mail, Linkedin, Volume2, VolumeX, FileText } from 'lucide-react';
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

function WorkCard({ title, href, description, descriptionClassName }: { title: string; href: string; description: string; descriptionClassName?: string }) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="border border-black p-8 md:p-10 flex flex-col justify-start gap-6 group hover:bg-black hover:text-white transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-sans">{title}</span>
        <ArrowUpRight strokeWidth={1} className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <p className={`text-xs font-sans leading-relaxed tracking-wide opacity-70 group-hover:opacity-90 text-pretty ${descriptionClassName ?? ''}`}>
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
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <div className="w-full px-6 py-10 md:py-16 flex flex-col items-center animate-in fade-in duration-700">
      {/* Cinematic hero video with overlaid text */}
      <div className="w-full max-w-[800px] aspect-video relative mb-10 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Name + tagline overlaid at bottom of video */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 pointer-events-none">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] text-center tracking-tight text-white mb-3 md:mb-4" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Safia Raghoui
          </h1>
          <p className="font-serif italic text-sm md:text-base text-white opacity-80 tracking-wide" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}>
            Strategy That Ships
          </p>
        </div>

        {/* Mute / unmute toggle — bottom-right corner */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 z-10"
          aria-label={muted ? 'Unmute video' : 'Mute video'}
        >
          {muted
            ? <VolumeX strokeWidth={1} className="w-4 h-4" />
            : <Volume2 strokeWidth={1} className="w-4 h-4" />}
        </button>
      </div>

      {/* Location — below video */}
      <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans text-black opacity-70 mb-6 text-center">
        Seoul &middot; Abu Dhabi &middot; Riyadh
      </div>

      {/* Legal name note */}
      <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-sans text-gray-400 mb-10 text-center">
        Fatima Ezzahraa Raghoui, known professionally as Safia
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-black mb-12 max-w-5xl" />

      {/* Subtitles */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          Global Growth &amp; Market Entry Strategist
        </div>
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          Building AI products and scaling business across MENA &amp; Asia
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
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Headshot — left */}
          <div className="shrink-0 flex justify-center">
            <img
              src={headshotSrc}
              alt="Safia Raghoui"
              className="w-[260px] md:w-[340px]"
            />
          </div>

          {/* Bio quote — centered text in right column */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <p className="font-serif italic text-xl md:text-2xl lg:text-[1.6rem] leading-relaxed text-center">
              "7+ years opening GCC markets for Asian platforms taught me how growth actually happens. Now I build the AI products myself, so the strategy and the execution live in the same hands."
            </p>
            <span className="text-[9px] tracking-[0.28em] uppercase font-sans text-gray-400">
              Connected Growth Systems
            </span>
          </div>
        </div>

        {/* Disclosure note */}
        <div className="mt-10 border border-black px-6 py-5">
          <p className="font-sans text-sm leading-relaxed text-gray-700">
            <span className="font-semibold text-black">Note:</span> I'm not a software engineer — I'm someone who has become genuinely skilled at working across the modern AI toolchain. This site and every project on it — Majlis AI, Accord AI, and Volar AI — were built using AI-assisted development (Claude, Replit, Lovable, n8n, Google Gemini) alongside AI-native content and media tools (CapCut, ElevenLabs, Magnific) for video, voice, and visual design. I defined the strategy, architecture, testing, and real-world grounding behind every product — the tools handled implementation. Fluency across this toolchain is the actual skill; I believe it's the way real products get built now.
          </p>
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
            Market-Entry &amp; Partnership AI Tools
          </h3>
          <div className="h-[1px] bg-black mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col">
              <WorkCard
                title="Majlis AI"
                href="https://majlis-ai.replit.app/"
                description="A guided AI market-entry advisor for Abu Dhabi — eleven questions generate a full strategic brief covering entry pathway, budget scenarios, cultural readiness, and regulatory flags, grounded in verified public regulation rather than AI guesswork. Available in English and Arabic."
                descriptionClassName="text-justify"
              />
              <a
                href="/majlis-ai-explainer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-black border-t-0 px-5 py-3 text-[10px] tracking-[0.18em] uppercase font-sans text-gray-500 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <FileText strokeWidth={1} className="w-3.5 h-3.5 shrink-0" />
                <span>Project Brief (PDF)</span>
                <Download strokeWidth={1} className="w-3 h-3 shrink-0 ml-auto" />
              </a>
            </div>
            <div className="flex flex-col">
              <WorkCard
                title="Accord AI"
                href="https://accord-ai-partnership.lovable.app/"
                description="An AI partnership-strategy advisor for the GCC — matches a company's goals to real partnership archetypes and recommends real, sourced partners from a self-collected 100-entry regional directory, with negotiation guidance specific to each deal type."
                descriptionClassName="text-justify"
              />
              <a
                href="/accord-ai-explainer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-black border-t-0 px-5 py-3 text-[10px] tracking-[0.18em] uppercase font-sans text-gray-500 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <FileText strokeWidth={1} className="w-3.5 h-3.5 shrink-0" />
                <span>Project Brief (PDF)</span>
                <Download strokeWidth={1} className="w-3 h-3 shrink-0 ml-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Entertainment AI */}
        <div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 tracking-tight">
            Entertainment AI
          </h3>
          <div className="h-[1px] bg-black mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col">
              <WorkCard
                title="Volar AI"
                href="https://volara-story-guide.lovable.app/"
                description="Volar AI — An AI chat, story, and adventure platform for the GCC and MENA — original, culturally-grounded characters across mystery, mentorship, and storytelling, with in-chat illustrations and adjustable conversation tone. Built respectfully, without romance-first framing."
                descriptionClassName="text-justify"
              />
              <a
                href="/volar-ai-explainer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-black border-t-0 px-5 py-3 text-[10px] tracking-[0.18em] uppercase font-sans text-gray-500 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <FileText strokeWidth={1} className="w-3.5 h-3.5 shrink-0" />
                <span>Project Brief (PDF)</span>
                <Download strokeWidth={1} className="w-3 h-3 shrink-0 ml-auto" />
              </a>
            </div>
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
            description="Career case studies across Hyperconnect, SpoonLabs (Spoon &amp; Vigloo), OutInFuture (Neogen), and Scatter Lab — seven years of GCC market entry and growth strategy for Korean and Asian platforms."
            descriptionClassName="text-justify"
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
            href="/hub71-initiate-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
          href="/safia-raghoui-cv-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
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
