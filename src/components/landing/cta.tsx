export function Cta() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto bg-[#8a6d2b] rounded-[40px] px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="max-w-xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to drive the <br /> future?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Partner with us to build digital solutions that transform lives across the African continent.
          </p>
        </div>

        <button className="relative z-10 bg-primary text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-black transition-colors shadow-2xl">
          Start Your Project
        </button>
      </div>
    </section>
  )
}
