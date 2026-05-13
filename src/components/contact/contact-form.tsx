import { Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50 text-center py-24">
        <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-4xl font-black text-primary mb-4">Message Received!</h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ve received your message and will
          get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-10 text-primary font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors underline underline-offset-8"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50">
      <h2 className="text-3xl font-black text-primary mb-8">Send us a Message</h2>
      
      {/* Hidden iframe to handle Google Form submission without redirecting */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
      ></iframe>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeHe_xPNV2DLwyRc_iW6euWtjsiKQrIhfp6GaxzQtQuxeeNDw/formResponse"
        method="POST"
        target="hidden_iframe"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">
              Full Name
            </label>
            <input
              name="entry.436389610"
              required
              type="text"
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">
              Email Address
            </label>
            <input
              name="entry.956284472"
              required
              type="email"
              placeholder="john@example.com"
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">
            Subject
          </label>
          <select
            name="entry.1731272416"
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
          <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">
            Message
          </label>
          <textarea
            name="entry.1503124538"
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          Send Message <Send className="w-4 h-4" />
        </button>
        <p className="text-center text-text-muted text-xs mt-6 italic">
          We typically respond within 1–2 business days.
        </p>
      </form>
    </div>
  )
}
