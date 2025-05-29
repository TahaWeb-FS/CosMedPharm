import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, MinusCircle, PlusCircle } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const sidebarClasses = isOpen
    ? 'translate-x-0'
    : 'translate-x-full';
    
  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  
  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Cart Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform ${sidebarClasses} transition-transform duration-300 z-50 flex flex-col`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-1 hover:bg-gray-200 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm mt-2">Add items to get started</p>
              <button 
                onClick={onClose}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3 border border-gray-100 rounded-lg p-3 hover:border-gray-200 transition bg-white">
                <img
                  src={item.image || '/api/placeholder/100/100'}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{item.variant || ''}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-gray-400 hover:text-blue-600"
                      disabled={item.quantity <= 1}
                    >
                      <MinusCircle className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-blue-600"
                    >
                      <PlusCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <div className="font-medium">{formatCurrency(item.price * item.quantity)}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal and Checkout */}
        {cart.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="font-semibold">{formatCurrency(subtotal)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
            <Link to='/checkout'>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
              Proceed to Checkout
              </button>
            </Link>
            <button 
              onClick={onClose}
              className="w-full py-2 mt-2 text-blue-600 hover:bg-gray-100 font-medium rounded-md transition-colors text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;