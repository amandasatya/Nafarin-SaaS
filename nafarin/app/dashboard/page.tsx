"use client";
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
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';

// --- Data Stubs ---

const salesData = [
  { name: 'Sun', sales: 50 },
  { name: 'Mon', sales: 180 },
  { name: 'Tue', sales: 120 },
  { name: 'Wed', sales: 250 },
  { name: 'Thu', sales: 160 },
  { name: 'Fri', sales: 300 },
  { name: 'Sat', sales: 380 },
];

const cashflowData = [
  { name: 'Jan', in: 55, out: 40 },
  { name: 'Feb', in: 72, out: 45 },
  { name: 'Mar', in: 48, out: 60 },
  { name: 'Apr', in: 61, out: 35 },
  { name: 'May', in: 85, out: 42 },
  { name: 'Jun', in: 78, out: 30 },
];

const inventoryAlerts = [
  { pri: 1, name: 'Manufacturerspam', duration: 'Rs 30.00', alerts: '16 months', status: 'Prioritized' },
  { pri: 2, name: 'Manual Fruits', duration: 'Rs 30.00', alerts: '18 months', status: 'Prioritized' },
  { pri: 3, name: 'Metal Powets', duration: 'Rs 50.00', alerts: '8 points', status: 'Prioritized' },
  { pri: 4, name: 'Phala Powets', duration: 'Rs 20.00', alerts: '14 months', status: 'Prioritized' },
];

const menuItems = [
  { name: 'Dashboard', icon: MdDashboard, active: true },
  { name: 'Analysis', icon: MdInsertChartOutlined },
  { name: 'Inventory', icon: MdInventory2 },
  { name: 'Investments', icon: MdMonetizationOn, submenu: true },
  { name: 'Database Alerts', icon: MdAddAlert },
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

const SalesWidget: FC = () => (
  <div className="bg-white p-8 rounded-2xl flex-1 flex flex-col">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gray-600 font-medium">Today's Total Sales</h3>
      <div className="bg-[#D3EEFD] text-[#0082FF] px-3 py-1 rounded-full text-xs font-semibold">
        Recent Analysis
      </div>
    </div>
    <div className="text-4xl font-bold text-gray-900 mb-6">
      $35,280.00
      <span className="text-green-500 text-sm font-medium ml-2">▲ 15%</span>
    </div>
    <div className="grow -ml-10 -mb-6 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1C75FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1C75FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
          <YAxis hide />
          <Tooltip />
          <Area type="monotone" dataKey="sales" stroke="#1C75FF" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const CashflowWidget: FC = () => (
  <div className="bg-white p-8 rounded-2xl w-100">
    <h3 className="text-gray-900 font-semibold text-lg mb-8">Active Cashflow Status</h3>
    <div className="h-64 flex gap-4 items-end">
      {cashflowData.map((data, index) => (
        <div key={data.name} className="flex-1 flex flex-col items-center">
          <div className="flex-1 flex flex-col justify-end w-full gap-1">
            <div className="w-full bg-green-500 rounded-t-sm" style={{ height: `${data.in}%` }} />
            <div className="w-full bg-[#1C75FF] rounded-b-sm" style={{ height: `${data.out}%` }} />
          </div>
          <span className="text-xs text-gray-500 mt-2">{data.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AlertStatusBadge: FC<{ status: string }> = ({ status }) => (
  <div className="bg-[#F8D8DA] text-[#A94442] px-4 py-1.5 rounded-full text-xs font-semibold inline-block">
    {status}
  </div>
);

const InventoryAlertsTable: FC = () => (
  <div className="bg-white p-8 rounded-2xl">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-gray-900 font-semibold text-xl">Low Stock Inventory Alerts</h3>
      <button className="text-[#1C75FF] bg-[#D3EEFD] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-100 transition">
        Prioritized
      </button>
    </div>
    <div className="w-full">
      <div className="grid grid-cols-[50px,1fr,200px,200px,150px] items-center gap-4 py-4 border-b text-sm font-medium text-gray-500">
        <div>Prl.</div>
        <div>Name</div>
        <div>Duration</div>
        <div>Inventory Alerts (s)</div>
        <div>Status</div>
      </div>
      {inventoryAlerts.map((row, index) => (
        <div
          key={row.pri}
          className="grid grid-cols-[50px,1fr,200px,200px,150px] items-center gap-4 py-5 border-b last:border-0 text-sm text-gray-800"
        >
          <div className="flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-red-500 text-white font-semibold flex items-center justify-center">
              {row.pri}
            </span>
          </div>
          <div className="font-medium">{row.name}</div>
          <div>{row.duration}</div>
          <div>{row.alerts}</div>
          <div>
            <AlertStatusBadge status={row.status} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Component ---

const GrocerIQDashboard: FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F6FA] p-6 lg:p-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-400 h-225 bg-white flex shadow-2xl rounded-lg overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-[#F3F6FA]">
          <Header />
          <main className="grow p-8 lg:p-12 space-y-10 overflow-y-auto">
            <h1 className="text-gray-900 font-bold text-3xl">Dashboard</h1>
            <div className="flex gap-10">
              <SalesWidget />
              <CashflowWidget />
            </div>
            <InventoryAlertsTable />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GrocerIQDashboard;