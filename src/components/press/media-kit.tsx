import { Download, ExternalLink, FileText, ImageIcon } from 'lucide-react'

export function MediaKit() {
  const partners = [
    { name: 'Prembly', desc: 'Identity verification and KYC infrastructure' },
    { name: 'Paystack', desc: 'Payment processing' },
    { name: 'Termii', desc: 'SMS and communication infrastructure' }
  ]

  return (
    <section className="py-32 px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* About the Company */}
          <div className="bg-white p-12 md:p-16 rounded-[40px] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-black text-primary mb-8 tracking-tight">
              About the Company
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Driving Africa Digital Services Limited is a Nigerian technology company founded in 2026 by Isaac Nnamdi and Sarah Effiong. The company builds digital products for African markets, starting with Drift247 — a safety-first ride-hailing platform currently in development and launching in select Nigerian cities.
            </p>
          </div>

          {/* Technology Partners */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-primary mb-4">Built With</h2>
              <p className="text-text-muted text-lg">
                We partner with best-in-class African and global technology providers to power our products.
              </p>
            </div>

            <div className="space-y-6">
              {partners.map((partner, i) => (
                <div key={i} className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 group hover:border-accent transition-colors">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {partner.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{partner.name}</h4>
                    <p className="text-text-muted text-sm">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
