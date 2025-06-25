const Work = () => {
    return (
      <section className="py-16 px-6 bg-black" id="work">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Animation space */}
            <div className="lg:w-1/2">
              <div className="relative w-80 h-80 mx-auto">
                {/* Space for your globe/planet animation */}
                <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  {/* Space for your animation */}
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How We Work
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We believe in creating and building thoughtful and creative solutions that make a real difference. Our integrated process flows together with your team bringing a new collaborative dynamic to business technology today.
              </p>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Work;