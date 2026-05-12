export function AboutCta() {
  return (
    <section className="py-20 md:py-24 px-6 sm:px-8 text-center bg-primary text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 leading-tight">
          Ready to Build Your Digital Legacy?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-accent text-primary px-8 md:px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors w-full sm:w-auto">
            View Job Opportunities
          </button>
          <button className="border border-white/30 text-white px-8 md:px-10 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors w-full sm:w-auto">
            Join the Team
          </button>
        </div>
      </div>
    </section>
  )
}
