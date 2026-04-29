"use client";
import React, { useState, FC } from 'react';
import { 
  MdSearch, MdMailOutline, MdNotificationsNone, MdDashboard, 
  MdInventory2, MdMonetizationOn, MdEventNote, MdSettings, 
  MdKeyboardArrowDown, MdClose 
} from 'react-icons/md';

// --- Types & Data ---
interface Product {
  id: string;
  name: string;
  pricePerKg: string;
  image?: string;
}

const products: Product[] = [
  { id: '1', name: 'Tenggiri', pricePerKg: '$15.00' },
  { id: '2', name: 'Tenggiri', pricePerKg: '$5.00' },
  { id: '3', name: 'Tenggiri', pricePerKg: '$2.00' },
  { id: '4', name: 'Cream Svure', pricePerKg: '$5.00' },
  { id: '5', name: 'Tenggiri', pricePerKg: '$2.00' },
  { id: '6', name: 'Pio Tena', pricePerKg: '$5.00' },
];


const SalesPage: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#F3F6FA] p-6 lg:p-12 flex items-center justify-center font-sans relative">
      <div className="w-full max-w-[1600px] h-[900px] bg-white flex shadow-2xl rounded-lg overflow-hidden relative">
        {/* <Sidebar /> */}
        
        <div className="flex-1 flex flex-col bg-[#F3F6FA]">
          <header className="flex items-center justify-between px-8 py-6 bg-white">
            <h1 className="text-gray-900 font-bold text-2xl">Sales</h1>
            <div className="relative w-80">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search" className="w-full bg-[#F3F6FA] text-gray-800 rounded-lg pl-12 pr-4 py-2.5 text-sm outline-none" />
            </div>
            <div className="flex items-center gap-6">
              <MdMailOutline className="text-gray-400" size={22} />
              <MdNotificationsNone className="text-gray-400" size={22} />
              <div className="flex items-center gap-3 border-l pl-6">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" alt="User" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Johnn-Samsklina</p>
                  <p className="text-gray-500">Dashboard</p>
                </div>
                <MdKeyboardArrowDown className="text-gray-400" />
              </div>
            </div>
          </header>

          <main className="p-8 grow">
            <div className="flex gap-4 mb-8">
              {['Fruits', 'Vegetables', 'Seafood', 'Industry'].map((cat) => (
                <button key={cat} className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition ${cat === 'Seafood' ? 'bg-[#0A1A3C] text-white' : 'bg-[#1C75FF] text-white hover:bg-blue-600'}`}>
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`bg-white p-6 rounded-2xl flex flex-col items-center justify-center cursor-pointer border-2 transition-all hover:shadow-lg ${product.id === '1' ? 'border-[#1C75FF] ring-2 ring-blue-100' : 'border-transparent'}`}
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="#94A3B8"><path d="M21,11C21,11 19,7 13,7C10,7 7,8.5 5,11L2,11L5,13C7,15.5 10,17 13,17C19,17 21,13 21,13L23,12L21,11M13,15C11.5,15 10.2,14.4 9.1,13.5L11,12L9.1,10.5C10.2,9.6 11.5,9 13,9C15.8,9 17.8,10.7 18.7,12C17.8,13.3 15.8,15 13,15Z"/></svg>
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">{product.name}</p>
                  <p className="text-[#1C75FF] font-bold">{product.pricePerKg}</p>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* --- Weighing Station Modal --- */}
        {selectedProduct && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-50 backdrop-blur-[2px]">
            <div className="bg-white w-[500px] rounded-3xl shadow-2xl p-10 relative">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
              >
                <MdClose size={24} />
              </button>
              
              <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">Weighing Station</h2>
              <p className="text-center text-gray-500 mb-10 font-medium">{selectedProduct.name}</p>
              
              {/* Digital Scale Display */}
              <div className="bg-[#F8F9FB] border border-gray-100 rounded-2xl p-8 mb-8 flex items-center justify-center gap-6">
                <span className="text-8xl font-bold text-gray-900 tracking-tighter">1.25</span>
                <span className="text-4xl font-bold text-gray-400 mt-6">kg</span>
              </div>

              <div className="text-center mb-10">
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold mb-2">Total Price</p>
                <p className="text-4xl font-black text-gray-900">{selectedProduct.pricePerKg}</p>
              </div>

              <button className="w-full bg-[#1C75FF] hover:bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl transition shadow-lg">
                ADD TO ORDER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesPage;