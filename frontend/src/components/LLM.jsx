import services from '../assets/services.png';
import { useEffect, useState } from 'react';

const LLM = () => {
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
        <section 
            className="min-h-screen pt-24 pb-16 px-6 dark:bg-black relative overflow-hidden flex flex-col text-center bg-white"
            style={{
                backgroundImage: isDarkMode ? 'linear-gradient(to bottom, #4E349A, #000000)' : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }} 
        >
            <h1 className="text-4xl md:text-6xl text-black dark:text-white mb-6">
                Harnessing LLM-powered data <br /> analytics for smarter decisions <br /> in the modern world.
            </h1>
            <div className="flex justify-center mt-6">
                <button className="bg-black text-white dark:text-black dark:bg-white text-lg py-3 px-10 rounded-full cursor-pointer hover:opacity-80 transition duration-300">
                    Download the app
                </button>
                <button className="text-black dark:text-[#ECECEC] bg-transparent border border-black dark:border-[#ECECEC] text-lg py-3 px-10 rounded-full cursor-pointer hover:opacity-80 transition duration-300 ml-4">
                    Talk to an expert
                </button>
            </div>
            <img
                src={services}
                alt="App preview"
                className="mx-auto mt-20 w-[1200px] max-w-full h-auto rounded-2xl drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            />
        </section>

    );
}

export default LLM;