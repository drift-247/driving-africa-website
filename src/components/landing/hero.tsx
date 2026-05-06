import { ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
          <div className="hero-badge hover:scale-105 transition-transform cursor-default">
            BUILDING DIGITAL PRODUCTS FOR AFRICA
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-primary mb-8 leading-[1.1] tracking-tight">
            Driving Africa
          </h1>
          
          <p className="text-lg text-text-muted mb-10 max-w-md leading-relaxed">
            We build high-impact digital solutions designed specifically for the African market, bridging the gap between innovation and local relevance.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <button className="btn-primary">
                Explore Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to="/about">
              <button className="btn-outline">
                Our Portfolio
              </button>
            </Link>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative animate-in fade-in zoom-in-95 duration-1000 ease-out delay-200 fill-mode-both">
          {/* Decorative background element */}
          <div className="absolute -top-10 -right-10 w-full h-full bg-slate-100 rounded-[40px] -z-10 translate-x-4 translate-y-4 shadow-inner"></div>
          
          {/* Main Image Container */}
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
            <img 
              src="/hero-image.png" 
              alt="Digital Transformation Africa" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-2000 ease-out"
            />
            
            {/* Subtle glow effect overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Circles */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-20"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-20"></div>
    </section>
  )
}
