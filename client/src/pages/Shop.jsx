import React, { useState, useEffect } from 'react';
import { Search, Star, X, RefreshCw } from 'lucide-react'; 
import { useCart } from '../context/CartContext'; 
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [error, setError] = useState('');

  const { addToCart, cartItems } = useCart();

  // 1. Fetch Products from Backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Make sure this URL matches your backend port (5000)
      const res = await axios.get('https://ascleplus-backend.onrender.com/products');
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Could not connect to server. Ensure 'node server.js' is running.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 2. SEED DATA FUNCTION (Click this if list is empty)
  const handleSeedData = async () => {
    try {
      if(window.confirm("Add sample products to database?")) {
        await axios.post('https://ascleplus-backend.onrender.com/products/seed');
        alert("Success! Products added.");
        fetchProducts(); // Refresh list immediately
      }
    } catch (err) {
      alert("Failed to seed data. Check console for errors.");
    }
  };

  // Helper to count items in cart
  const getCartQty = (product) => {
    // We look for the item in the cart that matches this product's ID
    const productId = product._id || product.id;
    const foundItem = cartItems.find(item => (item._id || item.id) === productId);
    return foundItem ? foundItem.qty : 0;
  };

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];

  // --- UI ---

  if (loading) return (
    <div className="flex justify-center items-center h-screen text-emerald-600 font-bold">
      Loading Medicines...
    </div>
  );

  if (error) return (
    <div className="text-center mt-20 text-red-500">
      <h2 className="text-2xl font-bold">Connection Error</h2>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="pt-8 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-white">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Shop Medicines</h1>
            <p className="text-gray-500">Find the best healthcare products for you.</p>
        </div>
        <div className="relative w-full md:w-96">
             <input 
                type="text" 
                placeholder="Search..." 
                className="w-full pl-4 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
             <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* --- EMPTY STATE / SEED BUTTON --- */}
      {products.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-2xl text-center mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-2">Database is Empty</h3>
            <p className="text-yellow-700 mb-4">You have connected to MongoDB, but there are no products yet.</p>
            <button 
                onClick={handleSeedData}
                className="bg-yellow-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-yellow-700 flex items-center gap-2 mx-auto shadow-lg"
            >
                <RefreshCw size={20} /> Load Initial Data
            </button>
        </div>
      )}

      {/* Categories */}
      {products.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === cat ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{cat}</button>
            ))}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => {
            const qtyInCart = getCartQty(item);

            return (
            <div key={item._id} className="group border border-gray-100 rounded-2xl p-4 hover:shadow-xl transition bg-white flex flex-col relative">
                
                {qtyInCart > 0 && (
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md">
                        {qtyInCart} in Cart
                    </div>
                )}

                <div className="h-48 rounded-xl mb-4 relative overflow-hidden bg-gray-50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>

                <div className="flex-grow">
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{item.name}</h3>
                    <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
                        <Star size={14} fill="currentColor" /> {item.rating}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-50">
                    <span className="text-xl font-bold text-slate-900">₹{item.price}</span>
                    <button 
                        onClick={() => addToCart(item)}
                        className="bg-emerald-600 text-white p-2.5 rounded-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/20"
                    >
                        <span className="text-xs font-medium px-2">
                           {qtyInCart > 0 ? `Add More (+${qtyInCart})` : 'Add to Cart'}
                        </span>
                    </button>
                </div>
            </div>
            )
        })}
      </div>
    </div>
  );
};

export default Shop;