import { ChevronRight } from 'lucide-react'

export function NextGenLogistics() {
  return (
    <div className="md:col-span-3 bg-white border border-slate-100 rounded-[40px] p-12 md:p-20 flex flex-col justify-between relative group hover:border-accent/30 transition-all duration-500">
       <div>
         <div className="flex justify-between items-center mb-12">
           <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">PROJECT HARBOR</span>
           <span className="text-accent text-[10px] font-black tracking-widest uppercase">COMING Q4 2024</span>
         </div>
         
         <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Next-Gen Logistics</h2>
         <p className="text-text-muted text-lg leading-relaxed max-w-xl">
           We are currently in stealth mode developing an integrated logistics engine designed to streamline cross-border trade and last-mile delivery across the continent.
         </p>
       </div>

       <div className="flex justify-between items-center mt-20 pt-12 border-t border-slate-50">
          <div className="flex -space-x-4">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100"></div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-accent flex items-center justify-center text-[10px] font-bold">+12</div>
          </div>
          <button className="text-primary font-black text-xs tracking-widest uppercase flex items-center gap-2 hover:text-accent transition-colors">
            STAY TUNED <ChevronRight className="w-4 h-4" />
          </button>
       </div>
    </div>
  )
}
