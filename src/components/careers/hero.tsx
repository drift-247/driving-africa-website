import { motion } from 'framer-motion'

export function CareersHero() {
  return (
    <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="hero-badge">JOIN THE MOVEMENT</span>
        <h1 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-tight max-w-4xl mx-auto">
          Build Africa&apos;s Digital Future With Us
        </h1>
        <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          We&apos;re a small, focused team tackling big problems. If you care
          about building things that matter for Africa, you&apos;ll fit right
          in.
        </p>
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary px-12 py-4 mx-auto"
        >
          View Opportunities
        </motion.button>
      </motion.div>
    </section>
  )
}
