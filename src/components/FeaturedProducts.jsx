import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // adjust path if needed


const products = [
  {
    id: 1,
    name: 'Vitamin C 1000mg Tablets',
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    image: 'https://cdn11.bigcommerce.com/s-mhzobovg3g/images/stencil/1280x1280/products/4044/34687/NTA1791-1__73445.1706521777.jpg?c=2',
    isNew: true,
  },
  {
    id: 2,
    name: 'Organic Turmeric Capsules',
    price: 18.50,
    originalPrice: 22.00,
    rating: 4.2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8KjxHqEzhqjwXOCPE5J8oSsmsI-eGWvcLMw&s',
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQURPHVO572gd90nCrF81i2w_XMEuQP6UbQ&s',
    isBestSeller: true,
  },
  {
    id: 4,
    name: 'Probiotic Digestive Health',
    price: 24.95,
    originalPrice: 29.95,
    rating: 4.3,
    image: 'https://palmarya.ma/images/demo/shop/Natures%20bounty/NATURES%20BOUNTY%20ACIDOPHILUS%20PROBIOTIC%20100%20MILLION%20ORGANISMS%20DIGESTIVE%20HEALTH%20TABLETS.jpg',
  },
];

const FeaturedProducts = () => {

  const { addToCart } = useCart();


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <button className="text-blue-600 font-semibold hover:underline">
            View All Products →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain p-4"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    Bestseller
                  </span>
                )}
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-blue-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                  )}
                </div>
                <button onClick={() => addToCart(product)} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;