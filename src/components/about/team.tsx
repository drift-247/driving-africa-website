import { motion } from 'framer-motion'

export function Team() {
  const team = [
    {
      name: 'Douglas Emmanuel',
      role: 'Lead Mobile Engineer',
      img: '/team/douglas.jpg',
    },
    {
      name: 'Akinbayo Clinton',
      role: 'Backend Engineer',
      img: '/team/clinton.png',
    },
    {
      name: 'Stella Effiong',
      role: 'Cybersecurity Engineer',
      img: '/team/stella.jpeg',
    },
    {
      name: 'Borngreat Ikwutah',
      role: 'Frontend Engineer',
      img: '/team/borngreat.png',
    },
  ]

  return (
    <section className="py-20 md:py-24 px-6 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-black text-primary mb-4">
          The Driving Force
        </h2>
        <p className="text-text-muted max-w-xl mx-auto">
          A lean, focused team building something meaningful for Africa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="text-center group"
          >
            <div className="relative mb-6 overflow-hidden rounded-[30px] aspect-square">
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <h4 className="text-lg font-black text-primary group-hover:text-accent transition-colors">
              {member.name}
            </h4>
            <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mt-1">
              {member.role}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
