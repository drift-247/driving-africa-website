export function ContactHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <img 
        src="/contact-hero.png" 
        alt="Contact Us" 
        className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
      />
      <div className="relative z-10 text-center px-8">
        <span className="hero-badge bg-accent text-primary">GET IN TOUCH</span>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Let's Build the Future Together.</h1>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Whether you're a potential partner, investor, or just curious about what we're building — our door is open.
        </p>
      </div>
    </section>
  )
}
