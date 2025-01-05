import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, TrendingUp } from 'lucide-react';

const PredictionsPage = () => {
  const predictionData = {
    trends: [
      { month: 'Jan', antiquites: 85, art: 90, bijoux: 95 },
      { month: 'Fév', antiquites: 88, art: 92, bijoux: 93 },
      { month: 'Mar', antiquites: 90, art: 95, bijoux: 94 },
      { month: 'Avr', antiquites: 92, art: 93, bijoux: 96 }
    ],
    recommendations: [
      {
        category: 'Antiquités',
        trend: 'hausse',
        confidence: 85,
        advice: 'Moment favorable pour l\'achat'
      },
      {
        category: 'Art Moderne',
        trend: 'stable',
        confidence: 92,
        advice: 'Marché stable'
      }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Prédictions</h2>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Download className="h-5 w-5" />
          <span>Télécharger le Rapport</span>
        </button>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-medium">Tendances des Prix</h3>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={predictionData.trends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="antiquites" stroke="#3B82F6" name="Antiquités" />
                <Line type="monotone" dataKey="art" stroke="#10B981" name="Art" />
                <Line type="monotone" dataKey="bijoux" stroke="#F59E0B" name="Bijoux" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {predictionData.recommendations.map((rec, index) => (
          <Card key={index}>
            <CardHeader>
              <h3 className="text-lg font-medium">{rec.category}</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span className="font-medium">Tendance: {rec.trend}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm">Confiance: {rec.confidence}%</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: `${rec.confidence}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{rec.advice}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PredictionsPage;