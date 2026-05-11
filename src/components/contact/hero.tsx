import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <motion.img
        src="/contact-hero.png"
        alt="Contact Us"
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-8"
      >
        <span className="hero-badge bg-accent text-primary">GET IN TOUCH</span>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
          Let&apos;s Build the Future Together.
        </h1>
      </motion.div>
    </section>
  )
}
