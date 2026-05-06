import { Server, Wallet, Smartphone, Sparkles } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: <Server className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: 'Scalable Infrastructure',
      description:
        'Developing robust backends that handle the unique connectivity challenges across diverse African regions.',
    },
    {
      icon: <Wallet className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: 'Localized FinTech',
      description:
        'Integrating mobile money and localized payment gateways to ensure seamless transactions for everyone.',
    },
    {
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: 'Mobile-First Design',
      description:
        'Prioritizing mobile accessibility and data efficiency for the next billion users coming online.',
    },
    {
      icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />,
      title: 'AI Integration',
      description:
        'Leveraging artificial intelligence to provide predictive insights tailored to African market dynamics.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Better Header Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2540] leading-[1.1] tracking-tight">
              Closing the Gap Between African Innovation and Everyday Life
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full" />{' '}
            {/* Visual separator */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Africa's digital economy is growing fast - but too many people are
              still underserved. We build technology thoughtfully designed for
              local infrastructure and local needs.
            </p>
          </div>

          {/* Features Grid: More breathing room */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-white border border-slate-100 rounded-2xl hover:border-accent/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="mb-5 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl group-hover:bg-accent/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Section for Drift247 */}
        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#0A2540] font-medium text-lg text-center md:text-left">
            Our first product,{' '}
            <span className="font-bold text-accent">Drift247</span>, is tackling
            Nigeria's most pressing daily challenges.
          </p>
          <button className="whitespace-nowrap px-8 py-3 bg-[#0A2540] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Learn About Drift247
          </button>
        </div>
      </div>
    </section>
  )
}
