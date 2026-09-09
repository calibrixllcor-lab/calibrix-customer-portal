import React from 'react';
import { Button, Card } from '../components/ui';
import { useAuth } from '../context/AuthContext';
import { useHashRouter } from '../hooks/useHashRouter';

export const HomePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { navigate } = useHashRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calibrix ADAS Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enterprise-grade ADAS calibration management platform
          </p>
          {!isAuthenticated && (
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('login')}
            >
              Get Started
            </Button>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <h3 className="text-lg font-semibold mb-2">Fast Calibration</h3>
            <p className="text-gray-600">
              Advanced algorithms for quick and accurate ADAS system calibration
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Track your calibration progress with live updates and detailed metrics
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">AI Support</h3>
            <p className="text-gray-600">
              Get instant assistance from our AI-powered help system
            </p>
          </Card>
        </div>

        {isAuthenticated && user && (
          <Card>
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}!</h2>
            <p className="text-gray-600 mb-6">
              You are logged in as <strong>{user.email}</strong> ({user.role})
            </p>
            {user.role === 'admin' && (
              <Button
                variant="primary"
                onClick={() => navigate('admin-requests')}
              >
                Go to Admin Dashboard
              </Button>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};
