import Header from "./components/Header";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Services from "./components/Services";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Offers />
      <Services />
      <Work />
      <Portfolio />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Index;