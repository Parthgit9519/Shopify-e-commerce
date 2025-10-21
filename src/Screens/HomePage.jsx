import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { MyProductContext } from './ContextData/ContextFiles';

const HomePage = () => {
  const { cart, products, addToCart, incrementQty, decrementQty, search } = useContext(MyProductContext);
  const navigate = useNavigate();

  const filteredProducts = products.filter(item =>
    !search.trim() || item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app min-h-screen px-4 py-10">
      <div className="grid grid-cols-12 gap-6">

        <div className="col-span-12 text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            Home Page Products
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Discover our latest collection of products, curated just for you.
            Find the best deals and top-rated items all in one place.
          </p>
        </div>

        {filteredProducts.map((product, index) => {
          const cartItem = cart.find(item => item.id === product.id);

          return (
            <div key={product.id || index} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <div className="card p-6 h-full flex flex-col justify-between bg-white dark:bg-gray-800 rounded-xl shadow-md">

                <div
                  onClick={() => navigate(`/productDescription/${product.id}`)}
                  className="img-wrapper h-48 mb-4 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full rounded-xl object-contain mx-auto"
                  />

                </div>

                <h2 className="card-title text-lg mb-2 font-semibold text-gray-900 dark:text-white">
                  {product?.title?.slice(0, 36)}
                </h2>

                <p className="card-muted text-sm mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
                  {product.description?.slice(0, 90)}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="price font-bold text-lg text-blue-600 dark:text-blue-400">
                      ${product.price}
                    </div>
                    <div className="card-muted text-sm uppercase text-gray-500 dark:text-gray-400">
                      {product.category}
                    </div>
                  </div>

                  {cartItem ? (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decrementQty(product.id)}
                        className="qty-btn bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="text-gray-500 dark:text-gray-200">{cartItem.quantity}</span>
                      <button
                        onClick={() => incrementQty(product.id)}
                        className="qty-btn bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default HomePage;
