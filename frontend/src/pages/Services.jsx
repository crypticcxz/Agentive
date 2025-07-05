import LLM from "../components/LLM";
import Features from "../components/Features";
import BuildTogether from "../components/BuildTogether";

const Services = () => {
    return (
      <div id="services" className="min-h-screen bg-black text-white">
        <LLM />
        <Features />
        <BuildTogether />
      </div>
    );
  };
  
  export default Services;