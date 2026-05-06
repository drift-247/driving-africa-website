import { Rocket, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-primary text-white p-12 rounded-3xl relative overflow-hidden group">
           <Rocket className="w-8 h-8 text-accent mb-8 group-hover:scale-110 transition-transform" />
           <h2 className="text-3xl font-black mb-6">Our Mission</h2>
           <p className="text-slate-300 text-lg leading-relaxed">
             Empowering African businesses by providing world-class tech solutions that drive growth, efficiency, and sustainability. We believe in building the infrastructure for Africa's digital future, one breakthrough at a time.
           </p>
        </div>
        
        <div className="bg-accent rounded-3xl p-12 flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-5xl font-black text-primary mb-2">15+</h3>
            <p className="text-primary/70 font-bold tracking-widest text-xs uppercase">African Countries Reached</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-primary mb-2">250+</h3>
            <p className="text-primary/70 font-bold tracking-widest text-xs uppercase">Digital Products Launched</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 p-12 rounded-3xl border border-slate-100 group">
        <Eye className="w-8 h-8 text-primary mb-8 group-hover:rotate-12 transition-transform" />
        <h2 className="text-3xl font-black text-primary mb-6">Our Vision</h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-4xl">
          To lead the digital transformation of Africa by becoming the most trusted and innovative technology partner for startups, enterprises, and governments across the continent, recognized globally for excellence.
        </p>
      </div>
    </section>
  )
}
