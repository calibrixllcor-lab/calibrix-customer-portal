import React from 'react';
import { mockSystemArchitecture } from '../../data/mock';
import { Card, Badge } from '../../components/ui';

export const AdminSystemArch: React.FC = () => {
  const system = mockSystemArchitecture;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'success';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'info';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{system.name}</h1>
      <p className="text-gray-600 mb-6">Version {system.version}</p>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">System Status</h2>
          <Badge status={getStatusBadge(system.status)}>
            {system.status.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {system.components.map(component => (
          <Card key={component.id}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">{component.name}</h3>
              <Badge status={getStatusBadge(component.status)}>
                {component.status.toUpperCase()}
              </Badge>
            </div>
            {component.metrics && (
              <div className="space-y-3">
                {Object.entries(component.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 capitalize">{key}</span>
                      <span className="font-semibold">{value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          value > 80 ? 'bg-red-500' : value > 60 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
