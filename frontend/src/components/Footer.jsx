const Footer = () => {
    return (
      <footer className="py-8 px-6 bg-black border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white font-bold text-xl mb-4 md:mb-0">
              agentive
            </div>
            
            <nav className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
            </nav>
            
            <div className="flex space-x-4">
              {/* Social media icons - space for your icons */}
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 Agentive. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;