const Services = () => {
    const services = [
      {
        title: "PLANNING &\nSTRATEGY",
        description: "We begin every project by understanding your business goals and target audience. Our strategic approach ensures your digital presence aligns with your objectives.",
        iconSpace: true
      },
      {
        title: "MOBILE DEVELOPMENT &\nDESIGN",
        description: "Creating mobile experiences that engage users and drive results. From concept to deployment, we handle every aspect of mobile development.",
        iconSpace: true
      },
      {
        title: "WEBSITE BUILDING &\nDEVELOPMENT",
        description: "Building responsive, fast, and user-friendly websites that represent your brand perfectly and convert visitors into customers.",
        iconSpace: true
      },
      {
        title: "CREATIVE & UNIQUE\nSOLUTIONS",
        description: "Innovative solutions tailored to your specific needs. We think outside the box to deliver unique digital experiences.",
        iconSpace: true
      },
      {
        title: "DIGITAL MARKETING &\nADVERTISING",
        description: "Comprehensive digital marketing strategies that boost your online presence and drive measurable results for your business.",
        iconSpace: true
      }
    ];
  
    return (
      <section className="py-16 px-6 bg-black" id="services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                {/* Space for your service icon/animation */}
                <div className="w-16 h-16 mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  {/* Your icon goes here */}
                </div>
                
                <h3 className="text-white font-bold text-sm mb-4 leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;