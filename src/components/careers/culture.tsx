import { TrendingUp, Target, Users, Shield } from 'lucide-react'

export function CareersCulture() {
  const pillars = [
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Growth', desc: 'Continuous learning is in our DNA. We invest in your professional development through mentorship and resources.' },
    { icon: <Target className="w-5 h-5" />, title: 'Impact', desc: 'Every line of code you write and every design you create shapes the digital ecosystem of an entire continent.' },
    { icon: <Users className="w-5 h-5" />, title: 'Collaboration', desc: 'We don\'t work in silos. Our mission is cross-functional, combining the best of tech, design, and local expertise.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Ownership', desc: 'We trust our team. You take the lead on your projects and see your ideas through to real-world implementation.' }
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-black text-primary mb-6">Our Culture of Excellence</h2>
          <p className="text-text-muted text-lg leading-relaxed mb-12">
            At Driving Africa, we believe that great products are born from an environment of trust, curiosity, and high standards. Join a team that values your voice and your vision.
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
