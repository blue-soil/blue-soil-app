import React, { useState } from 'react';
import { Thermometer, Droplet, Sparkles, Wind } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import MetricCard from '../../components/dashboard/MetricCard';
import Button from '../../components/ui/Button';
import { mockDevices } from '../../data/mockData';

const tabs = ['Overview', 'Devices', 'Alerts'];

const IoT: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">IoT Monitoring</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Monitor and manage your IoT devices and sensors
        </p>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Overview Tab Content */}
      {activeTab === 'Overview' && (
        <div className="space-y-6">
          {/* Sensor Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Temperature"
              value={24}
              unit="°C"
              icon={<Thermometer size={20} />}
              description="Average across all sensors"
              color="warning"
            />
            
            <MetricCard
              title="Humidity"
              value={65}
              unit="%"
              icon={<Droplet size={20} />}
              description="Average across all sensors"
              color="primary"
            />
            
            <MetricCard
              title="Light"
              value={12000}
              unit="lux"
              icon={<Sparkles size={20} />}
              description="Average across all sensors"
              color="secondary"
            />
            
            <MetricCard
              title="Wind Speed"
              value={8}
              unit="km/h"
              icon={<Wind size={20} />}
              description="Average across all sensors"
              color="success"
            />
          </div>
          
          {/* Real-time Visualizations */}
          <Card>
            <CardHeader>
              <CardTitle>Real-time Sensor Data</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for real-time data visualization */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Real-time sensor data visualization would be displayed here.
                  <br />
                  <span className="text-sm">
                    Connects to your IoT devices for live monitoring.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Devices Tab Content */}
      {activeTab === 'Devices' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Connected Devices
            </h2>
            <Button size="sm">Add Device</Button>
          </div>
          
          {/* Devices List */}
          <div className="space-y-4">
            {mockDevices.map((device) => (
              <Card key={device.id} className="hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center p-4">
                  <div className={`p-2 rounded-full mr-4 ${
                    device.status === 'online' 
                      ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400' 
                      : device.status === 'warning'
                      ? 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'
                      : 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400'
                  }`}>
                    {device.type === 'moisture' && <Droplet size={20} />}
                    {device.type === 'temperature' && <Thermometer size={20} />}
                    {device.type === 'humidity' && <Droplet size={20} />}
                    {device.type === 'light' && <Sparkles size={20} />}
                    {device.type === 'wind' && <Wind size={20} />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-900 dark:text-white">{device.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        device.status === 'online' 
                          ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400' 
                          : device.status === 'warning'
                          ? 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'
                          : 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400'
                      }`}>
                        {device.status}
                      </span>
                    </div>
                    
                    <div className="mt-1 flex items-center text-sm">
                      <span className="text-gray-500 dark:text-gray-400">
                        Last reading: {device.lastReading} {device.unit}
                      </span>
                      <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Battery: {device.battery}%
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="ml-4">
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {/* Alerts Tab Content */}
      {activeTab === 'Alerts' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Recent Alerts
            </h2>
            <Button size="sm" variant="outline">
              Configure Alerts
            </Button>
          </div>
          
          {/* Alerts List */}
          <div className="space-y-4">
            {/* Example alerts */}
            <Card className="border-l-4 border-l-warning-500">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Low Battery Warning
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Today, 10:23 AM
                  </span>
                </div>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Wind Sensor A1 battery level is at 20%. Please replace batteries soon.
                </p>
              </div>
            </Card>
            
            <Card className="border-l-4 border-l-error-500">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Device Offline
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Yesterday, 4:17 PM
                  </span>
                </div>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Wind Sensor A1 is offline. Please check the device.
                </p>
              </div>
            </Card>
            
            <Card className="border-l-4 border-l-warning-500">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Threshold Alert
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Yesterday, 2:05 PM
                  </span>
                </div>
                <p className="mt-1 text-gray-600 dark:text-gray-300">
                  Moisture level in North Field dropped below 35%. Consider irrigation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default IoT;