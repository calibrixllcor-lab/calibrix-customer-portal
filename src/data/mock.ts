import { CalibrationRequest, ADASRecommendation, SystemArchitecture } from '../types';

export const mockCalibrationRequests: CalibrationRequest[] = [
  {
    id: '1',
    customerId: 'cust-001',
    vehicleId: 'v-001',
    status: 'in-progress',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    systemType: 'Tesla Model S'
  },
  {
    id: '2',
    customerId: 'cust-002',
    vehicleId: 'v-002',
    status: 'pending',
    createdAt: new Date('2024-01-18'),
    updatedAt: new Date('2024-01-18'),
    systemType: 'BMW X5'
  },
  {
    id: '3',
    customerId: 'cust-001',
    vehicleId: 'v-003',
    status: 'completed',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-17'),
    systemType: 'Mercedes-Benz E-Class'
  }
];

export const mockADASRecommendations: ADASRecommendation[] = [
  {
    id: 'rec-1',
    requestId: '1',
    type: 'Camera Calibration',
    priority: 'high',
    description: 'Front camera needs recalibration for lane detection',
    estimatedTime: 45,
    completed: false
  },
  {
    id: 'rec-2',
    requestId: '1',
    type: 'Radar Alignment',
    priority: 'medium',
    description: 'Radar sensor alignment adjustment recommended',
    estimatedTime: 30,
    completed: true
  },
  {
    id: 'rec-3',
    requestId: '2',
    type: 'LiDAR Calibration',
    priority: 'high',
    description: 'LiDAR unit requires factory recalibration',
    estimatedTime: 60,
    completed: false
  }
];

export const mockSystemArchitecture: SystemArchitecture = {
  id: 'sys-001',
  name: 'ADAS Calibration Platform v2.1',
  version: '2.1.0',
  status: 'operational',
  components: [
    {
      id: 'comp-1',
      name: 'Image Processing Engine',
      status: 'healthy',
      metrics: {
        cpuUsage: 45,
        memoryUsage: 62,
        throughput: 1200
      }
    },
    {
      id: 'comp-2',
      name: 'Sensor Fusion Module',
      status: 'healthy',
      metrics: {
        cpuUsage: 38,
        memoryUsage: 54,
        throughput: 950
      }
    },
    {
      id: 'comp-3',
      name: 'ML Model Server',
      status: 'healthy',
      metrics: {
        cpuUsage: 72,
        memoryUsage: 81,
        throughput: 450
      }
    },
    {
      id: 'comp-4',
      name: 'Database Cluster',
      status: 'warning',
      metrics: {
        cpuUsage: 65,
        memoryUsage: 88,
        throughput: 2100
      }
    }
  ]
};
