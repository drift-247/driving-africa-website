export function ProductNewsletter() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
       <div className="bg-[#8a6d2b] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl font-black mb-8">Be the first to know about <br /> our new releases.</h2>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4 relative z-10">
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
             />
             <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors">Join</button>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
       </div>
    </section>
  )
}
