import { ChevronRight } from 'lucide-react'

export function NextGenLogistics() {
  return (
    <div className="md:col-span-3 bg-white border border-slate-100 rounded-[40px] p-12 md:p-20 flex flex-col justify-between relative group hover:border-accent/30 transition-all duration-500">
        <div>
          <div className="flex justify-between items-center mb-12">
            <span className="bg-accent/20 text-accent-600 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">COMING SOON</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">More Products in the Pipeline</h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-xl">
            Drift247 is just the beginning. We are actively exploring new product opportunities across mobility, logistics, and everyday services for the African market. Stay tuned.
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
