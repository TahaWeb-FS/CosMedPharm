import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiHeart, FiFilter } from 'react-icons/fi';
import { useCart } from '../../context/CartContext'; // adjust path if needed

const products = [
  {
    id: 1,
    name: 'Vitamin D3 5000IU Softgels',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.7,
    image: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/79/765956/1.jpg?4985',
    category: 'Vitamins',
    isNew: true,
    stock: 42
  },
  {
    id: 2,
    name: 'Organic Turmeric Curcumin 1500mg',
    price: 22.95,
    originalPrice: 29.95,
    rating: 4.5,
    image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/btz/btz75102/y/89.jpg',
    category: 'Supplements',
    isBestSeller: true,
    stock: 18
  },
  {
    id: 3,
    name: 'Omron Blood Pressure Monitor',
    price: 49.99,
    originalPrice: 64.99,
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWT1T5DvY4AHzHjKotpITZ4Zr3Nu_si48KQ&s',
    category: 'Health Devices',
    stock: 7
  },
  {
    id: 4,
    name: 'Probiotic 50 Billion CFU',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.6,
    image: 'https://www.marjanemall.ma/media/catalog/product/cache/36c9d346b6653f95ce7222f403adb694/_/p/_pdt2_2_8_7_1_700x700_AAAAH56287.jpg',
    category: 'Digestive Health',
    stock: 25
  },
  {
    id: 5,
    name: 'Melatonin 10mg Fast Dissolve',
    price: 12.49,
    originalPrice: 16.99,
    rating: 4.3,
    image: 'https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/176166/1.jpg?5003',
    category: 'Sleep Aids',
    isNew: true,
    stock: 31
  },
  {
    id: 6,
    name: 'CBD Oil 1000mg - Natural',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    image: 'https://farmulated.com/cdn/shop/products/FS1000WhiteSquarecopy-476557.jpg?v=1680101141',
    category: 'Wellness',
    isBestSeller: true,
    stock: 12
  }
];

const categories = [
  'All Products',
  'Vitamins',
  'Supplements',
  'Health Devices',
  'Digestive Health',
  'Sleep Aids',
  'Wellness'
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return a.price - b.price;
    if (sortOption === 'price-high') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    // Default: featured (new and best sellers first)
    if (a.isNew || a.isBestSeller) return -1;
    if (b.isNew || b.isBestSeller) return 1;
    return 0;
  });

  const { addToCart } = useCart();

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-3 sm:mb-4">
            Pharmacy Store
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Quality Health Products</h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by healthcare professionals and customers nationwide
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 sm:mb-8 bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto pb-2 md:pb-0">
              <div className="flex space-x-1 sm:space-x-2 font-sans">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#0d9488] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-white text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <FiFilter className="mr-1 sm:mr-2" />
                  Sort
                </button>
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <button 
                        onClick={() => { setSortOption('featured'); setShowFilters(false); }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'featured' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Featured
                      </button>
                      <button 
                        onClick={() => { setSortOption('price-low'); setShowFilters(false); }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'price-low' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Price: Low to High
                      </button>
                      <button 
                        onClick={() => { setSortOption('price-high'); setShowFilters(false); }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'price-high' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Price: High to Low
                      </button>
                      <button 
                        onClick={() => { setSortOption('rating'); setShowFilters(false); }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === 'rating' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        Highest Rated
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sortedProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300">
                {/* Product Image */}
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col space-y-1 sm:space-y-2">
                    {product.isNew && (
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                        NEW
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold text-white bg-orange-500 rounded-full">
                        BESTSELLER
                      </span>
                    )}
                  </div>
                  {/* Quick Actions */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col space-y-1 sm:space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <FiHeart className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <button className="p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                      <FiShoppingCart className="text-gray-600 w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-medium text-[#0d9488]">{product.category}</span>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mt-1 mb-1 sm:mb-2 group-hover:text-[#0d9488] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-gray-900 ml-1">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-2 sm:mt-3 flex items-center">
                    <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through ml-1 sm:ml-2">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <button 
                    onClick={() => addToCart(product)} 
                    className="mt-2 sm:mt-3 w-full bg-[#0d9488]/90 hover:bg-[#0d9488] text-white py-1.5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-colors flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    Add to Cart
                  </button>

                  {/* Stock Info */}
                  <div className="mt-1 sm:mt-2 text-xs text-gray-500">
                    {product.stock > 10 ? (
                      <span className="text-green-600">In Stock ({product.stock} available)</span>
                    ) : product.stock > 0 ? (
                      <span className="text-orange-600">Only {product.stock} left!</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12 bg-white rounded-lg sm:rounded-xl shadow-sm">
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">No products found</h3>
            <p className="text-sm sm:text-base text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Pagination */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm -space-x-px">
            <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-l-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 border-t border-b border-gray-300 bg-white text-xs sm:text-sm font-medium text-blue-600 hover:bg-blue-50">
              1
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-r-md border border-gray-300 bg-white text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Products;