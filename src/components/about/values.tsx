import { Lightbulb, Shield, Globe2, Award } from 'lucide-react'

export function Values() {
  const values = [
    { icon: <Shield />, title: 'Safety First', desc: 'Every product decision starts with one question: is this safe for our users?' },
    { icon: <Globe2 />, title: 'African-Centric', desc: 'We build for Africa\'s realities, not imported assumptions.' },
    { icon: <Shield />, title: 'Integrity', desc: 'We operate with transparency — with our users, our drivers, and our investors.' },
    { icon: <Award />, title: 'Excellence', desc: 'We are a small team building at a high standard. Good enough is never enough.' }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center mb-16">
        <h2 className="text-4xl font-black text-primary mb-4">The Values We Live By</h2>
        <div className="w-16 h-1 bg-accent mx-auto"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
