import OfferDetails from "../components/OfferDeatails";
import ProductHero from "../components/ProductHero";

const Product = () => {
    return (
      <div id="product" className="min-h-screen bg-black text-white">
        <ProductHero />
        <OfferDetails />
      </div>
    );
  };
  
  export default Product;