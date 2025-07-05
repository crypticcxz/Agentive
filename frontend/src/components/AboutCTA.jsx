import button from "../assets/button.png";
import about from "../assets/about.png";

const AboutCTA = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#4E349A] to-[#A979D9] bg-clip-text text-transparent leading-tight">
              Building the Future,<br />
              One Smart Solution<br />
              at a Time
            </h1>

            <p className="text-black dark:text-white text-xl leading-relaxed max-w-xl">
              From AI to Web3, Agentive turns bold ideas into breakthrough digital realities.
            </p>

            <div>
              <img
                src={button}
                alt="Connect Button"
                className="w-64 cursor-pointer hover:opacity-80 transition duration-300"
                onClick={() => console.log('Connect button clicked')}
              />
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-xlg">
              <img
                src={about}
                alt="About"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
