import { Briefcase, MapPin } from 'lucide-react'

export function OpenRoles() {
  return (
    <section className="py-24 bg-slate-50/50 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-primary mb-6">Current Openings</h2>
        <p className="text-text-muted mb-16 max-w-xl mx-auto">
          We're not actively hiring right now, but we're always open to hearing from exceptional people.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm text-center group hover:border-accent/30 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
               <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-4">Speculative Application</h3>
            <p className="text-text-muted mb-10 max-w-lg mx-auto leading-relaxed">
              If you're an engineer, designer, or operator who believes in what we're building, reach out. We're always open to hearing from exceptional people.
            </p>
            <div className="flex justify-center">
               <a 
                 href="mailto:careers@drivingafricadigital.ng" 
                 className="bg-accent text-primary px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-2"
               >
                 Send a Speculative Application <Briefcase className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
