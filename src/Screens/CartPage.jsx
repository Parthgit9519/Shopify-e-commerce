import React, { useContext } from 'react'
import { MyProductContext } from './ContextData/ContextFiles';

const CartPage = () => {

   const { cart, incrementQty, decrementQty, removeItem, clearCart } = useContext(MyProductContext);

   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

   const handleCheckout = () => {
      alert("Proceed to checkout");
      clearCart();       // clear the cart
      navigate("/");     // redirect to home page
   };

   if (cart.length === 0) {
      <div className="p-6 text-center text-gray-100 text-lg">
         Your cart is empty 🛒
      </div>
   }
   return (
      <div className="max-w-7xl mx-auto p-6">
         <h1 className="text-3xl font-extrabold mb-8 text-gray-500">Your Cart</h1>

         {cart.length === 0 ? (
            <p className="text-center text-gray-500 text-lg mt-20">
               Your cart is empty.
            </p>
         ) : (
            <>
               <div className="space-y-6">
                  {cart.map((item) => (
                     <div
                        key={item.id}
                        className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                     >
                        <div className="flex items-center gap-5 flex-1 sm:flex-none">
                           <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 object-contain rounded-md"
                           />
                           <div>
                              <h2 className="font-semibold text-lg text-gray-900">
                                 {item.title.length > 30
                                    ? item.title.slice(0, 27) + "..."
                                    : item.title}
                              </h2>
                              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                 ₹{item.price.toFixed(2)}
                              </p>
                           </div>
                        </div>

                        <div className="flex items-center gap-3 mt-4 sm:mt-0">
                           <button
                              onClick={() => decrementQty(item.id)}
                              className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 font-bold text-xl select-none"
                              aria-label={`Decrease quantity of ${item.title}`}
                           >
                              –
                           </button>
                           <span className="min-w-[30px] text-center font-medium text-gray-900">
                              {item.quantity}
                           </span>
                           <button
                              onClick={() => incrementQty(item.id)}
                              className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 hover:bg-gray-300 transition text-gray-700 font-bold text-xl select-none"
                              aria-label={`Increase quantity of ${item.title}`}
                           >
                              +
                           </button>
                        </div>

                        <div className="font-semibold text-lg text-gray-900 mt-4 sm:mt-0 sm:ml-6 min-w-[80px] text-right">
                           ₹{(item.price * item.quantity).toFixed(2)}
                        </div>

                        <button
                           onClick={() => removeItem(item.id)}
                           className="text-red-600 hover:text-red-700 font-bold text-2xl ml-6 mt-4 sm:mt-0"
                           aria-label={`Remove ${item.title} from cart`}
                        >
                           ✕
                        </button>
                     </div>
                  ))}
               </div>

               <div className="mt-10 flex justify-end">
                  <div className="bg-white shadow-md rounded-lg px-6 py-4 w-full max-w-sm text-right sticky bottom-0 sm:static">
                     <p className="text-xl font-extrabold text-gray-900">
                        Total: ₹{totalPrice.toFixed(2)}
                     </p>
                     <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition rounded-md py-3 text-white font-semibold"
            onClick={handleCheckout}
         >
            Proceed to Checkout
         </button>
                  </div>
               </div>
            </>
         )}
      </div>
   )
}

export default CartPage
