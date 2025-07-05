import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          agentive
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#product" className="text-gray-300 hover:text-white transition-colors">Product</a>
        </nav>

        {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Get Started
        </Button> */}
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
