import { Mail, Phone, MapPin, Globe, Handshake } from 'lucide-react'

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'drivingafricadigital.ng@gmail.com',
      sub: 'Direct support and general inquiries'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Office',
      value: 'Abibatu Amoke Bello Close Lekki, Lagos Nigeria',
      sub: 'Visit us for a coffee'
    }
  ]

  return (
    <div className="space-y-12">
      {contactDetails.map((detail, i) => (
        <div key={i} className="flex gap-6 items-start group">
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
            {detail.icon}
          </div>
          <div className="min-w-0">
            <h4 className="text-xl font-bold text-primary mb-1">{detail.title}</h4>
            <div 
              className="text-primary font-black mb-1 block hover:text-accent transition-colors break-words text-sm md:text-base"
            >
              {detail.value}
            </div>
            <p className="text-text-muted text-sm">{detail.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
