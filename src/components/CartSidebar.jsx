import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2 } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  const sidebarClasses = isOpen
    ? 'translate-x-0'
    : 'translate-x-full';

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform ${sidebarClasses} transition-transform duration-300 z-50`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose}>
          <X className="h-6 w-6 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-4rem)]">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border rounded-lg p-3 hover:shadow-md transition">
              <img
                src={item.image || 'https://via.placeholder.com/60'}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
