import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

export function AboutHero() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 30])

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="hero-badge">OUR STORY</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-8 leading-tight">
          Built From Experience. Driven by Purpose.
        </h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Driving Africa Digital Services Limited was founded in 2026 by Isaac
          Nnamdi and Sarah Effiong - two people who saw the same problem from
          very different angles.
        </p>

        <motion.div
          initial={false}
          animate={{
            maxHeight: isExpanded ? 2000 : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Isaac spent years behind the wheel as a driver on platforms like
            Uber. He saw firsthand what the existing system got wrong: drivers
            treated as an afterthought, no real community, and passengers with
            genuine safety concerns that nobody was seriously addressing. He
            knew there was a better way to build this.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Sarah brought the technical firepower. A seasoned backend and AI/ML
            engineer with years of experience leading engineering and product
            teams, she understood exactly what it would take to build a platform
            that could hold up at scale and do it right.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed font-semibold">
            Together, they founded Drift247: a safety-first ride-hailing
            platform built specifically for Nigeria, with plans to expand across
            Africa.
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
        className="relative mt-12 md:mt-0"
      >
        <div className="absolute inset-0 bg-slate-100 rounded-[30px] md:rounded-[40px] translate-x-3 md:translate-x-4 translate-y-3 md:translate-y-4 -z-10" />
        <img
          src="/about-hero.png"
          alt="About Drift Africa"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[30px] md:rounded-[40px] shadow-2xl object-cover"
        />
      </motion.div>
    </section>
  )
}
