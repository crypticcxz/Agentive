import button from '../assets/learnButton.png';
import AboutBackground from '../assets/AboutBackground.png';
import dot from '../assets/dot.png';
import { useEffect, useState } from 'react';

const ConnectAbout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        
        checkDarkMode();

        
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 px-6 bg-white dark:bg-black">

            <div className="container mx-auto text-center mb-8">
                <div className="inline-block bg-gray-400 dark:bg-black border border-purple-950 rounded-full px-6 py-2">
                    <span className="flex items-center gap-2 text-black dark:text-white text-sm font-medium">
                        <img src={dot} className="w-5 h-5" />
                        Contact us
                    </span>
                </div>
            </div>

            <div className="-mx-6">
                <div
                    className="w-full min-h-[500px] flex flex-col md:flex-row items-center md:items-stretch justify-between gap-8 px-6 bg-white"
                    style={{
                        backgroundImage: isDarkMode ? `url(${AboutBackground})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <div className="flex-1 flex flex-col text-center justify-center">
                        <h2 className="text-4xl md:text-4xl font-bold text-black dark:text-white mb-6">
                            Let's Build Together
                        </h2>
                        <p className="text-black dark:text-gray-300 text-center justify-center text-lg text-bold mb-8">
                            Got an idea or project in mind?<br /> Book a free discovery call and let's talk about how we can bring it to life <br /> with the latest in AI, Web3, and modern development.
                        </p>
                        <div className="mt-8 flex justify-center">
                            {/* <button className="bg-gradient-to-r from-[#4E349A] via-[#8591FF] to-[#4E349A] text-white font-medium py-2 px-6 rounded-lg w-40 cursor-pointer hover:opacity-80 transition duration-300">
                Connect
              </button> */}
                            <img
                                src={button}
                                alt="Connect Button"
                                className="w-50 cursor-pointer hover:opacity-80 transition duration-300"
                                onClick={() => console.log('Connect button clicked')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectAbout;