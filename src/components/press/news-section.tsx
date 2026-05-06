import { ArrowLeft, ArrowRight } from 'lucide-react'

const NEWS_ITEMS = [
  {
    category: 'CORPORATE',
    title: 'Driving Africa Digital Services Limited Announces Series B Expansion',
    excerpt: 'Strategic investment round secures $45M to accelerate digital infrastructure development across East Africa.',
    date: 'MAR 12, 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    category: 'PARTNERSHIP',
    title: 'Strategic Alliance with Global Tech Innovators',
    excerpt: 'New joint venture set to redefine cloud computing accessibility for emerging pan-African entrepreneurs.',
    date: 'FEB 28, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
  },
  {
    category: 'INSIGHTS',
    title: 'Q4 Digital Progress Report: Impact and Growth',
    excerpt: 'Detailed analysis of digital adoption rates and technological economic impact across our portfolio regions.',
    date: 'JAN 15, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  }
]

export function NewsSection() {
  return (
    <section className="py-32 px-8 bg-white selection:bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-black text-primary mb-6 tracking-tight">
            Latest News
          </h2>
          <div className="w-20 h-1 bg-accent"></div>
        </div>

        <div className="py-20 border-2 border-dashed border-slate-100 rounded-[40px] text-center">
          <p className="text-slate-400 text-lg font-medium">
            No press releases yet — check back soon.
          </p>
        </div>
      </div>
    </section>
  )
}
