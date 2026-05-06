import { Server, Wallet, Smartphone, Sparkles } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: 'Scalable Infrastructure',
      description: 'Developing robust backends that handle the unique connectivity challenges across diverse African regions.',
    },
    {
      icon: <Wallet className="w-6 h-6 text-accent" />,
      title: 'Localized FinTech',
      description: 'Integrating mobile money and localized payment gateways to ensure seamless transactions for everyone.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: 'Mobile-First Design',
      description: 'Prioritizing mobile accessibility and data efficiency for the next billion users coming online.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: 'AI Integration',
      description: 'Leveraging artificial intelligence to provide predictive insights tailored to African market dynamics.',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-black text-primary leading-tight relative">
            Empowering the <br /> continent through <br /> tech.
            <span className="block w-12 h-1 bg-accent mt-6"></span>
          </h2>
        </div>
        
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group rounded-xl"
            >
              <div className="mb-6 p-3 bg-slate-50 rounded-lg inline-block group-hover:bg-accent/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
