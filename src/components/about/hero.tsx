import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function AboutHero() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
        <span className="hero-badge">OUR STORY</span>
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-tight">
          Built From Experience. Driven by Purpose.
        </h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Driving Africa Digital Services Limited was founded in 2026 by Isaac Nnamdi and Sarah Effiong — two people who saw the same problem from very different angles.
        </p>
        
        <div className={`overflow-hidden transition-all duration-700 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 md:max-h-[1000px] opacity-0 md:opacity-100'}`}>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Isaac spent years behind the wheel as a driver on platforms like Uber. He saw firsthand what the existing system got wrong: drivers treated as an afterthought, no real community, and passengers with genuine safety concerns that nobody was seriously addressing. He knew there was a better way to build this.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Sarah brought the technical firepower. A seasoned backend and AI/ML engineer with years of experience leading engineering and product teams, she understood exactly what it would take to build a platform that could hold up at scale and do it right.
          </p>
          <p className="text-lg text-text-muted leading-relaxed font-bold text-primary">
            Together, they founded Drift247: a safety-first ride-hailing platform built specifically for Nigeria, with plans to expand across Africa.
          </p>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-widest mt-4 hover:text-primary transition-colors"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp className="w-4 h-4" /></>
          ) : (
            <>Read Our Origin Story <ChevronDown className="w-4 h-4" /></>
          )}
        </button>
      </div>
      <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
        <div className="absolute -inset-4 bg-slate-100 rounded-[40px] -z-10 translate-x-4 translate-y-4"></div>
        <img 
          src="/about-hero.png" 
          alt="DADC Office" 
          className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white"
        />
      </div>
    </section>
  )
}
