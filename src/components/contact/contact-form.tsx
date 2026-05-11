import { Send } from 'lucide-react'

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const formSubject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Route emails based on the subject selected
    let toEmail = 'hello@drivingafricadigitalserviceslimited.com'
    if (formSubject === 'Partnership') {
      toEmail = 'partnerships@drivingafricadigitalserviceslimited.com'
    }

    const subject = encodeURIComponent(`Website Contact: ${formSubject}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50">
      <h2 className="text-3xl font-black text-primary mb-8">Send us a Message</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Full Name</label>
            <input 
              name="name"
              required
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Email Address</label>
            <input 
              name="email"
              required
              type="email" 
              placeholder="john@example.com" 
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Subject</label>
          <select 
            name="subject"
            required
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors appearance-none"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Product Support">Product Support</option>
            <option value="Media & Press">Media & Press</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">Message</label>
          <textarea 
            name="message"
            required
            rows={5} 
            placeholder="Tell us how we can help..." 
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full py-5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
          Send Message <Send className="w-4 h-4" />
        </button>
        <p className="text-center text-text-muted text-xs mt-6 italic">
          We typically respond within 1–2 business days.
        </p>
      </form>
    </div>
  )
}
