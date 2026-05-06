import { Download, ExternalLink, FileText, ImageIcon } from 'lucide-react'

export function MediaKit() {
  return (
    <section className="py-32 px-8 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-primary mb-6 tracking-tight">
            Media Kit & Brand Assets
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Official resources for journalists and partners. Use these high-resolution assets for publications and media coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Official Logotypes */}
          <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
            <div>
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-primary mb-6">Official Logotypes</h3>
              <p className="text-slate-500 leading-relaxed mb-10">
                Download our complete brand identity package including vector logos in various colorways (Primary, Mono, Reversed).
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-3.5 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-accent hover:text-primary transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                .EPS & .SVG
              </button>
              <button className="bg-accent text-primary px-8 py-3.5 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                .PNG (High-Res)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Executive Portraits */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-primary mb-3">Executive Portraits</h3>
                <p className="text-slate-500 text-sm mb-6">Official headshots and candids of our leadership team.</p>
                <button className="text-[10px] font-black tracking-widest uppercase text-primary flex items-center gap-2 hover:gap-3 transition-all">
                  Download Gallery <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              {/* Abstract icon watermark */}
              <ImageIcon className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 opacity-50 rotate-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Style Guide */}
              <div className="bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between group hover:bg-primary/95 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-4">Style Guide</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-8">Usage rules for typography, color, and spacing.</p>
                </div>
                <button className="w-full border border-white/20 bg-white/5 py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all">
                  View PDF
                </button>
              </div>

              {/* Fact Sheet */}
              <div className="bg-accent p-10 rounded-[2.5rem] text-primary flex flex-col justify-between group hover:bg-accent/90 transition-colors">
                <div>
                  <h3 className="text-xl font-bold mb-4">Fact Sheet</h3>
                  <p className="text-[#8a6d2b] text-xs leading-relaxed mb-8">Company overview and core statistics at a glance.</p>
                </div>
                <button className="w-full bg-[#3d2f0a] text-white py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase hover:bg-primary transition-all">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
