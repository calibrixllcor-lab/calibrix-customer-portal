import React, { useState } from 'react';
import { mockADASRecommendations } from '../../data/mock';
import { Card, Badge, Button } from '../../components/ui';
import { ADASRecommendation } from '../../types';

export const AdminADASRecs: React.FC = () => {
  const [recommendations, setRecommendations] = useState<ADASRecommendation[]>(
    mockADASRecommendations
  );

  const toggleCompletion = (id: string) => {
    setRecommendations(prev =>
      prev.map(rec =>
        rec.id === id ? { ...rec, completed: !rec.completed } : rec
      )
    );
  };

  const getPriorityBadgeStatus = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'info';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">ADAS Recommendations</h1>
      
      <div className="space-y-4">
        {recommendations.map(rec => (
          <Card key={rec.id}>
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{rec.type}</h3>
                  <Badge status={getPriorityBadgeStatus(rec.priority)}>
                    {rec.priority.toUpperCase()}
                  </Badge>
                  {rec.completed && (
                    <Badge status="success">COMPLETED</Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{rec.description}</p>
                <div className="text-sm text-gray-500">
                  Estimated Time: {rec.estimatedTime} minutes
                </div>
              </div>
              <Button
                variant={rec.completed ? 'secondary' : 'primary'}
                onClick={() => toggleCompletion(rec.id)}
              >
                {rec.completed ? 'Undo' : 'Mark Complete'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
