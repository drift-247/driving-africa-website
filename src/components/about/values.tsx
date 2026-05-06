import { Lightbulb, Shield, Globe2, Award } from 'lucide-react'

export function Values() {
  const values = [
    { icon: <Lightbulb />, title: 'Innovation', desc: 'We constantly push boundaries to find the most efficient solutions.' },
    { icon: <Shield />, title: 'Integrity', desc: 'Trust is our foundation. We operate with transparency and excellence.' },
    { icon: <Globe2 />, title: 'African-Centric', desc: 'We build for the continent, with deep local market understanding.' },
    { icon: <Award />, title: 'Excellence', desc: 'Neary is never enough. We strive for the highest global standards.' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center mb-16">
        <h2 className="text-4xl font-black text-primary mb-4">The Values We Live By</h2>
        <div className="w-16 h-1 bg-accent mx-auto"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {values.map((val, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6">
              {val.icon}
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">{val.title}</h4>
            <p className="text-text-muted text-sm leading-relaxed">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
