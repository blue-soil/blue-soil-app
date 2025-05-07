import React, { useState } from 'react';
import { Droplet, ThermometerSnowflake, Umbrella, ToggleLeft, Plus } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import MetricCard from '../../components/dashboard/MetricCard';
import SelectField from '../../components/forms/SelectField';
import Button from '../../components/ui/Button';
import { mockFields } from '../../data/mockData';

const Farmers: React.FC = () => {
  const [selectedFieldId, setSelectedFieldId] = useState(mockFields[0].id);
  const [irrigationEnabled, setIrrigationEnabled] = useState(false);
  const [showAddFarm, setShowAddFarm] = useState(false);
  
  const selectedField = mockFields.find((field) => field.id === selectedFieldId) || mockFields[0];
  
  const fieldOptions = mockFields.map((field) => ({
    value: field.id,
    label: field.name,
  }));
  
  const handleFieldChange = (value: string) => {
    setSelectedFieldId(value);
  };
  
  const toggleIrrigation = () => {
    setIrrigationEnabled(!irrigationEnabled);
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Fields</h1>
          <p className="text-gray-500 mt-1">
            Monitor and manage your fields
          </p>
        </div>
        <Button
          leftIcon={<Plus size={18} />}
          className="bg-black text-white hover:bg-gray-900"
          onClick={() => setShowAddFarm(true)}
        >
          Add Farm
        </Button>
      </div>
      
      {/* Field Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <SelectField
          label="Select Field"
          options={fieldOptions}
          value={selectedFieldId}
          onChange={handleFieldChange}
          className="w-full sm:max-w-xs"
        />
      </div>
      
      {/* Field Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle>Field Summary: {selectedField.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-medium">{selectedField.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Size</p>
                <p className="font-medium">{selectedField.size} acres</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Crop</p>
                <p className="font-medium">{selectedField.crop}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard
          title="Soil Moisture"
          value={selectedField.soilMoisture}
          unit="%"
          icon={<Droplet size={20} />}
          description="Current reading"
          color="primary"
        />
        
        <MetricCard
          title="Temperature"
          value={selectedField.temperature}
          unit="°C"
          icon={<ThermometerSnowflake size={20} />}
          description="Current reading"
          color="secondary"
        />
        
        <MetricCard
          title="Humidity"
          value={selectedField.humidity}
          unit="%"
          icon={<Umbrella size={20} />}
          description="Current reading"
          color="warning"
        />
      </div>
      
      {/* AI Recommendation and Irrigation Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Irrigation Recommendation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-secondary-50 dark:bg-secondary-900/30 rounded-lg">
              <p className="text-secondary-800 dark:text-secondary-300">
                <strong>Recommendation:</strong> Based on the current soil moisture level and weather forecast, we recommend 
                irrigating for 25 minutes at 7:00 AM tomorrow.
              </p>
              <p className="text-sm text-secondary-700 dark:text-secondary-400 mt-2">
                This will maintain optimal soil moisture while conserving water.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Irrigation Control</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-center justify-between w-full mb-4">
                <span className="text-gray-700 dark:text-gray-300">Irrigation System</span>
                <span className={`text-sm font-medium ${irrigationEnabled ? 'text-success-600 dark:text-success-400' : 'text-gray-500 dark:text-gray-400'}`}>
                  {irrigationEnabled ? 'Active' : 'Inactive'}
                </span>
              </div>
              <Button
                onClick={toggleIrrigation}
                variant={irrigationEnabled ? 'danger' : 'primary'}
                size="lg"
                leftIcon={<ToggleLeft size={20} />}
              >
                {irrigationEnabled ? 'Turn Off Irrigation' : 'Turn On Irrigation'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showAddFarm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Farm</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                // Here you would handle adding the farm
                setShowAddFarm(false);
              }}
              className="space-y-4"
            >
              <input className="w-full border rounded px-3 py-2" placeholder="Farm Name" required />
              <input className="w-full border rounded px-3 py-2" placeholder="Location" required />
              <input className="w-full border rounded px-3 py-2" placeholder="Size (acres)" required />
              <input className="w-full border rounded px-3 py-2" placeholder="Crop" required />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded bg-gray-200"
                  onClick={() => setShowAddFarm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-black text-white"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Farmers;