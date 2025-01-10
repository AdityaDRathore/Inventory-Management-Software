import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { icon: '👤', label: 'Wholesaler', path: '/wholesaler' },
    { icon: '👥', label: 'Customer', path: '/customer' },
    { icon: '🛒', label: 'Purchase', path: '/purchase' },
    { icon: '💰', label: 'Sales', path: '/sales' },
    { icon: '📦', label: 'Inventory', path: '/inventory' },
    { icon: '💵', label: 'Payment', path: '/payment' },
  ];

  return (
    <div className="fixed left-0 h-screen w-64 bg-white shadow-lg">
      {/* Brand */}
      <div className="p-6">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <p className="text-sm text-gray-600">Web App</p>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-0 w-full p-6 border-t">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            RC
          </div>
          <div className="ml-3">
            <p className="font-medium">Riley Carter</p>
            <p className="text-sm text-gray-600">riley@email.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;