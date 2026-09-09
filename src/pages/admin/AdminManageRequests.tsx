import React, { useState } from 'react';
import { mockCalibrationRequests } from '../../data/mock';
import { Card, Badge, Button } from '../../components/ui';
import { CalibrationRequest } from '../../types';

export const AdminManageRequests: React.FC = () => {
  const [requests, setRequests] = useState<CalibrationRequest[]>(
    mockCalibrationRequests
  );
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filteredRequests = selectedStatus
    ? requests.filter(r => r.status === selectedStatus)
    : requests;

  const updateStatus = (id: string, newStatus: CalibrationRequest['status']) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === id
          ? { ...req, status: newStatus, updatedAt: new Date() }
          : req
      )
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'info';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'info';
    }
  };

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    inProgress: requests.filter(r => r.status === 'in-progress').length,
    completed: requests.filter(r => r.status === 'completed').length,
    failed: requests.filter(r => r.status === 'failed').length
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Calibration Requests</h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total', value: stats.total, filter: null },
          { label: 'Pending', value: stats.pending, filter: 'pending' },
          { label: 'In Progress', value: stats.inProgress, filter: 'in-progress' },
          { label: 'Completed', value: stats.completed, filter: 'completed' },
          { label: 'Failed', value: stats.failed, filter: 'failed' }
        ].map(stat => (
          <Card
            key={stat.label}
            className={`cursor-pointer ${
              selectedStatus === stat.filter ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => setSelectedStatus(stat.filter)}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {filteredRequests.map(request => (
          <Card key={request.id}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold">Request #{request.id}</h3>
                  <Badge status={getStatusBadge(request.status)}>
                    {request.status.toUpperCase()}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>Vehicle: {request.systemType}</div>
                  <div>Customer: {request.customerId}</div>
                  <div>Created: {request.createdAt.toLocaleDateString()}</div>
                  <div>Updated: {request.updatedAt.toLocaleDateString()}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={request.status}
                  onChange={e => updateStatus(request.id, e.target.value as CalibrationRequest['status'])}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
                <Button variant="secondary" size="sm">
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
