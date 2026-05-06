import { CheckCircle2 } from 'lucide-react'

export function FeaturedProduct() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side: Product Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img
            src="/homepage-mockup.png"
            alt="Drift247 App Mockup"
            className="relative w-full h-auto max-w-md mx-auto rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4 block">
            FLAGSHIP PRODUCT
          </span>
          <h2 className="text-5xl font-black mb-8">Drift247</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            A safety-first ride-hailing platform built for Nigeria. Drift247 was
            born from a firsthand understanding of the gaps in Nigeria's
            transportation sector - unreliable rides, driver welfare neglect,
            and a lack of trust between riders and drivers. We're fixing that
            from the ground up.
          </p>

          <ul className="space-y-4 mb-12">
            {[
              'Verified driver onboarding',
              'Wallet-protected payments',
              'Real-time safety monitoring',
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="font-semibold text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary px-10 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors">
              Try Drift247
            </button>
            <button className="border border-white/30 text-white px-10 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
