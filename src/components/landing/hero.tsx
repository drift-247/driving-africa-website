import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col items-start"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="hero-badge cursor-default"
          >
            NEW & BETTER WAY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary mb-8 leading-[1.1] tracking-tight"
          >
            Driving Africa Digital Services Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-lg text-text-muted mb-10 max-w-lg leading-relaxed"
          >
            Driving Africa Digital Services Ltd builds customer-focused digital products designed for the realities of African markets - starting with Drift247, our mobility platform built around comfort, reliability, and everyday movement. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/products"
            >
              <button className="btn-primary">
                Explore Our Products <ArrowRight className="w-4 h-4" />
              </button>
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/about"
            >
              <button className="btn-outline">Our Story</button>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-full h-full bg-slate-100 rounded-[30px] md:rounded-[40px] -z-10 translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 shadow-inner"
          />

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white group"
          >
            <motion.img
              src="/DA-hero.png"
              alt="Digital Transformation Africa"
              className="w-full h-auto object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-20" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-20" />
    </section>
  )
}
