import { removeWishlistFromStore } from "@/redux/features/wishlist.slice";
import { dispatch, useSelector } from "@/redux/store";

const Wishlist = () => {
  const { wishlists } = useSelector((state) => state.wishlist);

  const handleRemoveItem = (id: string | number) => {
    dispatch(removeWishlistFromStore(id));
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 border-b pb-4 border-black uppercase">
          Wishlists
        </h1>

        {wishlists.length === 0 ? (
          <div className="text-center text-gray-600 mt-20">
            <p className="text-xl mb-4">Your wishlist is empty.</p>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {wishlists.map((item) => (
              <div
                key={item.id}
                className="border border-black rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-60 object-cover rounded-t-xl grayscale group-hover:grayscale-0 transition"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">
                    {item.product.name}
                  </h2>
                  <p className="text-gray-700 mb-3">{item.product.price}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="px-4 py-2 text-sm border border-black hover:bg-black hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
