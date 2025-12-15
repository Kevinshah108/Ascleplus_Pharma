import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, subtotal, tax, discountAmount, total } = useCart();
  const { user } = useAuth();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4">
        <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6">
            <ShoppingBag size={40} className="text-slate-400" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <Link to="/shop" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
            Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart ({cartItems.length})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              // 1. GET SAFE ID
              const itemId = item._id || item.id; 

              return (
              <div key={itemId} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500 mb-2">{item.category}</p>
                    <div className="text-blue-600 font-bold">₹{item.price}</div>
                </div>
                
                {/* Qty Controls */}
                <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1">
                    {/* 2. PASS SAFE ID TO FUNCTIONS */}
                    <button onClick={() => updateQty(itemId, -1)} className="p-1 hover:bg-white rounded-md transition shadow-sm"><Minus size={16} /></button>
                    <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(itemId, 1)} className="p-1 hover:bg-white rounded-md transition shadow-sm"><Plus size={16} /></button>
                </div>

                <button onClick={() => removeFromCart(itemId)} className="p-2 text-slate-400 hover:text-red-500 transition">
                    <Trash2 size={20} />
                </button>
              </div>
            )})}
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h3>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between text-slate-600">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                        <span>Tax (18% GST)</span>
                        <span>+₹{tax.toFixed(2)}</span>
                    </div>
                    {discountAmount > 0 && (
                        <div className="flex justify-between text-emerald-600 font-bold bg-emerald-50 p-2 rounded-lg">
                            <span>First Order Discount (25%)</span>
                            <span>-₹{discountAmount.toFixed(2)}</span>
                        </div>
                    )}
                    <div className="h-px bg-slate-200 my-4"></div>
                    <div className="flex justify-between text-lg font-bold text-slate-900">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </div>
                <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                    Checkout <ArrowRight size={18} />
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Cart;