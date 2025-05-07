import React from 'react';
import { AlertTriangle, Droplet, Gauge, Thermometer } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import MetricCard from '../../components/dashboard/MetricCard';
import LineChart from '../../components/charts/LineChart';
import { mockWaterQuality } from '../../data/mockData';

const WaterQuality: React.FC = () => {
  // Get the latest water quality reading
  const latestReading = mockWaterQuality[mockWaterQuality.length - 1];
  
  // Check if any metrics are outside ideal range
  const phOutsideIdeal = latestReading.ph < 6.5 || latestReading.ph > 7.2;
  const salinityOutsideIdeal = latestReading.salinity > 600;
  const turbidityOutsideIdeal = latestReading.turbidity > 15;
  
  const hasWarning = phOutsideIdeal || salinityOutsideIdeal || turbidityOutsideIdeal;
  
  // Prepare data for charts
  const chartData = mockWaterQuality.map(data => ({
    date: data.date.split('-')[2], // Just show day for simplicity
    ph: data.ph,
    salinity: data.salinity,
    turbidity: data.turbidity,
  }));
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Water Quality</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Monitor water quality metrics across your farm
        </p>
      </div>
      
      {/* Warning Banner (if needed) */}
      {hasWarning && (
        <div className="bg-warning-50 dark:bg-warning-900/30 border border-warning-100 dark:border-warning-800 rounded-lg p-4 flex items-start">
          <div className="p-2 rounded-full bg-warning-100 dark:bg-warning-800 text-warning-600 dark:text-warning-400 mr-4 mt-0.5 flex-shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h3 className="font-medium text-warning-800 dark:text-warning-300">Water Quality Alert</h3>
            <p className="text-sm text-warning-700 dark:text-warning-400 mt-1">
              One or more water quality metrics are outside the ideal range. Please check the details below.
            </p>
          </div>
        </div>
      )}
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard
          title="pH Level"
          value={latestReading.ph}
          icon={<Droplet size={20} />}
          description={`Ideal range: 6.5-7.2 ${phOutsideIdeal ? '(Outside ideal range)' : ''}`}
          color={phOutsideIdeal ? 'warning' : 'primary'}
        />
        
        <MetricCard
          title="Salinity"
          value={latestReading.salinity}
          unit="ppm"
          icon={<Gauge size={20} />}
          description={`Ideal range: <600 ppm ${salinityOutsideIdeal ? '(Outside ideal range)' : ''}`}
          color={salinityOutsideIdeal ? 'warning' : 'secondary'}
        />
        
        <MetricCard
          title="Turbidity"
          value={latestReading.turbidity}
          unit="NTU"
          icon={<Thermometer size={20} />}
          description={`Ideal range: <15 NTU ${turbidityOutsideIdeal ? '(Outside ideal range)' : ''}`}
          color={turbidityOutsideIdeal ? 'warning' : 'success'}
        />
      </div>
      
      {/* Historical Charts */}
      <Card>
        <CardHeader>
          <CardTitle>pH Level (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            data={chartData}
            dataKey="ph"
            xAxisKey="date"
            stroke="#0ea5e9"
            yAxisLabel="pH"
            name="pH Level"
          />
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Salinity (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={chartData}
              dataKey="salinity"
              xAxisKey="date"
              stroke="#10b981"
              yAxisLabel="ppm"
              name="Salinity"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Turbidity (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={chartData}
              dataKey="turbidity"
              xAxisKey="date"
              stroke="#f97316"
              yAxisLabel="NTU"
              name="Turbidity"
            />
          </CardContent>
        </Card>
      </div>
      
      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          {phOutsideIdeal && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 dark:text-white">pH Level</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {latestReading.ph < 6.5 
                  ? 'Water pH is too acidic. Consider adding lime or other alkaline amendments to increase pH.'
                  : 'Water pH is too alkaline. Consider adding sulfur or other acidifying amendments to decrease pH.'}
              </p>
            </div>
          )}
          
          {salinityOutsideIdeal && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 dark:text-white">Salinity</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Water salinity is higher than recommended. This may affect salt-sensitive crops. Consider increasing 
                irrigation volume to flush excess salts or implementing a water treatment solution.
              </p>
            </div>
          )}
          
          {turbidityOutsideIdeal && (
            <div className="mb-4">
              <h3 className="font-medium text-gray-900 dark:text-white">Turbidity</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Water turbidity is higher than recommended. High turbidity may indicate sediment runoff or algal growth. 
                Consider implementing sediment barriers or water filtration systems.
              </p>
            </div>
          )}
          
          {!hasWarning && (
            <p className="text-gray-600 dark:text-gray-300">
              All water quality metrics are within ideal ranges. Continue with current water management practices.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterQuality;