import { Mail } from 'lucide-react'

export function CareersCta() {
  return (
    <section className="py-24 px-8 bg-primary text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
           <h2 className="text-3xl md:text-4xl font-black mb-6">Didn't find a role?</h2>
           <p className="text-slate-400 text-lg leading-relaxed">
             We are constantly expanding our teams and looking for exceptional talent in engineering, design, and operations.
           </p>
           <div className="mt-10">
              <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">SEND YOUR RESUME TO</p>
              <a 
                href="mailto:careers@drivingafricadigitalserviceslimited.com" 
                className="text-lg md:text-xl font-black hover:text-accent transition-colors break-all"
              >
                careers@drivingafricadigitalserviceslimited.com
              </a>
           </div>
        </div>

        <div className="relative group">
           <div className="absolute inset-0 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="w-64 h-64 border border-white/10 rounded-[40px] flex items-center justify-center rotate-12 group-hover:rotate-6 transition-transform duration-700">
              <Mail className="w-16 h-16 text-accent/50 group-hover:text-accent group-hover:scale-110 transition-all duration-700" />
           </div>
           <div className="absolute -top-4 -right-4 w-64 h-64 border border-white/5 rounded-[40px] -z-10 rotate-3"></div>
        </div>
      </div>
    </section>
  )
}
