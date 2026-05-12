import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { CircleCheck } from 'lucide-react'

const items = [
  'Verified driver onboarding',
  'Wallet-protected payments',
  'Real-time safety monitoring',
]

export function FeaturedProduct() {
  return (
    <section className="py-20 md:py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative group"
        >
          <motion.div
            animate={{ opacity: [0.2, 0.38, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"
          />
          <motion.img
            src="/homepage-mockup.png"
            alt="Drift247 App Mockup"
            className="relative w-full h-auto max-w-md mx-auto rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
        >
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4 block">
            FLAGSHIP PRODUCT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8">
            Drift247
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            A safety-first ride-hailing platform built for Nigeria. Drift247 was
            born from a firsthand understanding of the gaps in Nigeria&apos;s
            transportation sector - unreliable rides, driver welfare neglect,
            and a lack of trust between riders and drivers. We&apos;re fixing
            that from the ground up.
          </p>

          <ul className="space-y-4 mb-12">
            {items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                className="flex items-center gap-3 text-slate-200"
              >
                <CircleCheck className="w-5 h-5 text-accent" />
                <span className="font-semibold text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://drift247.africa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary px-10 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-accent transition-colors w-full sm:w-auto block text-center"
            >
              Try Drift247
            </motion.a>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/30 text-white px-10 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <Link to="/products">View All Products</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
