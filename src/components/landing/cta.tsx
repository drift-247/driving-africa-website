import { motion } from 'framer-motion'

export function Cta() {
  return (
    <section className="py-20 px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto bg-[#8a6d2b] rounded-[40px] px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"
        />

        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to move Africa forward?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            We&apos;re building in public, growing fast, and always open to the
            right conversations.
          </p>
        </div>

        <motion.a
          href="mailto:hello@drivingafricadigitalserviceslimited.com,partnerships@drivingafricadigitalserviceslimited.com"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 bg-primary text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-black transition-colors shadow-2xl block text-center"
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  )
}
