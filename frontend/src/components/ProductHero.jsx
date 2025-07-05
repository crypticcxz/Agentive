import clipDark from "../assets/productDark.mp4";
import clipLight from "../assets/productLight.mp4";
import button from "../assets/button.png";
import { useState, useEffect } from 'react';

const ProductHero = () => {
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
      <section className="min-h-screen pt-24 pb-16 px-6 dark:bg-black relative overflow-hidden flex flex-col justify-center">
        <video
          key={isDarkMode ? "dark" : "light"}
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isDarkMode ? clipDark : clipLight} type="video/mp4" />
        </video>
        <h1 className="text-4xl md:text-6xl text-black dark:text-white mb-6 relative z-10 text-center">
            The smart engine<br /> behind your data <br /> decisions.
        </h1>
        <div className="mt-8 relative z-10">
              <img
                src={button}
                alt="Connect Button"
                className="mx-auto w-50 cursor-pointer hover:opacity-80 transition duration-300"
                onClick={() => console.log('Connect button clicked')}
              />
            </div>
      </section>
    );
  };
  
  export default ProductHero;