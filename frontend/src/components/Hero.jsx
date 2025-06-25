const Hero = () => {
    return (
      <section className="pt-24 pb-16 px-6 bg-black relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          {/* Central glowing orb area - space for your animation */}
          <div className="mb-8 relative h-96 flex items-center justify-center">
            <div className="w-80 h-80 rounded-full border border-blue-500/30 flex items-center justify-center relative">
              {/* Space for your glowing orb animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              
              <div className="text-center z-10">
                <p className="text-gray-400 mb-2">Turning Ideas Into</p>
                <p className="text-white text-lg mb-2">Smart Impactful</p>
                <p className="text-white text-xl font-bold">Digital Products</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;