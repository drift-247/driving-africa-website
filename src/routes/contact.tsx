import { createFileRoute } from '@tanstack/react-router'
import { ContactHero } from '#/components/contact/hero'
import { ContactForm } from '#/components/contact/contact-form'
import { ContactInfo } from '#/components/contact/contact-info'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
             <h2 className="text-4xl font-black text-primary mb-8 leading-tight">We're here to help you <br /> navigate the digital frontier.</h2>
             <p className="text-text-muted text-lg mb-12 max-w-md leading-relaxed">
               Our dedicated team is ready to support your business goals. Reach out to us and let's explore how we can build the future together.
             </p>
             <ContactInfo />
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Map Placeholder or Visual Footer */}
      <section className="h-[400px] bg-slate-100 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary opacity-5"></div>
         <div className="flex items-center justify-center h-full">
            <div className="text-center">
               <span className="text-primary/20 font-black text-6xl md:text-8xl tracking-tighter opacity-10">LOCATIONS</span>
               <p className="text-primary/30 font-bold uppercase tracking-[0.5em] mt-4">Africa & Global</p>
            </div>
         </div>
      </section>
    </main>
  )
}
