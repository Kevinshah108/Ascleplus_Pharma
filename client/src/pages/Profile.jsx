import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Edit2, Trash2, Package, Save, X } from 'lucide-react';
import axios from 'axios';

const Profile = () => {
  const { user, deleteAccount } = useAuth(); 
  const navigate = useNavigate();

  // Editing State
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  
  // Orders State
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  // Load user data into form when user loads
  useEffect(() => {
    if (user) {
        setFormData({
            name: user.name || '',
            phone: user.phone || '',
            address: user.address || ''
        });
        fetchOrders();
    }
  }, [user]);

  // Fetch Orders from Backend
  const fetchOrders = async () => {
    try {
        const token = localStorage.getItem('token');
        const res = await axios.get('https://ascleplus-backend.onrender.com/auth/orders', {
            headers: { 'x-auth-token': token }
        });
        setOrders(res.data);
        setLoadingOrders(false);
    } catch (err) {
        console.error(err);
        setLoadingOrders(false);
    }
  };

  // Handle Profile Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('token');
        const res = await axios.put('https://ascleplus-backend.onrender.com/auth/update', formData, {
            headers: { 'x-auth-token': token }
        });
        
        alert("Profile Updated Successfully!");
        
        // Update Local Storage with new data immediately
        const updatedUser = { ...user, ...res.data };
        localStorage.setItem('user_data', JSON.stringify(updatedUser));
        
        // Force reload to update Context (simplest way)
        window.location.reload(); 
        
    } catch (err) {
        alert("Failed to update profile.");
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      const success = await deleteAccount();
      if (success) {
        alert("Account deleted.");
        navigate('/'); 
      }
    }
  };

  if (!user) return <div className="text-center mt-20">Please Log In</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT COL: USER CARD */}
        <div className="md:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mb-6">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-center relative">
                    <div className="w-24 h-24 bg-emerald-500 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold shadow-xl border-4 border-white mb-4">
                        {user.name.charAt(0).toUpperCase()}
                    </div>
                    {!isEditing && (
                        <>
                            <h1 className="text-xl font-bold text-white">{user.name}</h1>
                            <p className="text-slate-300 text-sm">AsclePlus Member</p>
                            <button onClick={() => setIsEditing(true)} className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
                                <Edit2 size={16} />
                            </button>
                        </>
                    )}
                </div>

                {/* Details / Edit Form */}
                <div className="p-6">
                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-400">Name</label>
                                <input className="w-full border p-2 rounded-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400">Phone</label>
                                <input className="w-full border p-2 rounded-lg" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-400">Address</label>
                                <textarea className="w-full border p-2 rounded-lg" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                            </div>
                            <div className="flex gap-2 pt-2">
                                <button type="submit" className="flex-1 bg-emerald-600 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2"><Save size={16}/> Save</button>
                                <button type="button" onClick={() => setIsEditing(false)} className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-bold flex items-center justify-center gap-2"><X size={16}/> Cancel</button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-5">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-full"><Mail size={18}/></div>
                                <div><p className="text-xs text-slate-400 font-bold">Email</p><p className="text-slate-800 font-medium">{user.email}</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-full"><Phone size={18}/></div>
                                <div><p className="text-xs text-slate-400 font-bold">Phone</p><p className="text-slate-800 font-medium">{user.phone || "Not set"}</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-orange-50 text-orange-600 rounded-full"><MapPin size={18}/></div>
                                <div><p className="text-xs text-slate-400 font-bold">Address</p><p className="text-slate-800 font-medium">{user.address || "Not set"}</p></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <button onClick={handleDeleteAccount} className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 flex items-center justify-center gap-2">
                <Trash2 size={18} /> Delete Account
            </button>
        </div>

        {/* RIGHT COL: ORDERS */}
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Package className="text-emerald-600" /> My Orders
            </h2>

            {loadingOrders ? <p>Loading orders...</p> : orders.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center">
                    <Package size={48} className="text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-500">No Orders Yet</h3>
                    <p className="text-slate-400">Your purchase history will appear here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {orders.map(order => (
                        <div key={order._id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                            <div className="flex justify-between items-start mb-4 border-b border-slate-50 pb-4">
                                <div>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Order ID</p>
                                    <p className="font-mono text-sm text-slate-600">#{order._id.slice(-6)}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Date</p>
                                    <p className="text-sm text-slate-600">{new Date(order.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                                {order.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between text-sm items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                            <span className="text-slate-700 font-medium">{item.product.name}</span>
                                            <span className="text-slate-400 text-xs">x{item.qty}</span>
                                        </div>
                                        <span className="font-medium text-slate-900">₹{item.product.price * item.qty}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="pt-2 flex justify-between items-center">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                }`}>
                                    {order.status}
                                </span>
                                <span className="text-lg font-bold text-slate-900">Total: ₹{order.totalAmount}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default Profile;