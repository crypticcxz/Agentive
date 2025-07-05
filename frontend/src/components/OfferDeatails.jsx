import dot from '../assets/dot.png'
import offers1 from '../assets/offers1.png'
import offers2 from '../assets/offers2.png'
import offers3 from '../assets/offers3.png'
import offers4 from '../assets/offers4.png'
import offers5 from '../assets/offers5.png'

const offers = [
    {
        title: "AI & Machine Learning",
        desc: "Custom models, predictive systems, and LLM integrations that give your business a competitive edge.",
        img: offers1
    },
    {
        title: "Web3 & Blockchain Development",
        desc: "Smart contracts, NFT platforms, crypto token development, and decentralized apps (dApps) built to scale.",
        img: offers2
    },
    {
        title: "Mobile & Web App Development",
        desc: "MVPs, cross-platform apps, and enterprise-level platforms built with clean, modular code.",
        img: offers3
    },
    {
        title: "Chatbots & Digital Agents",
        desc: "Conversational AI that automates support, engagement, and more — trained on your data.",
        img: offers4
    },
    {
        title: "Digital Marketing & Growth",
        desc: "SEO, performance marketing, and growth strategies tailored to your business goals.",
        img: offers5
    }
];

const OfferDetails = () => {
    return (
        <section className="py-16 px-6 bg-white dark:bg-black">
            <div className="container mx-auto flex flex-col items-center">
                <div className="inline-block border border-purple-950 rounded-full px-6 py-2 mb-8 bg-gray-300 dark:bg-black backdrop-blur">
                    <span className="flex items-center gap-2 text-black dark:text-white text-sm font-medium">
                        <img src={dot} className='w-5 h-5' />
                        What We Offer
                    </span>
                </div>
                <div className="w-full flex flex-col gap-6">
                    {offers.map((offer, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center bg-[#18181b] dark:bg-[#18181b] rounded-xl p-20 min-h-[180px] shadow-md"
                        >
                            <div>
                                <h3 className="text-white text-4xl md:text-5xl mb-4 max-w-xl">{offer.title}</h3>
                                <p className="text-gray-300 text-lg md:text-2xl max-w-xl">{offer.desc}</p>
                            </div>
                            <img src={offer.img} alt={offer.title} className="w-38 h-38 md:w-80 md:h-80 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default OfferDetails;