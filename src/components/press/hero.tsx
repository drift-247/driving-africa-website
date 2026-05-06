import { Download } from 'lucide-react'

export function PressHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden bg-primary text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern corporate building" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary to-primary"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
        <div className="inline-block bg-accent text-primary px-3 py-1 rounded text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          PRESS CENTER
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
          Press & Media
        </h1>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover the latest updates, strategic announcements, and institutional milestones from Driving Africa Digital Services Limited as we shape the digital future of the continent.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button className="bg-accent text-primary px-10 py-4 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-white transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-accent/20">
            Media Inquiry
          </button>
          <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all hover:translate-y-[-2px] flex items-center gap-3">
            <Download className="w-4 h-4" />
            Download Kit
          </button>
        </div>
      </div>
      
      {/* Decorative grid or patterns similar to the screenshot */}
      <div className="absolute top-12 left-12 w-24 h-24 border border-white/10 rotate-45 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  )
}
