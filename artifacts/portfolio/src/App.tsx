import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Download, Mail, Linkedin, Play } from 'lucide-react';
import { Route, Switch, Router as WouterRouter } from 'wouter';

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
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <span className="hidden md:inline">&middot;</span>
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <span className="hidden md:inline">&middot;</span>
          <a href="#deck" className="hover:opacity-60 transition-opacity">Deck</a>
          <span className="hidden md:inline">&middot;</span>
          <a href="#resume" className="hover:opacity-60 transition-opacity">Resume</a>
          <span className="hidden md:inline">&middot;</span>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full px-6 py-20 md:py-32 flex flex-col items-center animate-in fade-in duration-700">
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
      <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] text-center mb-12 tracking-tight">
        Safia Raghoui
      </h1>
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-black mb-12 max-w-5xl" />
      
      {/* Subtitles */}
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          Global Growth Manager & Market Entry Strategist
        </div>
        <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans">
          AI Product Builder
        </div>
      </div>
    </div>
  );
}

function LinkCards() {
  const cards = [
    { title: "Majlis AI", href: "https://ff9dd202-bd25-42ed-aea4-65edb3b086c5-00-2nwarm2sw2uix.riker.replit.dev/" },
    { title: "Accord AI", href: "https://preview--accord-ai-partnership.lovable.app/" },
    { title: "Portfolio", href: "https://safia-raghoui.my.canva.site/" },
    { title: "Kanz Portfolio", href: "https://try.ka.nz/ai/fatimaezzahraasafiaraghoui" },
  ];

  return (
    <div id="work" className="w-full px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black p-8 md:p-10 flex items-center justify-between group hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase font-sans">{card.title}</span>
            <ArrowUpRight strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </div>
    </div>
  );
}

function Biography() {
  return (
    <div id="about" className="w-full px-6 py-20 md:py-32 flex justify-center border-t border-black max-w-6xl mx-auto">
      <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-center max-w-[700px] leading-relaxed">
        "7+ years opening GCC markets for Asian platforms taught me how growth actually happens. Now I build the AI products myself, so the strategy and the execution live in the same hands."
      </p>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="w-full px-6 pb-24 md:pb-32 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl justify-center">
        <a 
          id="deck"
          href="#" 
          className="border border-black px-10 py-6 flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors duration-300 w-full md:w-auto"
        >
          <Download strokeWidth={1} className="w-5 h-5" />
          <span className="text-xs tracking-[0.2em] uppercase font-sans">Hub71 Pitch Deck</span>
        </a>
        <a 
          id="resume"
          href="#" 
          className="border border-black px-10 py-6 flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors duration-300 w-full md:w-auto"
        >
          <Download strokeWidth={1} className="w-5 h-5" />
          <span className="text-xs tracking-[0.2em] uppercase font-sans">Resume / CV</span>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-black px-6 py-10">
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
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <LinkCards />
        <Biography />
        <ActionButtons />
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
