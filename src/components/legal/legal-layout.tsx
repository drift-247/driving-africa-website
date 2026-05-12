import { CheckCircle2, Mail, ShieldCheck, Scale } from 'lucide-react'
import type { ReactNode } from 'react'

interface LegalCard {
  title: string
  description: string
}

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  description?: string
  cards?: LegalCard[]
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, description, cards, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 font-inter">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Badge */}
        <div className="flex items-center gap-2 text-primary/40 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
          <Scale className="w-3 h-3" />
          LEGAL DOCUMENT
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black text-primary mb-10 tracking-tighter">
          {title}
        </h1>

        {/* Last Updated & Intro */}
        <div className="max-w-4xl mb-20">
          <p className="text-xl text-slate-500 leading-relaxed">
            <span className="text-slate-800 font-medium">Last updated: {lastUpdated}.</span> {description}
          </p>
        </div>

        {/* Info Cards Grid */}
        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {cards.map((card, i) => (
              <div key={i} className="bg-[#f0f4f9] border border-slate-100 p-8 rounded-2xl group hover:border-primary/20 transition-all duration-300">
                <h3 className="text-primary font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Main Content Area */}
        <div className="max-w-5xl">
          <div className="prose prose-slate prose-xl max-w-none prose-headings:text-primary prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-primary">
            {children}
          </div>

          {/* Legal Inquiry Section */}
          <div className="mt-32 p-12 md:p-16 bg-primary rounded-[3rem] text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -mr-40 -mt-40 transition-all duration-700 group-hover:scale-110" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl font-black mb-6">Legal Inquiry</h2>
                <p className="text-slate-300 text-lg mb-0 leading-relaxed">
                  For questions regarding these legal documents or to request IP permissions, please contact our legal council at our headquarters.
                </p>
              </div>
              
              <a 
                href="mailto:hello@drivingafricadigitalserviceslimited.com"
                className="shrink-0 inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-accent/30 active:translate-y-0"
              >
                <Mail className="w-5 h-5" />
                Contact Legal Council
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/**
 * Specialized Legal Components to match the requested design
 */

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-20 last:mb-0">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-1.5 h-10 bg-primary rounded-full mt-1.5" />
        <h2 className="text-4xl font-black text-primary m-0 !mb-0 tracking-tight">{title}</h2>
      </div>
      <div className="pl-0">
        {children}
      </div>
    </section>
  )
}

export function LegalInfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-12 p-10 bg-[#eef4ff] border border-blue-100 rounded-[2rem] relative overflow-hidden">
      <div className="text-slate-600 leading-relaxed m-0 text-lg font-medium italic">
        {children}
      </div>
    </div>
  )
}

export function LegalChecklist({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0 my-12 space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-5 p-0 m-0">
          <div className="bg-primary rounded-full p-1 mt-1 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-accent" />
          </div>
          <span className="text-slate-600 leading-relaxed font-medium text-lg">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function LegalAccentCard({ text }: { text: string }) {
  return (
    <div className="my-20 p-16 md:p-24 bg-primary rounded-[3rem] text-center group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <ShieldCheck className="w-10 h-10 text-accent" />
        </div>
        <p className="text-3xl md:text-4xl font-black text-white max-w-3xl mx-auto leading-tight m-0 tracking-tight">
          {text}
        </p>
      </div>
    </div>
  )
}
