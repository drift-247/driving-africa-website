import { Globe } from 'lucide-react'

export function ProductPhilosophy() {
  const principles = [
    { id: '01', title: 'Infrastructure Resilience', desc: 'Systems built to thrive in volatile connectivity environments.' },
    { id: '02', title: 'Hyper-Localization', desc: 'User experiences that respect and reflect local cultural and economic nuances.' },
    { id: '03', title: 'Scalable Impact', desc: 'Every feature is measured by its ability to drive tangible economic progress.' }
  ]

  return (
    <div className="md:col-span-2 bg-primary text-white p-12 rounded-[40px] relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
         <Globe className="w-32 h-32" />
      </div>
      
      <h2 className="text-3xl font-black mb-8">Our Product Philosophy</h2>
      <p className="text-slate-300 mb-10 text-sm leading-relaxed">
        We don't just build apps; we architect solutions. Our approach is grounded in three core principles:
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
