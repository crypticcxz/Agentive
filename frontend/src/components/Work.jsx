import clip from '../assets/work.mp4';
import button from '../assets/button.png';

const Work = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-black text-white">
      <div className="max-w-5xl mx-auto bg-[#E5E5E5] dark:bg-[#191919] rounded-2xl p-8 flex flex-col md:flex-row items-center">
        {/* Left: Video */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="border border-purple-800 rounded-2xl">
            <video className="w-64 h-64 object-cover rounded-2xl" autoPlay loop muted playsInline>
              <source src={clip} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 md:pl-8 text-left">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#4E349A] to-[#A979D9] text-transparent bg-clip-text">
            How We Work
          </h2>
          <p className="text-black dark:text-gray-300 italic mb-2">
            <strong>We believe in moving fast and building right.
            Whether you're a startup or an enterprise, we work closely with you from concept to product launch, ensuring everything we build is designed to scale and ready for users.
            </strong></p>
            <div className="mt-8">
            <img
              src={button}
              alt="Connect Button"
              className="w-40 cursor-pointer hover:opacity-80 transition duration-300"
              onClick={() => console.log('Connect button clicked')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
