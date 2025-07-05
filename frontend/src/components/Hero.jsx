import button from '../assets/button.png';
import clip from '../assets/hero.mp4';
const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 dark:bg-black relative overflow-hidden flex flex-col justify-center">
      <video className='absolute top-0 left-0 w-full h-full object-cover z-0' autoPlay loop muted playsInline>
        <source src={clip} type="video/mp4" />
      </video>
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 relative flex items-center justify-center" style={{ height: '20rem' }}>
          <div className="w-80 h-80 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="flex flex-col items-center justify-center text-center z-10 h-full">
              <p className="text-white dark:text-black mb-2 font-semibold">Turning Ideas Into</p>
              <p className="text-white dark:text-black text-lg mb-2 font-bold">Smart Impactful</p>
              <p className="text-white dark:text-black text-xl font-extrabold">Digital Products</p>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8 z-20">
        {/* <img
            src={button}
            alt="Connect Button"
            className="w-60 cursor-pointer hover:opacity-80 transition duration-300"
            onClick={() => console.log('Connect button clicked')}
          /> */}
        <button
          className="
            font-bold
            relative
            px-6 py-2
            rounded-md
            text-normal
            text-white
            after:bg-gradient-to-r from-[#4E349A] via-[#8591FF] to-[#4E349A]
            border-[0.1rem] border-white/40
            shadow-[0_4px_12px_-3px_rgba(147,146,253,0.95)]
            overflow-hidden
            before:content-['']
            before:absolute before:inset-0
            before:rounded-sm
            before:shadow-[0_0_0_1px_rgba(255,255,255,0.4)]
            w-50
            cursor-pointer
            justify-center
            "
            style={{
              backgroundImage: `
                url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='none'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.15'/></svg>"),
                linear-gradient(to right, #4E349A, #8591FF, #4E349A)
              `
            }}
        >
          Connect
        </button>
        
      </div>
    </section>
  );
};

export default Hero;