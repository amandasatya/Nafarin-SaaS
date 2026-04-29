"use client";
import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, MdInventory2, MdMonetizationOn, 
  MdEventNote, MdSettings, MdPointOfSale 
} from 'react-icons/md';

const Sidebar: FC = () => {
  const pathname = usePathname(); // Detects which page you are on

  const menuItems = [
    { name: 'Dashboard', icon: MdDashboard, path: '/dashboard' },
    { name: 'Sales', icon: MdPointOfSale, path: '/sales' },
    { name: 'Inventory', icon: MdInventory2, path: '/inventory' },
    { name: 'Cashflow', icon: MdMonetizationOn, path: '/cashflow' },
    { name: 'AI Insights', icon: MdEventNote, path: '/aiInsight' },
  ];

  return (
    <div className="w-64 bg-[#0A1A3C] p-6 flex flex-col h-full rounded-l-lg">
      <div className="flex items-center gap-2 mb-10 text-white font-bold text-2xl">
        <div className="bg-[#1C75FF] p-2 rounded-xl">
          <MdInventory2 size={24} className="transform rotate-[-20deg]" />
        </div>
        Grocer<span className="text-[#1C75FF]">IQ</span>
      </div>
      
      <nav className="grow">
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg text-sm transition ${
                    isActive 
                      ? 'bg-[#142A57] text-[#1C75FF] font-medium border-l-4 border-[#1C75FF]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <Link href="/settings" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white text-sm">
          <MdSettings size={20} /> Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;