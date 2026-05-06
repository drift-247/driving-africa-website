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
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-primary mb-6 tracking-tight">
              Latest News & Releases
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Authoritative updates on investments, partnerships, and technological advancements within the DADSL ecosystem.
            </p>
          </div>
          
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:border-accent group">
              <ArrowLeft className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </button>
            <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all hover:border-accent group">
              <ArrowRight className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {NEWS_ITEMS.map((news, i) => (
            <div key={i} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[1.4/1]">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase mb-4 block">
                  {news.category}
                </span>
                <h3 className="text-2xl font-black text-primary mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                  {news.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow">
                  {news.excerpt}
                </p>
                
                <div className="pt-8 flex items-center justify-between border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider">
                    {news.date}
                  </span>
                  <button className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-primary transition-all group-hover:gap-5">
                    Read More <ArrowRight className="w-4 h-4 text-accent" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
