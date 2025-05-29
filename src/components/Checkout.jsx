import React, { useRef, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Check, ChevronRight, CreditCard, MapPin, Package, ShoppingBag, Truck } from 'lucide-react';

const Checkout = () => {
  const { cart } = useCart();
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState('standard');
  
  // Using refs instead of state for form inputs to prevent re-renders
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const addressRef = useRef('');
  const apartmentRef = useRef('');
  const cityRef = useRef('');
  const stateRef = useRef('');
  const zipCodeRef = useRef('');
  const cardNameRef = useRef('');
  const cardNumberRef = useRef('');
  const expiryDateRef = useRef('');
  const cvvRef = useRef('');
  const orderNotesRef = useRef('');

  // Calculate order summary
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = shippingMethod === 'express' ? 15 : 5;
  const tax = subtotal * 0.07; // Assuming 7% tax rate
  const total = subtotal + shipping + tax;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleShippingMethodChange = (e) => {
    setShippingMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Collect all form data from refs
      const formData = {
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        address: addressRef.current.value,
        apartment: apartmentRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        zipCode: zipCodeRef.current.value,
        country: 'United States',
        cardName: cardNameRef.current.value,
        cardNumber: cardNumberRef.current.value,
        expiryDate: expiryDateRef.current.value,
        cvv: cvvRef.current.value,
        orderNotes: orderNotesRef.current.value,
        shippingMethod: shippingMethod
      };
      
      // Handle order submission - would typically send to API
      console.log('Order submitted:', { cart, formData });
      // Redirect to confirmation page or show confirmation
      setStep(4);
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8 mt-20">
      {[
        { num: 1, title: 'Shipping', icon: <MapPin size={16} /> },
        { num: 2, title: 'Payment', icon: <CreditCard size={16} /> },
        { num: 3, title: 'Review', icon: <Package size={16} /> }
      ].map((s, i) => (
        <React.Fragment key={s.num}>
          <div className="flex flex-col items-center">
            <div 
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= s.num 
                  ? 'bg-blue-600 border-blue-600 text-white' 
                  : 'border-gray-300 text-gray-400'
              }`}
            >
              {step > s.num ? <Check size={16} /> : s.icon}
            </div>
            <span className={`text-xs mt-1 ${step >= s.num ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
              {s.title}
            </span>
          </div>
          {i < 2 && (
            <div className={`w-20 h-0.5 mx-1 ${step > i + 1 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const OrderSummary = () => (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <ShoppingBag className="mr-2 h-5 w-5" />
        Order Summary
      </h3>
      <div className="divide-y">
        {cart.map(item => (
          <div key={item.id} className="py-3 flex">
            <div className="relative">
              <img 
                src={item.image || '/api/placeholder/60/60'} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded"
              />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="ml-4 flex-1">
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-gray-500">{item.variant || ''}</div>
            </div>
            <div className="font-medium">
              {formatCurrency(item.price * item.quantity)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-dashed">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Shipping</span>
          <span>{formatCurrency(shipping)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold mt-4 pt-2 border-t">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>
    </div>
  );

  // Step 1: Shipping Information
  const ShippingStep = () => (
    <div>
      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            ref={phoneRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            ref={firstNameRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            ref={lastNameRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          ref={addressRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Apartment, suite, etc. (optional)
        </label>
        <input
          type="text"
          name="apartment"
          ref={apartmentRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            ref={cityRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State/Province
          </label>
          <input
            type="text"
            name="state"
            ref={stateRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP/Postal Code
          </label>
          <input
            type="text"
            name="zipCode"
            ref={zipCodeRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Shipping Method
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <label className={`border rounded-lg p-4 flex cursor-pointer ${
            shippingMethod === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}>
            <input
              type="radio"
              name="shippingMethod"
              value="standard"
              checked={shippingMethod === 'standard'}
              onChange={handleShippingMethodChange}
              className="sr-only"
            />
            <div className="mr-4">
              <Truck className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <div className="font-medium">Standard Shipping</div>
              <div className="text-sm text-gray-500">Delivery in 3-5 business days</div>
              <div className="text-blue-600 font-medium mt-1">$5.00</div>
            </div>
          </label>
          
          <label className={`border rounded-lg p-4 flex cursor-pointer ${
            shippingMethod === 'express' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}>
            <input
              type="radio"
              name="shippingMethod"
              value="express"
              checked={shippingMethod === 'express'}
              onChange={handleShippingMethodChange}
              className="sr-only"
            />
            <div className="mr-4">
              <Truck className="h-8 w-8 text-blue-500" />
            </div>
            <div>
              <div className="font-medium">Express Shipping</div>
              <div className="text-sm text-gray-500">Delivery in 1-2 business days</div>
              <div className="text-blue-600 font-medium mt-1">$15.00</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
  
  // Step 2: Payment Information
  const PaymentStep = () => (
    <div>
      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
      <div className="bg-white p-6 border border-gray-200 rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name on Card
          </label>
          <input
            type="text"
            name="cardName"
            ref={cardNameRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            ref={cardNumberRef}
            placeholder="•••• •••• •••• ••••"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              ref={expiryDateRef}
              placeholder="MM/YY"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              ref={cvvRef}
              placeholder="•••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        
        <div className="flex items-center mt-6 text-sm text-gray-500">
          <CreditCard className="h-5 w-5 mr-2" />
          Your payment information is encrypted and secure
        </div>
      </div>
      
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Order Notes (Optional)
        </label>
        <textarea
          name="orderNotes"
          ref={orderNotesRef}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows="3"
          placeholder="Special instructions for delivery"
        ></textarea>
      </div>
    </div>
  );
  
  // Step 3: Review Order
  const ReviewStep = () => (
    <div>
      <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="font-medium flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            Shipping Information
          </h3>
        </div>
        <div className="p-4">
          <p className="mb-1"><span className="font-medium">Contact: </span>{emailRef.current?.value || ''} | {phoneRef.current?.value || ''}</p>
          <p className="mb-1">
            <span className="font-medium">Ship to: </span>
            {firstNameRef.current?.value || ''} {lastNameRef.current?.value || ''}, {addressRef.current?.value || ''} 
            {apartmentRef.current?.value && `, ${apartmentRef.current.value}`}, {cityRef.current?.value || ''}, {stateRef.current?.value || ''} {zipCodeRef.current?.value || ''}
          </p>
          <p>
            <span className="font-medium">Method: </span>
            {shippingMethod === 'express' ? 'Express Shipping (1-2 days)' : 'Standard Shipping (3-5 days)'}
          </p>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="font-medium flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
            Payment Information
          </h3>
        </div>
        <div className="p-4">
          <p className="mb-1">
            <span className="font-medium">Payment Method: </span>
            Credit Card ending in {cardNumberRef.current?.value?.slice(-4) || ''}
          </p>
          <p>
            <span className="font-medium">Billing Address: </span>
            Same as shipping address
          </p>
        </div>
      </div>
      
      {orderNotesRef.current?.value && (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <h3 className="font-medium">Order Notes</h3>
          </div>
          <div className="p-4">
            <p>{orderNotesRef.current.value}</p>
          </div>
        </div>
      )}
    </div>
  );
  
  // Step 4: Order Confirmation
  const ConfirmationStep = () => (
    <div className="text-center max-w-md mx-auto">
      <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
        <Check className="h-10 w-10 text-green-600" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Thank You For Your Order!</h2>
      <p className="text-gray-600 mb-6">
        Order #{Math.floor(100000 + Math.random() * 900000)} has been placed successfully.
        We've sent a confirmation to {emailRef.current?.value || ''}.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
        <h3 className="font-medium mb-2">Estimated Delivery</h3>
        <p className="text-gray-700">
          {shippingMethod === 'express' 
            ? 'Your order will arrive in 1-2 business days'
            : 'Your order will arrive in 3-5 business days'}
        </p>
      </div>
      
      <button 
        type="button"
        className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors w-full"
        onClick={() => window.location.href = '/shop'}
      >
        Continue Shopping
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {step < 4 && <StepIndicator />}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {step === 1 && <ShippingStep />}
            {step === 2 && <PaymentStep />}
            {step === 3 && <ReviewStep />}
            {step === 4 && <ConfirmationStep />}
            
            {step < 4 && (
              <div className="mt-8 flex justify-between items-center">
                {step > 1 ? (
                  <button 
                    type="button" 
                    className="text-blue-600 font-medium flex items-center"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  {step === 3 ? 'Place Order' : 'Continue'}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            )}
          </div>
          
          {step < 4 && (
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Checkout;