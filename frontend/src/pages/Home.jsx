import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Work from "../components/Work";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import BuildTogether from "../components/BuildTogether";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Offers />
      <Work />
      <Blogs />
      <BuildTogether />
    </div>
  );
};

export default Index;