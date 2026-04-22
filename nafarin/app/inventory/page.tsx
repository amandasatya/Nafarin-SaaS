"use client"

import React, { FC } from 'react';
import {
  MdSearch,
  MdMailOutline,
  MdNotificationsNone,
  MdDashboard,
  MdInsertChartOutlined,
  MdInventory2,
  MdMonetizationOn,
  MdAddAlert,
  MdEventNote,
  MdOutlineLocalOffer,
  MdSettings,
  MdKeyboardArrowDown,
} from 'react-icons/md';

// --- Data Stubs ---

const inventoryItems = [
  {
    sku: 'SKU-TEN-001',
    name: 'Tenggiri',
    category: 'Seafood',
    stockLevel: 45.2,
    totalLevel: 100, // Placeholder total for progress bar
    unit: 'kg',
    status: 'Low Stock',
  },
  {
    sku: 'SKU-TEN-002',
    name: 'Tenggiri',
    category: 'Seafood',
    stockLevel: 45.2,
    totalLevel: 100,
    unit: 'Units',
    status: 'Low Stock',
  },
  {
    sku: 'SKU-TEN-001',
    name: 'Milk',
    category: 'Dairy',
    stockLevel: 80.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-004',
    name: 'Carrowi Mg',
    category: 'Ritzonn',
    stockLevel: 25.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-001',
    name: 'Cream Svure',
    category: 'Azmin',
    stockLevel: 45.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-005',
    name: 'Gracken Sot',
    category: 'Sahanora',
    stockLevel: 52.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-003',
    name: 'Metal Powets',
    category: 'Seafood',
    stockLevel: 45.8,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-001',
    name: 'Bratori Maight',
    category: 'Kelny',
    stockLevel: 80.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
  {
    sku: 'SKU-TEN-005',
    name: 'Braponi Mg',
    category: 'Kelny',
    stockLevel: 80.0,
    totalLevel: 100,
    unit: 'Units',
    status: 'Healthy',
  },
];

const menuItems = [
  { name: 'Dashboard', icon: MdDashboard },
  { name: 'Analysis', icon: MdInsertChartOutlined },
  { name: 'Inventory', icon: MdInventory2, active: true },
  { name: 'CashFlow', icon: MdMonetizationOn, submenu: true },
  { name: 'Datapse Alerts', icon: MdAddAlert },
  { name: 'Events', icon: MdEventNote },
  { name: 'Discount', icon: MdOutlineLocalOffer },
  { name: 'Settings', icon: MdSettings },
];

// --- Sub-Components ---

const Sidebar: FC = () => (
  <div className="w-64 bg-[#0A1A3C] p-6 flex flex-col h-full rounded-l-lg">
    <div className="flex items-center gap-2 mb-10 text-white font-bold text-2xl">
      <div className="bg-[#1C75FF] p-2 rounded-xl">
        <MdInventory2 size={24} className="transform rotate-[-20deg]" />
      </div>
      Grocer<span className="text-[#1C75FF]">IQ</span>
    </div>
    <nav className="grow">
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm transition ${
                item.active
                  ? 'bg-[#142A57] text-[#1C75FF] font-medium'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.name}
              {item.submenu && <MdKeyboardArrowDown className="ml-auto" />}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Header: FC = () => (
  <header className="flex items-center justify-between px-8 py-6 bg-white rounded-tr-lg">
    <div className="relative w-80">
      <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[#F3F6FA] text-gray-800 rounded-lg pl-12 pr-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-blue-200"
      />
    </div>
    <div className="flex items-center gap-6 text-gray-500">
      <button>
        <MdMailOutline size={22} />
      </button>
      <button>
        <MdNotificationsNone size={22} />
      </button>
      <div className="flex items-center gap-3 ml-2 border-l pl-6 py-1">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="John Carter"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-sm">
          <div className="font-semibold text-gray-900">John Carter</div>
          <div className="text-gray-500">Dashboard</div>
        </div>
        <MdKeyboardArrowDown size={20} />
      </div>
    </div>
  </header>
);

const ProgressBar: FC<{ value: number; total: number }> = ({ value, total }) => {
  const percentage = (value / total) * 100;
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 relative">
      <div
        className="bg-[#1C75FF] h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      />
      {/* Outer Glow Effect */}
      <div
        className="absolute inset-0 bg-[#1C75FF] opacity-30 blur-md rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const StatusBadge: FC<{ status: string }> = ({ status }) => {
  const isHealthy = status === 'Healthy';
  return (
    <div
      className={`px-4 py-1.5 rounded-full text-xs font-semibold inline-block ${
        isHealthy ? 'bg-[#D6F5F2] text-[#00897B]' : 'bg-[#FFEDD5] text-[#A16207]'
      }`}
    >
      {status}
    </div>
  );
};

const InventoryTable: FC = () => (
  <div className="bg-white p-8 rounded-2xl grow flex flex-col">
    <div className="flex items-center justify-between mb-8">
      <h3 className="text-gray-900 font-semibold text-xl">Stock Levels</h3>
      <button className="text-[#1C75FF] bg-[#D3EEFD] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-100 transition">
        Prioritized
      </button>
    </div>
    <div className="w-full grow overflow-y-auto pr-2">
      <div className="flex items-start justify-around gap-4 py-4 border-b text-sm font-medium text-gray-500">
        <div>SKU</div>
        <div>Product Name</div>
        <div>Category</div>
        <div>Stock Level</div>
        <div>Unit</div>
        <div>Reorder Status</div>
      </div>
      {inventoryItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-around items-start gap-4 py-5 border-b last:border-0 text-sm text-gray-800"
        >
          <div className="font-mono">{item.sku}</div>
          <div className="font-medium">{item.name}</div>
          <div>{item.category}</div>
          <div className="flex items-center gap-3">
            <ProgressBar value={item.stockLevel} total={item.totalLevel} />
            <span className="font-semibold text-gray-900 w-16 text-right">
              {item.stockLevel.toFixed(1)}
            </span>
          </div>
          <div>{item.unit}</div>
          <div>
            <StatusBadge status={item.status} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Component ---

const GrocerIQInventory: FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FA] p-6 lg:p-12 flex items-center justify-center font-sans relative">
      <div className="w-full max-w-400 h-225 bg-white flex shadow-2xl rounded-lg overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#F3F6FA]">
          <Header />
          <main className="grow p-8 lg:p-12 space-y-10 flex flex-col">
            <h1 className="text-gray-900 font-bold text-3xl">Inventory</h1>
            <InventoryTable />
          </main>
        </div>
      </div>
      {/* Background decoration star */}
      <div className="absolute bottom-10 right-10 text-blue-200">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default GrocerIQInventory;