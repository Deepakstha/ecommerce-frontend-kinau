import { Heart } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="relative border-2  hover:border-black transition cursor-pointer">
      <button className="absolute top-5 right-5">
        <Heart />
      </button>

      {/* TODO: heart icon */}
      <img
        src="/assets/product.jpg"
        className="object-cover w-full aspect-[]"
      />
      <div className="m-2">
        {/* TODO:description */}
        <div className="space-y-2">
          <p className="text-red-600 font-bold">₹ 5 9333</p>
          <p className="text-gray-400">₹8 999.00 Original price -40%</p>
          <p className="line-clamp-2">
            adidas by Stella McCartney TruePace Running Shorts
          </p>
          <span>adidas by Stella McCartney</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
