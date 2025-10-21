import React, { useContext, useEffect, useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { MyProductContext } from "./ContextData/ContextFiles";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ProductDescription = () => {
   const { id } = useParams();
   const { products, addToCart } = useContext(MyProductContext);

   const [product, setProduct] = useState(null);
   const [liked, setLiked] = useState(false);
   const [added, setAdded] = useState(false);



   const [selectedBrand, setSelectedBrand] = useState("");

   const brandOptions = ["Samsung", "Sony", "Apple", "Boat", "JBL", "LG", "Mi"];


   useEffect(() => {
      if (products.length > 0) {
         const foundProduct = products.find((p) => p.id === parseInt(id));
         if (foundProduct) {
            setProduct(foundProduct);
         }
      }
   }, [id, products]);

   if (!product) {
      return <p className="text-center mt-10">Loading....</p>;
   }

   const handleAddToCart = () => {
      if (!selectedBrand) {
         alert("Please select all options before adding to cart.");
         return;
      }
      setAdded(true)
      addToCart({
         ...product,
         selectedBrand,
      });
   };

   return (
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row mt-10 transition-colors duration-300">

         <div className="md:w-1/2 flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
            <img
               src={product.image}
               alt={product.title}
               className="max-w-full max-h-[500px] object-contain transition-all duration-300"
            />
         </div>


         <div className="md:w-1/2 p-6 flex flex-col justify-between text-gray-800 dark:text-gray-100">
            <h1 className="text-2xl font-bold">{product.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
               <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                     <FaStar key={i} />
                  ))}
               </div>
               <span className="text-gray-600 dark:text-gray-300">(120 reviews)</span>
               <span className="text-gray-300">|</span>
               <div className="flex items-center gap-1">
                  <span className="text-gray-500 dark:text-gray-400">Category:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium capitalize">
                     {product.category}
                  </span>
               </div>
            </div>


            <div className="mt-4">
               <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
               </p>
               <p className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  ₹{(product.price * 1.2).toFixed(2)}
               </p>
            </div>

            <p className="mt-4 text-gray-600 dark:text-gray-300">{product.description}</p>

            <div className="mt-4">
               <h3 className="text-lg font-semibold">Brand</h3>
               <div className="flex gap-2 mt-2 flex-wrap">
                  {brandOptions.map((brand) => (
                     <button
                        key={brand}
                        onClick={() => setSelectedBrand(brand)}
                        className={`px-3 py-1 border rounded-lg transition-colors duration-200 
              ${selectedBrand === brand
                              ? "bg-blue-500 text-white"
                              : "bg-gray-100 dark:bg-gray-600 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-500"
                           }`}
                     >
                        {brand}
                     </button>
                  ))}
               </div>
            </div>


            <div className="flex items-center gap-4 mt-6">
               <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition
        ${added ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} 
        text-white`}
               >
                  <FiShoppingCart /> {added ? "Added" : "Add to Cart"}
               </button>
               <button
                  onClick={() => setLiked(!liked)}
                  className="flex items-center justify-center bg-gray-100 dark:bg-gray-600 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-all"
               >
                  <FiHeart
                     className={`text-2xl transition-all duration-300 ${liked ? "text-red-500" : "text-gray-500 dark:text-gray-300"
                        }`}
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductDescription;
