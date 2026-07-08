import { useState } from 'react';
import { X, ShoppingBag, Check, Sparkles, Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [ordering, setOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;
    
    setOrdering(true);
    
    const orderData = {
      orderItems: cartItems.map(item => ({
        menuItemId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      customerName: 'Guest Customer',
      customerEmail: 'guest@upsidedown.com',
      customerPhone: '000-000-0000',
      orderType: 'dine-in',
      subtotal: totalPrice,
      tax: totalPrice * 0.08,
      total: totalPrice * 1.08
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });
      
      if (response.ok) {
        setOrderSuccess(true);
        setTimeout(() => {
          clearCart();
          setOrderSuccess(false);
          setCartOpen(false);
        }, 3000);
      } else {
        throw new Error('Order failed');
      }
    } catch (error) {
      console.log('Backend not connected, simulating order...');
      setOrderSuccess(true);
      setTimeout(() => {
        clearCart();
        setOrderSuccess(false);
        setCartOpen(false);
      }, 3000);
    } finally {
      setOrdering(false);
    }
  };

  if (!cartOpen) return null;

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const taxAmount = totalPrice * 0.08;
  const finalTotal = totalPrice * 1.08;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={() => setCartOpen(false)} 
      />
      
      {/* Cart Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-gradient-to-b from-gray-900 to-gray-950 border-l border-red-900/30 h-full overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent border-b border-red-900/30 p-4 sm:p-6 flex items-center justify-between">
          <h2 className="font-horror text-xl sm:text-2xl text-red-500 flex items-center gap-2 sm:gap-3">
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            YOUR ORDER
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-red-900/30 rounded-lg transition-all duration-300 group"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {orderSuccess ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-green-600/50 animate-pulse">
                <Check className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>
              <h3 className="font-horror text-2xl sm:text-3xl text-green-500 mb-2 sm:mb-3">ORDER PLACED!</h3>
              <p className="text-gray-400 mb-2 text-sm sm:text-base">Your order has been sent to the kitchen...</p>
              <div className="flex items-center justify-center gap-2 text-red-500 mt-4">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">The portal is open for you!</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-800/50 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" />
              </div>
              <h3 className="font-horror text-lg sm:text-xl text-gray-500 mb-2">Your Cart is Empty</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Add some delicious items from the menu</p>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item, index) => (
                <div 
                  key={item._id} 
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-700/50 hover:border-red-900/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Item Header */}
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="font-semibold text-white text-sm sm:text-base leading-tight flex-1">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="p-1.5 hover:bg-red-900/30 rounded-lg transition-all duration-300 group flex-shrink-0"
                      title="Remove from cart"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-4 h-4 text-gray-500 group-hover:text-red-500 transition-colors" />
                    </button>
                  </div>

                  {/* Item Footer */}
                  <div className="flex items-center justify-between gap-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 bg-gray-900/50 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                        className="p-1.5 hover:bg-red-900/30 rounded-md transition-all duration-300"
                        title="Decrease quantity"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                      </button>
                      <span className="text-white font-bold w-6 sm:w-8 text-center text-sm sm:text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="p-1.5 hover:bg-red-900/30 rounded-md transition-all duration-300"
                        title="Increase quantity"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 font-black text-base sm:text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Totals and Checkout */}
        {cartItems.length > 0 && !orderSuccess && (
          <div className="sticky bottom-0 bg-gradient-to-t from-gray-950 via-gray-900 to-transparent pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 border-t border-red-900/30">
            {/* Price Breakdown */}
            <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-400">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
                <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-400">Tax (8%)</span>
                <span className="text-white font-medium">${taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 sm:pt-3 border-t border-gray-700">
                <span className="text-white font-bold text-sm sm:text-base">Total</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 font-black text-base sm:text-lg">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>
            
            {/* Place Order Button */}
            <button 
              onClick={handlePlaceOrder}
              disabled={ordering}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 uppercase tracking-wider text-sm sm:text-base shadow-lg hover:shadow-red-600/50 flex items-center justify-center gap-2 sm:gap-3"
            >
              {ordering ? (
                <>
                  <span className="w-4 h-4 sm:w-6 sm:h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Placing Order...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Place Order</span>
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
