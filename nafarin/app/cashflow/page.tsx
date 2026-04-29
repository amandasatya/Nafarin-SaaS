"use client";
import React, { FC } from 'react';
import { 
  MdSearch, MdNotificationsNone, MdDashboard, MdInventory2, 
  MdMonetizationOn, MdEventNote, MdSettings, MdKeyboardArrowDown,
  MdOutlineAccountBalanceWallet, MdPointOfSale
} from 'react-icons/md';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell 
} from 'recharts';

// --- Data Stubs based on Image 4 ---
const dailyCashflowData = [
  { name: 'Mon', in: 100, out: 40 },
  { name: 'Tue', in: 130, out: 50 },
  { name: 'Wed', in: 150, out: 60 },
  { name: 'Thu', in: 110, out: 45 },
  { name: 'Fri', in: 160, out: 55 },
  { name: 'Sat', in: 180, out: 70 },
  { name: 'Sun', in: 140, out: 65 },
];

const salesBreakdown = [
  { name: 'Weighted Sales (Tenggiri)', value: '$15.00' },
  { name: 'Fruit Sales', value: '$110.00' },
  { name: 'Dairy Sales', value: '$200.00' },
];

// --- Sidebar Component ---


// --- Cashflow Summary Card ---
const CashflowSummary: FC = () => (
  <div className="bg-white p-8 rounded-3xl border border-blue-100 ring-4 ring-blue-50 shadow-sm">
    <h3 className="text-gray-900 font-bold text-lg mb-6">Today's Cash Summary</h3>
    <div className="flex justify-between mb-8">
      <div>
        <p className="text-gray-500 text-sm mb-1 font-medium">Cash In (Sales):</p>
        <p className="text-3xl font-black text-gray-900">$3,450.00</p>
      </div>
      <div className="text-right">
        <p className="text-gray-500 text-sm mb-1 font-medium">Cash Out (Expenses):</p>
        <p className="text-3xl font-black text-gray-900">$1,120.00</p>
      </div>
    </div>
    {/* Visual Balance Bar */}
    <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden flex">
      <div className="h-full bg-[#1C75FF]" style={{ width: '75%' }}></div>
      <div className="h-full bg-gray-300" style={{ width: '25%' }}></div>
    </div>
    <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      <span>Sales</span>
      <span>Cash</span>
      <span>Bout</span>
    </div>
  </div>
);

// --- Breakdown Table Card ---
const BreakdownCard: FC<{ title: string; data: any[] }> = ({ title, data }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
    <h3 className="text-gray-900 font-bold text-lg mb-6">{title}</h3>
    <div className="w-full">
      <div className="flex justify-between text-xs font-bold text-gray-400 uppercase mb-4 pb-2 border-b">
        <span>Product Type Name</span>
        <span>Value</span>
      </div>
      {data.map((item, i) => (
        <div key={i} className="flex justify-between py-3 border-b last:border-0 text-sm font-semibold">
          <span className="text-gray-600">{item.name}</span>
          <span className="text-gray-900 font-bold">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const CashflowDashboard: FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FA] p-6 lg:p-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1600px] h-[900px] bg-white flex shadow-2xl rounded-lg overflow-hidden">
        {/* <Sidebar /> */}
        
        <div className="flex-1 flex flex-col bg-[#F3F6FA]">
          {/* Header */}
          <header className="flex items-center justify-between px-8 py-6 bg-white">
            <h1 className="text-gray-900 font-bold text-2xl">Cashflow Dashboard</h1>
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

          <main className="p-8 grid grid-cols-2 gap-8 grow overflow-y-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <CashflowSummary />
              
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-gray-900 font-bold text-lg mb-6">Daily Cashflow (Green=In, Red=Out)</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyCashflowData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                      <Tooltip />
                      <Bar dataKey="in" fill="#10B981" radius={[4, 4, 0, 0]} stackId="a" barSize={30} />
                      <Bar dataKey="out" fill="#EF4444" radius={[0, 0, 4, 4]} stackId="a" barSize={30} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <BreakdownCard title="Sales Breakdown Today" data={salesBreakdown} />
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                 <h3 className="text-gray-900 font-bold text-lg mb-2">Main Expenses</h3>
                 <p className="text-gray-400 text-xs font-medium mb-4">(Staff, Inventory, Utilities)</p>
                 <div className="h-1 bg-gray-50 mb-4"></div>
                 {/* Re-using the breakdown table style as seen in image 4 */}
                 <div className="ring-4 ring-blue-50 border border-blue-100 rounded-2xl p-4">
                    <h4 className="text-gray-900 font-bold text-sm mb-4">Sales Breakdown Today</h4>
                    {salesBreakdown.map((item, i) => (
                      <div key={i} className="flex justify-between py-2 border-b last:border-0 text-xs">
                        <span className="text-gray-600 font-medium">{item.name}</span>
                        <span className="text-gray-900 font-bold">{item.value}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CashflowDashboard;