import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { useState, useEffect, type FormEvent } from 'react'

const FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeHe_xPNV2DLwyRc_iW6euWtjsiKQrIhfp6GaxzQtQuxeeNDw/formResponse'

const PREFILL_FORM_URL =
  'https://docs.google.com/forms/d/1WKWhsdnMUU7P_DGoGCpIL3Ok6UKq51U4IO6zcMh2kuY/prefill'

const FIELD_MAP = {
  name: 'entry.436389610',
  email: 'entry.956284472',
  subject: 'entry.1731272416',
  message: 'entry.1503124538',
} as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // State to hold the prefilled values parsed from the URL
  const [prefills, setPrefills] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry', // Default select option fallback
    message: '',
  })

  // Parse the URL params on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)

      const nextPrefills = {
        name: params.get(FIELD_MAP.name) || '',
        email: params.get(FIELD_MAP.email) || '',
        subject: params.get(FIELD_MAP.subject) || 'General Inquiry',
        message: params.get(FIELD_MAP.message) || '',
      }

      setPrefills(nextPrefills)
    }
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    const body = new URLSearchParams()
    formData.forEach((value, key) => {
      body.append(key, value as string)
    })

    try {
      await fetch(FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50 text-center py-24 animate-in fade-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-4xl font-black text-primary mb-4">
          Message Received!
        </h2>
        <p className="text-text-muted text-lg leading-relaxed max-w-sm mx-auto">
          Thank you for reaching out. We&apos;ve received your message and will
          get back to you within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-10 text-primary font-bold text-sm tracking-widest uppercase hover:text-accent transition-colors underline underline-offset-8 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-slate-100 border border-slate-50 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="text-3xl font-black text-primary mb-8">
        Send us a Message
      </h2>
      <p className="text-xs text-text-muted mb-8 leading-relaxed">
        The form is preconfigured to send responses to our internal Google Form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-widest text-primary/50 uppercase">
              Full Name
            </label>
            <input
              name={FIELD_MAP.name}
              value={prefills.name}
              onChange={(e) =>
                setPrefills({ ...prefills, name: e.target.value })
              }
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
              name={FIELD_MAP.email}
              value={prefills.email}
              onChange={(e) =>
                setPrefills({ ...prefills, email: e.target.value })
              }
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
            name={FIELD_MAP.subject}
            value={prefills.subject}
            onChange={(e) =>
              setPrefills({ ...prefills, subject: e.target.value })
            }
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
            name={FIELD_MAP.message}
            value={prefills.message}
            onChange={(e) =>
              setPrefills({ ...prefills, message: e.target.value })
            }
            required
            rows={5}
            placeholder="Tell us how we can help..."
            className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-5 rounded-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
        >
          {isSubmitting ? (
            <>
              Sending... <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-center text-text-muted text-xs mt-6 italic">
          We typically respond within 1–2 business days.
        </p>
      </form>
    </div>
  )
}
