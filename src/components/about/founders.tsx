import { Linkedin, Mail } from 'lucide-react'

export function Founders() {
  const founders = [
    {
      name: 'Isaac Nnamdi',
      role: 'Founder & Chief Executive Officer',
      img: '/Isaac-founder.jpg.jpeg',
      email: 'isaac.nnamdi@drivingafricadigitalserviceslimited.com',
      linkedin:
        'https://www.linkedin.com/in/isaac-nnamdi-28601819a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      bio: "Isaac Nnamdi is the Founder and Chief Executive Officer of Driving Africa Digital Services Limited. Passionate about business, leadership, and solving real-world problems through technology, he founded Drift247 with a clear vision: to build a customer-first mobility platform that is safe, dependable, and designed around the everyday needs of people across Africa. As CEO, Isaac leads the company's vision, business strategy, partnerships, and long-term growth from the United Kingdom. Guided by his personal philosophy - Build with Purpose. Lead with Love. Serve with Excellence. - He is committed to building technology that improves lives, creates opportunities, and contributes to Africa's future.",
    },
    {
      name: 'Sarah Effiong',
      role: 'Co-founder & CTO',
      img: '/team/sarah-cto.jpg',
      email: 'sarah.effiong@drivingafricadigitalserviceslimited.com',
      linkedin:
        'https://www.linkedin.com/in/sarah-i-effiong-09913a210?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      bio: 'Sarah Effiong is the Co-Founder and Chief Technology Officer of Driving Africa Digital Services Limited. As an experienced software engineer and AI specialist, she leads the company’s technology strategy, engineering execution, and product development. Working closely with the engineering team, Sarah helps transform ambitious ideas into scalable, secure, and reliable technology products. Her leadership supports the development of Drift247 and the wider technology foundation of Driving Africa Digital Services Limited.',
    },
  ]

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-black text-primary mb-4">
          Meet the Founders
        </h2>
        <p className="text-text-muted mb-16 max-w-2xl">
          Two builders. One mission.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, i) => (
            <div
              key={i}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col md:flex-row lg:flex-col xl:flex-row border border-slate-100 group hover:shadow-xl transition-all duration-500"
            >
              <div className="w-full md:w-64 lg:w-full xl:w-64 h-80 md:h-auto lg:h-80 xl:h-auto overflow-hidden flex items-center justify-center">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
                <h4 className="text-2xl font-black text-primary">
                  {founder.name}
                </h4>
                <p className="text-accent text-[10px] font-black tracking-widest uppercase mb-6">
                  {founder.role}
                </p>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  {founder.bio}
                </p>
                <div className="flex gap-4">
                  <a
                    href={`mailto:${founder.email}`}
                    title={founder.email}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  {founder.linkedin ? (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-primary transition-colors"
                      aria-label={`${founder.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  ) : (
                    <Linkedin className="w-4 h-4 text-slate-300 hover:text-primary cursor-pointer transition-colors" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
