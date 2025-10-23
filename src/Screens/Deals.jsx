import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// --- DUMMY DATA (for testing) ---
const dummyProductData = [
  {
    id: 101,
    title: "Premium Wireless Headphones",
    brand: "AudioPhile",
    category: "Electronics",
    price: 149.99, // FINAL price
    discount: 25, // 25% OFF
    rating: 4.8,
    stock: 50,
    image: "https://imgs.search.brave.com/KZBCM8xvq9TqH0Af52H9cbdMdd3Twpwf6epF16GFAEs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzMw/MzQzMzMvcGV4ZWxz/LXBob3RvLTMzMDM0/MzMzL2ZyZWUtcGhv/dG8tb2YtYmxhY2st/b3Zlci1lYXItd2ly/ZWxlc3MtYmx1ZXRv/b3RoLWhlYWRwaG9u/ZXMuanBlZz9hdXRv/PWNvbXByZXNzJmNz/PXRpbnlzcmdiJmRw/cj0xJnc9NTAw",
  },
  {
    id: 102,
    title: "4K Action Camera",
    brand: "GoPro",
    category: "Cameras",
    price: 299.5,
    discount: 10,
    rating: 4.5,
    stock: 0,
    image: "https://imgs.search.brave.com/mM3KDThPXjfVbZteFiuqz5VqVgx6b44ruf4_g9nk_MA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMxMi8zMTIveGlm/MHEvc3BvcnRzLWFj/dGlvbi1jYW1lcmEv/Zi9zL2wvYWN0aW9u/LWNhbWVyYS00azIw/bXAtd2lmaS0zMG0t/d2F0ZXJwcm9vZi1h/Y3Rpb24tY2FtZXJh/LXNwb3J0cy1kdi1v/cmlnaW5hbC1pbWFo/ZGZtbmh0ZnVoNGg0/LmpwZWc_cT03MA",
  },
  {
    id: 103,
    title: "Smart Coffee Mug",
    brand: "Ember",
    category: "Home",
    price: 99.0,
    discount: 0,
    rating: 4.2,
    stock: 120,
    image: "https://via.placeholder.com/400x300.png?text=Coffee+Mug",
  },
];

// -------------------------------------

const Deals = () => {
  // const { products, addToCart } = useContext(MyProductContext);
  const products = dummyProductData;

  const addToCart = (product) => {
    console.log("Added to cart (dummy):", product.title);
  };

  const deals = products.filter((p) => p.discount && p.discount > 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-white">🔥 Hot Deals & Offers</h1>

      {deals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No special deals right now.
        </p>
      ) : (
        <div className="grid grid-cols-12 gap-6">
          {deals.map((product) => {
            const originalPrice = (
              product.price *
              (1 + product.discount / 100)
            ).toFixed(2);

            return (
              <div
                key={product.id}
                className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 
                bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg 
                hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
              >
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-wide text-white 
                bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md z-10">
                  {product.discount}% OFF
                </span>

                <div className="relative bg-gray-50 dark:bg-gray-900">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col h-full">
                  {product.brand && (
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                      {product.brand}
                    </p>
                  )}

                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {product.title}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    {product.category}
                  </p>

                  {product.rating && (
                    <div className="flex items-center mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        {product.rating} / 5
                      </span>
                    </div>
                  )}

                  {product.stock !== undefined && (
                    <p
                      className={`mt-1 text-sm font-medium ${
                        product.stock > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
                      }`}
                    >
                      {product.stock > 0
                        ? `${product.stock} in stock`
                        : "Out of stock"}
                    </p>
                  )}

                  <div className="mt-3">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 line-through ml-2">
                      ${originalPrice}
                    </span>
                  </div>

                  <div className="flex-grow" />

                  <button
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`mt-4 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium shadow-md active:scale-95 transition-all duration-200
                      ${
                        product.stock === 0
                          ? "bg-gray-400 cursor-not-allowed text-white"
                          : "bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-700 hover:to-purple-600"
                      }`}
                  >
                    <FiShoppingCart size={18} />
                    {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Deals;
