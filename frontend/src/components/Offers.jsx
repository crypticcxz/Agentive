import offers1 from '../assets/offers1.png'
import offers2 from '../assets/offers2.png'
import offers3 from '../assets/offers3.png'
import offers4 from '../assets/offers4.png'
import offers5 from '../assets/offers5.png'
import bgGrid from '../assets/bg-grid.png'
import dot from '../assets/dot.png';



const Offers = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Custom models, predictive systems, and LLM integrations that give your business a competitive edge.",
      image: offers1
    },
    {
      title: "Web3 & Blockchain Design",
      description: "Smart contracts, NFT platforms, crypto token development, and decentralized apps (dApps) built to scale.",
      image: offers2
    },
    {
      title: "Mobile & Web App Development",
      description: "Building responsive, fast, and user-friendly websites that represent your brand perfectly and convert visitors into customers.",
      image: offers3
    },
    {
      title: "Chatbots & Digital Agents",
      description: "Conversational AI that automates support, engagement, and more — trained on your data.",
      image: offers4
    },
    {
      title: "Digital Marketing & Growth",
      description: "SEO, performance marketing, and growth strategies tailored to your business goals.",
      image: offers5
    }
  ];

  return (
    <section className="py-16 px-6 bg-white dark:bg-black">
      <div className="container mx-auto text-center">
        <div className="inline-block border border-purple-950 rounded-full px-6 py-2 mb-8 bg-gray-300 dark:bg-black backdrop-blur">
          <span className="flex items-center gap-2 text-black dark:text-white text-sm font-medium">
            <img src={dot} className='w-5 h-5' />
            What We Offer</span>
        </div>

        <h1 className="text-black dark:text-white text-4xl mb-12">How Can Agentive Put Your Brand In The Spotlight?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-black border border-gray-800 rounded-3xl p-8 text-center shadow-lg bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${bgGrid})`}}>

              <div className="relative w-32 h-32 mb-6 mx-auto">
                
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#2A2A2A] to-transparent opacity-70"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-full h-full object-contain z-10"
                />
              </div>
              <h3 className="text-white font-bold text-xl md:text-2xl mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
