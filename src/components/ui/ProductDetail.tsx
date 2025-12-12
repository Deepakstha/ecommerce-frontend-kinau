import ProductReviewPage from "./Review";
import { TiShoppingCart } from "react-icons/ti";

export default function ProductDetailPage() {
  const product = {
    name: "Gym Fit T-Shirt",
    brand: "MuscleFlex",
    price: 2499,
    description:
      "Stay cool and dry during your workouts with this breathable, quick-dry gym t-shirt. Designed for performance and style.",
    image: "https://via.placeholder.com/400x400",
    colors: ["Black", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-4">by {product.brand}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            Rs. {product.price}
          </p>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Colors */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
       <button className="bg-blue-900 hover:bg-blue-700 rounded-sm text-white px-6 py-2 shadow transition duration-200 flex items-center gap-2">
  <TiShoppingCart size={28} />
  <span>Add to Cart</span>
</button>
        </div>
      </div>
      <ProductReviewPage />
    </div>
  );
}
