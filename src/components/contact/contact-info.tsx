import { Mail, Phone, MapPin, Globe, Handshake } from 'lucide-react'

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'hello@drivingafricadigitalserviceslimited.com',
      sub: 'Direct support and general inquiries'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: 'Partnerships',
      value: 'partnerships@drivingafricadigitalserviceslimited.com',
      sub: 'Collaborate and grow with us'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+234 1 000 0000',
      sub: 'Mon-Fri from 9am to 6pm'
    }
  ]

  return (
    <div className="space-y-8">
      {contactDetails.map((detail, i) => (
        <div key={i} className="flex gap-6 items-start group">
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
            {detail.icon}
          </div>
          <div className="min-w-0">
            <h4 className="text-xl font-bold text-primary mb-1">{detail.title}</h4>
            <a 
              href={`mailto:${detail.value}`} 
              className="text-primary font-black mb-1 block hover:text-accent transition-colors break-all text-sm md:text-base"
            >
              {detail.value}
            </a>
            <p className="text-text-muted text-sm">{detail.sub}</p>
          </div>
        </div>
      ))}

      <div className="pt-8 border-t border-slate-100">
        <h4 className="text-xs font-bold tracking-[0.2em] text-primary/30 uppercase mb-6">Our Global Presence</h4>
        <div className="grid grid-cols-2 gap-4">
           {['Lagos, Nigeria', 'Nairobi, Kenya', 'Accra, Ghana', 'London, UK'].map((city, i) => (
             <div key={i} className="flex items-center gap-2 text-primary/70 text-sm font-semibold">
                <Globe className="w-3 h-3 text-accent" /> {city}
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
