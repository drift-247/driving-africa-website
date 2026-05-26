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
          Isaac Nnamdi is the Founder and CEO of Drift247, a mobility platform built to redefine ride-hailing for both drivers and passengers across Nigeria and beyond.
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
            With over a decade of driving experience using ride-hailing services within Nigeria, Isaac Nnamdi has gained deep insight into the everyday realities drivers and passengers face, from poor driver welfare and unpaid wait times to safety concerns, vehicle breakdowns, and the lack of genuine support systems within the industry.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Driven by a deep passion for mobility, people, and problem-solving. Isaac Nnamdi founded Drift247 to bridge these gaps and create a platform that prioritizes fairness, safety, reliability, and community. His vision was shaped not only by his professional experience as a driver, but also by real-life encounters that exposed the limitations of existing transport systems within the Nigerian environment.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed">
            Under his leadership, Drift247 is being built as more than just a ride-hailing platform, but as a people-focused ecosystem designed to improve the experience, dignity, and opportunities of both drivers and passengers.
          </p>
          <p className="text-lg text-text-muted mb-6 leading-relaxed font-semibold">
            Isaac Nnamdi currently leads the company’s vision, growth, partnerships, and strategic direction from the United Kingdom.
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
