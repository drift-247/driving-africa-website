export function Team() {
  const team = [
    { name: 'Borngreat Ikwutah', role: 'Frontend Engineer', img: '/team/borngreat.png' },
    { name: 'Glory Edem', role: 'Backend Engineer', img: '/team/glory.png' },
    { name: 'Douglas', role: 'Mobile Engineer', img: '/team/douglas.jpg' },
    { name: 'Stella', role: 'Cybersecurity Engineer', img: '/team/stella.jpeg' },
  ]

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-black text-primary mb-4">The Driving Force</h2>
        <p className="text-text-muted max-w-xl mx-auto">
          A multi-disciplinary team of engineers and creators working together to build world-class digital products.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-[30px] aspect-square">
               <img 
                 src={member.img} 
                 alt={member.name} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
               />
               <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <h4 className="text-lg font-black text-primary group-hover:text-accent transition-colors">{member.name}</h4>
            <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
