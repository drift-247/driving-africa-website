import { TrendingUp, Users, MapPin } from 'lucide-react'

export function Potential() {
  const cards = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: '500+',
      description: 'Waitlist Sign-ups',
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: '2',
      description: 'Founding Team Members',
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: '3',
      description: 'Launch Cities',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6">Unlocking Africa's Potential</h2>
          <p className="text-text-muted leading-relaxed">
            Nigeria alone has over 200 million people who deserve better digital infrastructure. We're starting with mobility and building outward - creating a portfolio of products that solve real problems for real people across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-3xl font-black text-primary mb-2">{card.title}</h3>
              <p className="text-text-muted font-bold uppercase tracking-widest text-xs">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
