import { Mail, Instagram, Linkedin } from 'lucide-react'

export function MediaContact() {
  return (
    <section className="py-32 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl">
        {/* Left Side: Contact Info */}
        <div className="md:w-1/2 p-12 md:p-20 bg-white">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">
            Media Contact
          </h2>
          <p className="text-slate-500 text-lg mb-16 leading-relaxed">
            For press inquiries, interview requests, or further information
            regarding Driving Africa Digital Services Limited, please reach out
            to our communications team.
          </p>

          <div className="space-y-12 mb-16">
            {/* Email */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                  EMAIL ADDRESS
                </span>
                <a
                  href="mailto:press@drivingafricadigitalserviceslimited.com"
                  className="text-xs sm:text-base md:text-lg lg:text-xl font-black text-primary hover:text-accent transition-colors break-all"
                >
                  hello@drivingafricadigitalserviceslimited.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-slate-400 text-sm italic mb-8">
              Standard response time for media inquiries is within 24 business
              hours.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/drift247_ng?igsh=a2RjdmVydjQ2aW80"
                target="_blank"
                rel="noopener noreferrer"
                title="Drift247 on Instagram"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/driving-africa-digital-services-limited/"
                target="_blank"
                rel="noopener noreferrer"
                title="Driving Africa on LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 relative min-h-[500px]">
          <img
            src="/contact-hero-1.png"
            alt="Media Relations Specialist"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10"></div>
        </div>
      </div>
    </section>
  )
}
