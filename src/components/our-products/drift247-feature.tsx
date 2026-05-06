import { ShieldCheck, Wallet, Zap, Users, ChevronRight } from 'lucide-react'

export function Drift247Feature() {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="bg-slate-50/50 rounded-[40px] overflow-hidden grid md:grid-cols-2 items-center border border-slate-100">
        <div className="p-12 md:p-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary text-white rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-primary">Drift247</h2>
          </div>
          
          <p className="text-text-muted mb-12 leading-relaxed">
            Nigeria's safety-first ride-hailing platform. Built from firsthand experience of the gaps in Nigeria's transportation sector — driver welfare, passenger safety, and payment reliability. Drift247 addresses all three from the ground up.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-primary">Safety First</h4>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Verified driver onboarding</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wallet className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-primary">Wallet Payments</h4>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Cashless & Secure</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-primary">Driver Hub</h4>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Community Support</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-primary">Real-Time Tracking</h4>
                <p className="text-[10px] text-text-muted uppercase tracking-widest mt-1">Live trip monitoring</p>
              </div>
            </div>
          </div>

          <button className="bg-primary text-white px-10 py-4 text-xs font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-accent transition-colors group">
            Visit Drift247 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative h-full min-h-[500px] flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-white">
           <img 
             src="/products-drift-preview.png" 
             alt="Drift247 Preview" 
             className="relative z-10 w-full max-w-sm drop-shadow-2xl animate-in zoom-in-95 duration-1000"
           />
           <div className="absolute inset-0 bg-blue-100/20 blur-3xl rounded-full scale-75"></div>
        </div>
      </div>
    </section>
  )
}
