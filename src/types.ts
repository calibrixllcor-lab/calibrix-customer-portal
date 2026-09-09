export interface CalibrationRequest {
  id: string;
  customerId: string;
  vehicleId: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
  systemType: string;
}

export interface ADASRecommendation {
  id: string;
  requestId: string;
  type: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  estimatedTime: number;
  completed: boolean;
}

export interface SystemArchitecture {
  id: string;
  name: string;
  version: string;
  components: SystemComponent[];
  status: 'operational' | 'maintenance' | 'degraded';
}

export interface SystemComponent {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'error';
  metrics?: Record<string, number>;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
