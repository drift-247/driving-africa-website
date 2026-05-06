import { Globe } from 'lucide-react'

export function ProductPhilosophy() {
  const principles = [
    { id: '01', title: 'Built for Local Realities', desc: 'Designed around African infrastructure, connectivity, and user behaviour' },
    { id: '02', title: 'Safety and Trust First', desc: 'Every product puts user protection at its core' },
    { id: '03', title: 'Scalable from Day One', desc: 'Built to grow beyond Nigeria, across the continent' }
  ]

  return (
    <div className="md:col-span-2 bg-primary text-white p-12 rounded-[40px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
         <Globe className="w-32 h-32" />
      </div>
      
      <h2 className="text-3xl font-black mb-8">Our Product Philosophy</h2>
      <p className="text-slate-300 mb-10 text-sm leading-relaxed">
        We don't build for the sake of building. Every product we ship starts with a real gap in the African market and is held to three standards:
      </p>

      <div className="space-y-8">
         {principles.map((item, idx) => (
           <div key={idx} className="flex gap-4">
              <span className="text-accent font-black text-xs pt-1">{item.id}</span>
              <div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
           </div>
         ))}
      </div>
    </div>
  )
}
