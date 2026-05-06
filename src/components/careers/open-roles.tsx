import { Briefcase, MapPin } from 'lucide-react'

export function OpenRoles() {
  return (
    <section className="py-24 bg-slate-50/50 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-primary mb-6">Open Roles</h2>
        <p className="text-text-muted mb-16 max-w-xl mx-auto">
          Become a part of the most important digital journey in Africa. Explore our current openings and find your place.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Featured Placeholder for empty roles or general interest */}
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm text-center group hover:border-accent/30 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
               <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-4">Remote Roles</h3>
            <p className="text-text-muted mb-10 max-w-md mx-auto leading-relaxed">
              While we don't have active roles matching your specific search right now, we are always looking for digital innovators. Send us your resume anyway!
            </p>
            <div className="flex justify-center gap-4">
               <button className="bg-accent text-primary px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-colors">See past roles</button>
               <button className="border border-slate-200 text-primary px-8 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-slate-50 transition-colors">Go back to home</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
