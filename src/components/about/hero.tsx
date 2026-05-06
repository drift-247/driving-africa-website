export function AboutHero() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
        <span className="hero-badge">ABOUT US</span>
        <h1 className="text-5xl md:text-6xl font-black text-primary mb-8 leading-tight">
          Pioneering Digital Excellence Across Africa.
        </h1>
        <p className="text-lg text-text-muted mb-6 leading-relaxed">
          Founded in 2020, Driving Africa Digital Company (DADC) emerged from a simple vision: to harness the power of technology to solve some of the continent's most pressing challenges and unlock its vast digital potential.
        </p>
        <p className="text-lg text-text-muted leading-relaxed">
          From Lagos to Nairobi, our team of experts is pioneering high-impact digital solutions that drive progress, foster innovation, and connect the vibrant talent of Africa to the global stage.
        </p>
      </div>
      <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
        <div className="absolute -inset-4 bg-slate-100 rounded-[40px] -z-10 translate-x-4 translate-y-4"></div>
        <img 
          src="/about-hero.png" 
          alt="DADC Office" 
          className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white"
        />
      </div>
    </section>
  )
}
