import button from '../assets/learnButton.png';
import CTA from '../assets/CTA.png';

const BuildTogether = () => {
    return (
        <section className="py-16 px-6 bg-white dark:bg-black">
        <div className="-mx-6">
        <div className="w-full min-h-[500px] flex flex-col md:flex-row items-center md:items-stretch justify-between bg-[#3D2A76] px-0 py-0 text-left gap-8">
          
          {/* Left Side: Text */}
          <div className="flex-1 flex flex-col justify-center px-12">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
              Let's Build Together
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Got an idea or project in mind? Book a free discovery call and let’s talk about how we can bring it to life with the latest in AI, Web3, and modern development.
            </p>
            <div className="mt-8">
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

          {/* Right Side: Image */}
          <div className="flex-1 flex justify-end items-end">
            <img
              src={CTA}
              alt="Call to Action"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
      </section>
    );
};

export default BuildTogether;
