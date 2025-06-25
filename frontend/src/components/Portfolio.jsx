const Portfolio = () => {
    return (
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto">
          {/* Portfolio grid - spaces for your project images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-video bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
                {/* Space for your portfolio images */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"></div>
              </div>
            ))}
          </div>
          
          {/* Call to action section */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-12 border border-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Together
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Got an idea or project in mind? Let's chat about how we can bring it to life. From concept to completion, we're here to make your vision a reality.
            </p>
            
            {/* Space for your CTA animation/graphic */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg transition-colors">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;