import { Rocket, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="py-20 md:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-primary text-white p-8 md:p-12 rounded-3xl relative overflow-hidden group">
           <Rocket className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" />
           <h2 className="text-3xl font-black mb-6">Our Mission</h2>
           <p className="text-slate-300 text-lg leading-relaxed">
             To build digital products that solve real problems for African users — starting with safety, trust, and reliability in everyday transportation.
           </p>
        </div>
        
        <div className="bg-accent rounded-3xl p-8 md:p-12 flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-4xl font-black text-primary mb-2">Safety</h3>
            <p className="text-primary/70 font-bold tracking-widest text-xs uppercase">Our Priority</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-primary mb-2">Trust</h3>
            <p className="text-primary/70 font-bold tracking-widest text-xs uppercase">Our Foundation</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 group">
        <Eye className="w-8 h-8 text-primary mb-8 group-hover:rotate-12 transition-transform" />
        <h2 className="text-3xl font-black text-primary mb-6">Our Vision</h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-4xl">
          To become Africa's most trusted digital products company, expanding from mobility into every layer of African daily life.
        </p>
      </div>
    </section>
  )
}
