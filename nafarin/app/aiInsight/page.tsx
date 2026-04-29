"use client";
import React, { FC } from 'react';
import { 
  MdSearch, MdNotificationsNone, MdDashboard, 
  MdInventory2, MdMonetizationOn, MdEventNote, MdSettings, 
  MdKeyboardArrowDown, MdLightbulbOutline 
} from 'react-icons/md';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

// --- Data Stubs ---
const predictiveData = [
  { name: 'Sun', value: 10 },
  { name: 'Mon', value: 25 },
  { name: 'Tue', value: 15 },
  { name: 'Wed', value: 20 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 32 },
  { name: 'Sat', value: 40 },
];

const wasteData = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 80 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 90 },
  { name: 'May', value: 110 },
  { name: 'Jun', value: 170 },
  { name: 'Jul', value: 120 },
];

// --- Sidebar Component ---


// --- AI Insights Main Component --
const AIInsights: FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FA] p-6 lg:p-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1600px] h-[900px] bg-white flex shadow-2xl rounded-lg overflow-hidden">
        {/* <Sidebar /> */}
        
        <div className="flex-1 flex flex-col bg-[#F3F6FA]">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6 bg-white">
            <h1 className="text-gray-900 font-bold text-2xl">AI Insights</h1>
            <div className="flex items-center gap-6">
              <div className="relative w-80">
                <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Search" className="w-full bg-[#F3F6FA] text-gray-800 rounded-lg pl-12 pr-4 py-2 text-sm outline-none" />
              </div>
              <MdNotificationsNone className="text-red-500" size={24} />
              <div className="flex items-center gap-3 border-l pl-6">
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm">Johnn-Samsklina</p>
                  <p className="text-gray-500 text-xs text-right">Dashboard</p>
                </div>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" alt="User" />
                <MdKeyboardArrowDown className="text-gray-400" />
              </div>
            </div>
          </header>

          <main className="p-8 grid grid-cols-2 gap-8 grow">
            
            {/* Card 1: Predictive Order Suggestion */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 ring-4 ring-blue-50 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Predictive Order Suggestion</h3>
              <p className="text-gray-500 text-sm mb-6">Tenggiri (from Stock)</p>
              
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={predictiveData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1C75FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#1C75FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                    <Tooltip />
                    <Area type="monotone" dataKey="value" stroke="#1C75FF" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-auto">
                <p className="font-bold text-gray-900 mb-2">Recommendations:</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Order 25 kg more Tenggiri; Stock will deplete in 3 days based on current sales velocity.
                </p>
                <button className="w-full bg-[#1C75FF] hover:bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg transition shadow-lg shadow-blue-100">
                  ORDER NOW
                </button>
              </div>
            </div>

            {/* Card 2: Waste Reduction Analysis */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Waste Reduction Analysis</h3>
              <p className="text-gray-500 text-sm mb-6">Inventory Status & Expiry</p>
              
              <div className="h-64 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={wasteData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                    <Tooltip cursor={{fill: '#F8FAFC'}} />
                    <Bar dataKey="value" fill="#0EA5E9" radius={[6, 6, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-auto">
                <p className="font-bold text-gray-900 mb-2">Suggestions:</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  5 kg of Fruit nearing expiry; implement 20% discount bundling now.
                </p>
                <div className="h-14" /> {/* Spacer to match card heights */}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;