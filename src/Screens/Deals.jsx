import React, { useContext } from "react";
import { MyProductContext } from "./ContextData/ContextFiles";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Deals = () => {
   const { products, addToCart } = useContext(MyProductContext);

   const deals = products.filter((p) => p.discount && p.discount > 0);

   return (
      <div className="container mx-auto px-4 py-10">
         <h1 className="text-3xl font-bold mb-8 text-white">
             Hot Deals & Offers
         </h1>

         {deals.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
               No special deals right now.
            </p>
         ) : (
            <div className="grid grid-cols-12 gap-6">
               {deals.map((product) => {
                  const originalPrice = (
                     product.price * (1 + product.discount / 100)
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
                                       className={`w-4 h-4 ${i < Math.round(product.rating)
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
                                 className={`mt-1 text-sm font-medium ${product.stock > 0
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
                      ${product.stock === 0
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
