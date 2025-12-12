
import SimpleSlider from "./sections/banner";

import ProductCard from "@/components/ui/card/product-card";
import ParallaxSection from "@/components/ui/Parallax";

import Trending from "@/components/ui/Trending";

const HomePage = () => {


 
  return (
    <>
    <SimpleSlider/>
      <div className="grid p-6 m-10 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ParallaxSection />
      <div className="grid p-6 m-10 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-5">
       
      </div>

      <div className="grid p-6 m-10 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-5">
        <Trending />
      </div>
    </>
  );
};

export default HomePage;
