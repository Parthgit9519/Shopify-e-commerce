import { MyProductContext } from "./ContextData/ContextFiles";
import { FiBell } from "react-icons/fi";

const ComingSoon = () => {

   return (
      <div className="container mx-auto px-4 py-10">
         <h1 className="text-3xl font-bold mb-8 text-gray-500">
             Coming Soon
         </h1>
         <p className="text-gray-500 mb-10">
            Be the first to get your hands on our upcoming launches. Pre-order or set a reminder now!
         </p>

         <p className="text-gray-500">No upcoming products at the moment.</p>
         
      </div>
   );
};

export default ComingSoon;
