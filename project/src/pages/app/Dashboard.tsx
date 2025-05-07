import React from 'react';
import { Droplet, Wind, Leaf, BellRing } from 'lucide-react';
import MetricCard from '../../components/dashboard/MetricCard';
import LineChart from '../../components/charts/LineChart';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { mockDailyWaterUsage } from '../../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Overview of your farm's key metrics and insights
        </p>
      </div>
      
      {/* AI Recommendation Banner */}
      <div className="bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 rounded-lg p-4 flex items-center">
        <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 mr-4">
          <BellRing size={20} />
        </div>
        <div>
          <h3 className="font-medium text-primary-800 dark:text-primary-300">AI Irrigation Recommendation</h3>
          <p className="text-sm text-primary-700 dark:text-primary-400 mt-1">
            Based on weather forecast and soil moisture data, we recommend reducing irrigation by 15% for the next 3 days.
          </p>
        </div>
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Soil Moisture"
          value={42}
          unit="%"
          icon={<Droplet size={20} />}
          description="Average across all fields"
          trend={{ direction: 'up', value: '+2% from yesterday' }}
          color="primary"
        />
        
        <MetricCard
          title="Weekly Water Consumption"
          value={18450}
          unit="L"
          icon={<Wind size={20} />}
          description="Total usage this week"
          trend={{ direction: 'down', value: '-5% from last week' }}
          color="secondary"
        />
        
        <MetricCard
          title="Crop Health"
          value="Good"
          icon={<Leaf size={20} />}
          description="AI assessment based on visual data"
          trend={{ direction: 'neutral', value: 'Stable' }}
          color="success"
        />
      </div>
      
      {/* Water Usage Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Water Usage (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            data={mockDailyWaterUsage}
            dataKey="usage"
            xAxisKey="day"
            stroke="#0ea5e9"
            height={300}
            yAxisLabel="Liters"
            name="Water Usage"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;