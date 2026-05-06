import { TrendingUp, Target, Users, Shield } from 'lucide-react'

export function CareersCulture() {
  const pillars = [
    { icon: <Target className="w-5 h-5" />, title: 'Impact', desc: 'Everything we build has a direct effect on how people move, pay, and live in Nigeria. Your work here counts.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Ownership', desc: 'We\'re a lean team. You won\'t be handed a small slice — you\'ll own meaningful work from day one.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Growth', desc: 'We invest in the people who invest in the mission. You\'ll learn fast here.' },
    { icon: <Users className="w-5 h-5" />, title: 'Collaboration', desc: 'No silos, no politics. The best idea wins, regardless of where it comes from.' }
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-black text-primary mb-6">How We Work</h2>
          <p className="text-text-muted text-lg leading-relaxed mb-12">
            We're early-stage, move fast, and take our work seriously — without taking ourselves too seriously.
          </p>
          <img 
            src="/careers-culture.png" 
            alt="Driving Africa Culture" 
            className="rounded-[40px] shadow-2xl w-full h-[350px] object-cover"
          />
        </div>

        <div className="grid gap-6">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
               <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  {pillar.icon}
               </div>
               <h4 className="text-xl font-bold text-primary mb-3">{pillar.title}</h4>
               <p className="text-text-muted text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
