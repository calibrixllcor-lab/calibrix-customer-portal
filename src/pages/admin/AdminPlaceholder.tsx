import React from 'react';
import { Card, Button } from '../../components/ui';
import { useHashRouter } from '../../hooks/useHashRouter';

export const AdminPlaceholder: React.FC = () => {
  const { navigate } = useHashRouter();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Welcome to Admin Panel</h2>
        <p className="text-gray-600 mb-6">
          Use the navigation menu to access different admin features including request management,
          ADAS recommendations, and system architecture monitoring.
        </p>
        <div className="space-y-3">
          <Button onClick={() => navigate('admin-requests')} className="w-full">
            Manage Requests
          </Button>
          <Button onClick={() => navigate('admin-recs')} variant="secondary" className="w-full">
            View ADAS Recommendations
          </Button>
          <Button onClick={() => navigate('admin-system')} variant="secondary" className="w-full">
            System Architecture
          </Button>
        </div>
      </Card>
    </div>
  );
};
