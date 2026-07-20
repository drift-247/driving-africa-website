import { motion } from 'framer-motion'

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2540] leading-[1.1] tracking-tight">
              Closing the Gap Between African Innovation and Everyday Life
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Africa’s digital economy is growing fast, but many everyday experiences still need products designed around local realities. We build technology for African users, infrastructure, and market needs - starting with Drift247, our flagship mobility platform built to improve how people move every day.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6"
        >
          <p className="text-[#0A2540] font-medium text-lg">
            Our first product,{' '}
            <span className="font-bold text-accent">Drift247</span>, is tackling
            Nigeria&apos;s most pressing daily challenges.
          </p>
          <a href="https://drift247.africa">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="whitespace-nowrap px-8 py-3 bg-[#0A2540] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              Learn About Drift247
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
