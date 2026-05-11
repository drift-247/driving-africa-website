import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

export function AboutHero() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="hero-badge">OUR STORY</span>
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-tight">
          Built From Experience. Driven by Purpose.
        </h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Driving Africa Digital Services Limited was founded in 2026 by Isaac
          Nnamdi and Sarah Effiong — two people who saw the same problem from
          very different angles.
        </p>

        <motion.div
          initial={false}
          animate={{
            maxHeight: isExpanded ? 1000 : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            {
              'Our mission is simple: build digital products that feel local, reliable, and genuinely useful.'
            }
          </p>
        </motion.div>

        <button
          className="btn-primary"
          onClick={() => setIsExpanded((v) => !v)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </motion.div>

      <motion.div
        style={{ y }}
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-slate-100 rounded-[40px] translate-x-4 translate-y-4 -z-10" />
        <img
          src="/about-hero.png"
          alt="About Drift Africa"
          className="w-full h-[500px] rounded-[40px] shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  )
}
