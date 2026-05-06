import { TrendingUp, Users, MapPin } from 'lucide-react'

export function Potential() {
  const cards = [
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: 'Fastest Growing Market',
      description: 'Home to some of the world\'s fastest-growing economies and a surging middle class ready for digital services.',
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Youngest Population',
      description: 'A demographic dividend of digital natives who are rapidly adopting new technologies and shaping trends.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Unmet Needs',
      description: 'Immense opportunities to solve real-world problems in logistics, finance, and social services via innovation.',
    },
  ]

  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl font-black text-primary mb-6">Unlocking Africa's Potential</h2>
          <p className="text-text-muted leading-relaxed">
            The continent is not just a market; it's the future of global innovation. We build for the unique opportunities of today to define the economy of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
