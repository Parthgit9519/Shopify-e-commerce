import { MyProductContext } from "./ContextData/ContextFiles";
import { FiBell } from "react-icons/fi";

const ComingSoon = () => {
  // Dummy data for upcoming products
  const dummyProducts = [
    {
      id: 1,
      name: "FutureTech Smartwatch 5",
      description:
        "The next generation of wearable tech with advanced health monitoring.",
      imageUrl: "https://imgs.search.brave.com/oNH_GHQkHpX5oTmdgcS_DeZ_dsT4MjRQkWt40iG8ok4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy5h/bWF6Zml0LmNvbS9j/ZG4vc2hvcC9maWxl/cy8yMDI1MDEyNC0x/MTUwMzguanBnP3Y9/MTczNzc0ODMzNiZ3/aWR0aD0zMDA",
    },
    {
      id: 2,
      name: "AeroGlide Wireless Earbuds",
      description:
        "Crystal-clear audio with our new noise-cancelling earbuds. 30-hour battery.",
      imageUrl: "https://imgs.search.brave.com/qIDLW77s1FGgOhPuqVOU_CEzr_iHKnVWR3vxmYGUfe0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93aXJl/bGVzcy1lYXJidWRz/LWNoYXJnaW5nLWNh/c2Utd2lyZWxlc3Mt/ZWFyYnVkcy1jaGFy/Z2luZy1jYXNlLTM4/NTYyNjMzOC5qcGc",
    },
    {
      id: 3,
      name: "NovaBook Pro 16",
      description:
        "Our most powerful laptop yet, featuring a stunning liquid-retina display.",
      imageUrl: "https://imgs.search.brave.com/RrVOB_9DhrduL9H16gaeKFpo6p8mEoqkFslFZnXMXcY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pdGVj/aHN0b3JlLmNvLmlu/L3VwbG9hZHMvcHJv/ZHVjdHMvMTNfaW5j/aF9NYWNCb29rX000/LmpwZw",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-500">Coming Soon</h1>
      <p className="text-gray-500 mb-10">
        Be the first to get your hands on our upcoming launches. Pre-order or set
        a reminder now!
      </p>

      {/* Grid for product cards */}
      {dummyProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-56 object-cover" // Fixed height for images
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 h-20">{product.description}</p>
                <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
                  <FiBell className="mr-2" />
                  Set Reminder
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No upcoming products at the moment.</p>
      )}
    </div>
  );
};

export default ComingSoon;