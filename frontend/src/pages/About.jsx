import AboutCTA from "../components/AboutCTA";
import Benefits from "../components/Benefits";
import Work from "../components/Work";
import ConnectAbout from "../components/ConnectAbout";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white">
      <AboutCTA />
      <Benefits />
      <Work />
      <ConnectAbout />
    </div>
  );
};

export default About;