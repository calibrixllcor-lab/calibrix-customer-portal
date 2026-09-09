import React, { useState } from 'react';
import { Card, Badge } from '../../components/ui';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  assignee: string;
  dueDate: Date;
}

export const AdminWorkInProgress: React.FC = () => {
  const [items] = useState<WorkItem[]>([
    {
      id: '1',
      title: 'Implement batch processing',
      description: 'Add ability to process multiple calibration requests in batch',
      progress: 65,
      status: 'in-progress',
      assignee: 'John Smith',
      dueDate: new Date('2024-02-15')
    },
    {
      id: '2',
      title: 'Upgrade ML models',
      description: 'Update calibration ML models to latest versions',
      progress: 30,
      status: 'in-progress',
      assignee: 'Jane Doe',
      dueDate: new Date('2024-02-20')
    },
    {
      id: '3',
      title: 'Performance optimization',
      description: 'Optimize image processing pipeline for faster calibration',
      progress: 0,
      status: 'todo',
      assignee: 'Bob Johnson',
      dueDate: new Date('2024-03-01')
    },
    {
      id: '4',
      title: 'API documentation',
      description: 'Complete API documentation and swagger setup',
      progress: 100,
      status: 'done',
      assignee: 'Alice Williams',
      dueDate: new Date('2024-01-30')
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done':
        return 'success';
      case 'review':
        return 'warning';
      case 'in-progress':
        return 'info';
      case 'todo':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Work In Progress</h1>

      <div className="space-y-4">
        {items.map(item => (
          <Card key={item.id}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <Badge status={getStatusColor(item.status)}>
                {item.status.toUpperCase()}
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-semibold">{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 bg-blue-600 rounded-full transition-all"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-4 pt-4 border-t">
              <span>Assignee: {item.assignee}</span>
              <span>Due: {item.dueDate.toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
