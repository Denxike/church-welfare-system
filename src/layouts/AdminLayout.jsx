import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, Settings, Menu, X, Bell } from 'lucide-react';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Member Ledger', path: '/ledger', icon: <Users size={20} /> },
    { name: 'Event Billing', path: '/events', icon: <CalendarDays size={20} /> },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 font-sans">
      {/* Collapsible Sidebar */}
      <aside className={`bg-blue-900 text-white flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-5 flex items-center justify-between border-b border-blue-800">
          {sidebarOpen ? (
            <div>
              <h2 className="text-xl font-bold tracking-wide">WelfareAdmin</h2>
              <p className="text-blue-300 text-xs mt-0.5">Church Management</p>
            </div>
          ) : (
            <span className="text-xl font-bold">WA</span>
          )}
        </div>
        
        <nav className="flex-1 px-3 mt-6 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                title={!sidebarOpen ? item.name : ''}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-blue-800 text-white font-medium shadow-sm' 
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                {sidebarOpen && <span className="text-sm">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-blue-800">
          <button className="flex items-center gap-3 px-3 py-3 text-blue-200 hover:text-white transition w-full rounded-xl hover:bg-blue-800/50">
            <Settings size={20} className="shrink-0" />
            {sidebarOpen && <span className="text-sm">Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header with Sidebar Toggle */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 shadow-xs">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            title="Toggle Menu"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">Committee Admin</span>
            <div className="w-9 h-9 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center text-sm shadow-inner">
              CA
            </div>
          </div>
        </header>

        {/* Dynamic Page Container */}
        <main className="flex-1 overflow-y-auto bg-gray-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}