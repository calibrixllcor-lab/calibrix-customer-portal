import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useHashRouter } from '../hooks/useHashRouter';
import { Button } from '../components/ui';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const { navigate, hash } = useHashRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isAdmin = user?.role === 'admin';
  const isActive = (path: string) => hash === path;

  const menuItems = [
    { path: 'home', label: 'Home', icon: '🏠' },
    ...(isAdmin ? [
      { path: 'admin-dashboard', label: 'Dashboard', icon: '📊' },
      { path: 'admin-requests', label: 'Requests', icon: '📋' },
      { path: 'admin-recs', label: 'Recommendations', icon: '💡' },
      { path: 'admin-system', label: 'System', icon: '⚙️' },
      { path: 'admin-wip', label: 'Work In Progress', icon: '⏳' }
    ] : []),
    { path: 'chat', label: 'AI Assistant', icon: '🤖' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-gray-900 text-white transition-all duration-300 overflow-y-auto`}
      >
        <div className="p-4">
          <div className="text-2xl font-bold mb-8">
            {sidebarOpen ? 'Calibrix' : 'C'}
          </div>
          <nav className="space-y-2">
            {menuItems.map(item => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full text-gray-400 hover:text-white py-2 text-center text-sm"
          >
            {sidebarOpen ? '«' : '»'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {menuItems.find(item => isActive(item.path))?.label || 'Portal'}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user?.email}</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  logout();
                  navigate('home');
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
