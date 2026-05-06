import { Send } from 'lucide-react'

export function ContactForm() {
  return (
    <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50">
      <h2 className="text-3xl font-black text-primary mb-8">Send us a Message</h2>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Subject</label>
          <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
            <option>General Inquiry</option>
            <option>Partnership</option>
            <option>Product Support</option>
            <option>Media & Press</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Message</label>
          <textarea 
            rows={5} 
            placeholder="Tell us how we can help..." 
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
        </div>

        <button className="btn-primary w-full py-5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          Send Message <Send className="w-4 h-4" />
        </button>
        <p className="text-center text-text-muted text-xs mt-6 italic">
          We typically respond within 1–2 business days.
        </p>
      </form>
    </div>
  )
}
