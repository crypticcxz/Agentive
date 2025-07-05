import icon1 from '../assets/analyticsDashboard.png';
import icon2 from '../assets/digitalCredit.png';
import icon3 from '../assets/codeCollab.png';
import image from '../assets/codeCollaboration.png';

const Features = () => {
    return (
        <section className="py-16 px-6 bg-white dark:bg-black">
            <h2 className="text-4xl md:text-5xl text-black dark:text-white mb-6 text-center">
                Features that work for <br /> your future.
            </h2>
            <p className="text-gray-300 mb-6 text-center">
            Check out our amazing features and experience the <br /> power of Vaultflow for yourself.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                {/* Analytics Dashboard */}
                <div className="relative bg-white dark:bg-[#191919] rounded-2xl p-8 shadow-xl border border-[#222] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    <img src={icon1} alt="Analytics Icon" className="w-12 h-12 drop-shadow-[0_0_16px_rgba(162,89,255,0.7)] mb-4" />
                    <h3 className="text-3xl text-black dark:text-white">Analytics Dashboard</h3>
                    <p className="text-black dark:text-gray-300 mt-2 mb-6">Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
                    <a href="#" className="text-black dark:text-white underline">View dashboard</a>
                </div>
                {/* Digital Credit Tokens */}
                <div className="relative bg-white dark:bg-[#191919] rounded-2xl p-8 shadow-xl border border-[#222] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    <img src={icon2} alt="Tokens Icon" className="w-12 h-12 drop-shadow-[0_0_16px_rgba(255,0,255,0.7)] mb-4" />
                    <h3 className="text-3xl text-black dark:text-white">Digital Credit Tokens</h3>
                    <p className="text-black dark:text-gray-300 mt-2 mb-6">Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.</p>
                    <a href="#" className="text-black dark:text-white underline">View tokens</a>
                </div>
                {/* Code Collaboration */}
                <div className="relative bg-white dark:bg-[#191919] rounded-2xl p-8 shadow-xl border border-[#222] col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-between drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mt-4">
                    <div className="flex-1 min-w-0">
                        <img src={icon3} alt="Collab Icon" className="w-12 h-12 drop-shadow-[0_0_16px_rgba(255,0,255,0.7)] mb-4" />
                        <h3 className="text-3xl text-black dark:text-white">Code Collaboration</h3>
                        <p className="text-black dark:text-gray-300 mt-2 mb-6">Our advanced code synchronization technology ensures that <br /> your data is always up-to-date and accurate, no matter where <br /> it's coming from. Whether you're integrating data from multiple <br /> sources or working with a team of developers, our <br /> synchronization technology makes it easy to collaborate and <br />ensure that your data is consistent and reliable.</p>
                        <a href="#" className="text-black dark:text-white underline">View code collaboration</a>
                    </div>
                    <img src={image} alt="Code Example" className="w-110 h-auto rounded-xl ml-8 mt-8 md:mt-0 drop-shadow-[0_0_24px_rgba(162,89,255,0.4)]" />
                    
                </div>
            </div>
        </section>
    );
};

export default Features;