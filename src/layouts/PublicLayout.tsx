import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useHashRouter } from '../hooks/useHashRouter';
import { Button } from '../components/ui';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const { navigate } = useHashRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-2xl font-bold text-blue-600 cursor-pointer"
              onClick={() => navigate('home')}
            >
              Calibrix
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Button
                    variant="secondary"
                    onClick={() => navigate('home')}
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      logout();
                      navigate('home');
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => navigate('login')}
                >
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
};
