"use client";
import React, { FC, useState } from 'react';
import { 
  MdPersonOutline, MdLockOutline, MdNotificationsNone, 
  MdPalette, MdCloudQueue, MdSave, MdChevronRight 
} from 'react-icons/md';

// --- Sub-components for Organization ---
const SettingSection: FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      {children}
    </div>
  </div>
);

const SettingItem: FC<{ 
  icon: React.ElementType; 
  label: string; 
  description: string; 
  action?: React.ReactNode 
}> = ({ icon: Icon, label, description, action }) => (
  <div className="flex items-center justify-between p-6 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-50 text-[#1C75FF] rounded-2xl">
        <Icon size={24} />
      </div>
      <div>
        <p className="font-bold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <div>
      {action ? action : <MdChevronRight size={24} className="text-gray-300" />}
    </div>
  </div>
);

const SettingsPage: FC = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-8 lg:p-12 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Settings</h1>
          <p className="text-gray-500 mt-1">Manage your account and app preferences</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1C75FF] hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold transition shadow-lg shadow-blue-100">
          <MdSave size={20} />
          Save Changes
        </button>
      </div>

      {/* Account Settings */}
      <SettingSection title="Account">
        <SettingItem 
          icon={MdPersonOutline} 
          label="Profile Information" 
          description="Johnn-Samsklina • johnn.s@groceriq.com" 
        />
        <SettingItem 
          icon={MdLockOutline} 
          label="Security & Password" 
          description="Last changed 3 months ago" 
        />
      </SettingSection>

      {/* Preferences Settings */}
      <SettingSection title="Preferences">
        <SettingItem 
          icon={MdNotificationsNone} 
          label="Push Notifications" 
          description="Alerts for low stock and waste analysis" 
          action={
            <button 
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors relative ${notifications ? 'bg-[#1C75FF]' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-1 bg-white w-4 h-4 rounded-full transition-all ${notifications ? 'right-1' : 'left-1'}`} />
            </button>
          }
        />
        <SettingItem 
          icon={MdPalette} 
          label="Appearance" 
          description="Switch between Light and Dark mode" 
          action={
            <select className="bg-gray-100 border-none rounded-lg text-sm font-bold px-3 py-1 outline-none">
              <option>Light Mode</option>
              <option>Dark Mode</option>
              <option>System Default</option>
            </select>
          }
        />
      </SettingSection>

      {/* System Settings */}
      <SettingSection title="System">
        <SettingItem 
          icon={MdCloudQueue} 
          label="Cloud Sync" 
          description="Last synced: Today at 4:10 PM" 
        />
      </SettingSection>

      <div className="mt-10 text-center">
        <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">GrocerIQ Version 2.4.0-Stable</p>
      </div>
    </div>
  );
};

export default SettingsPage;