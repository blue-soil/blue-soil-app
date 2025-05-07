import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import BarChart from '../../components/charts/BarChart';
import SelectField from '../../components/forms/SelectField';
import Button from '../../components/ui/Button';
import MetricCard from '../../components/dashboard/MetricCard';
import { mockWaterUsageReports } from '../../data/mockData';

const regions = ['All Regions', 'North', 'South', 'East'];

const Reports: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  
  // Filter data based on selected region
  const filteredData = selectedRegion === 'All Regions'
    ? mockWaterUsageReports
    : mockWaterUsageReports.filter(report => report.region === selectedRegion);
  
  // Prepare data for monthly chart
  const monthlyData = filteredData
    .filter(report => report.year === 2023)
    .slice(0, 6); // Just first 6 months for simplicity
  
  // Prepare data for year-over-year comparison
  const previousYearData = filteredData
    .filter(report => report.year === 2022)
    .slice(0, 6);
  
  // Calculate totals for summary cards
  const totalWaterUsed = monthlyData.reduce((sum, report) => sum + report.usage, 0);
  
  // Find most efficient region
  const regionEfficiency: Record<string, number> = {};
  mockWaterUsageReports
    .filter(report => report.year === 2023)
    .forEach(report => {
      if (!regionEfficiency[report.region]) {
        regionEfficiency[report.region] = 0;
      }
      regionEfficiency[report.region] += report.usage;
    });
  
  const mostEfficientRegion = Object.entries(regionEfficiency)
    .sort((a, b) => a[1] - b[1])[0][0];
  
  // Find peak usage month
  const monthUsage: Record<string, number> = {};
  monthlyData.forEach(report => {
    if (!monthUsage[report.month]) {
      monthUsage[report.month] = 0;
    }
    monthUsage[report.month] += report.usage;
  });
  
  const peakUsageMonth = Object.entries(monthUsage)
    .sort((a, b) => b[1] - a[1])[0][0];
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Analyze water usage and efficiency metrics
        </p>
      </div>
      
      {/* Filters and Export Options */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <SelectField
          label="Region"
          options={regions.map(region => ({ value: region, label: region }))}
          value={selectedRegion}
          onChange={setSelectedRegion}
          className="w-full sm:w-48"
        />
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            leftIcon={<Download size={18} />}
          >
            Export CSV
          </Button>
          <Button
            variant="outline"
            leftIcon={<FileText size={18} />}
          >
            Download PDF
          </Button>
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard
          title="Total Water Used (This Year)"
          value={`${(totalWaterUsed / 1000).toFixed(1)}k`}
          unit="L"
          icon={<Download size={20} />}
          description="January - June 2023"
          color="primary"
        />
        
        <MetricCard
          title="Most Efficient Region"
          value={mostEfficientRegion}
          icon={<Download size={20} />}
          description="Lowest water usage per acre"
          color="success"
        />
        
        <MetricCard
          title="Peak Usage Month"
          value={peakUsageMonth}
          icon={<Download size={20} />}
          description="2023"
          color="warning"
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Water Usage by Region (2023)</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={monthlyData}
              dataKey="usage"
              xAxisKey="month"
              barColor="#0ea5e9"
              yAxisLabel="Liters"
              name="Water Usage"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Year-over-Year Water Usage Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={monthlyData}
              dataKey="usage"
              xAxisKey="month"
              barColor="#0ea5e9"
              yAxisLabel="Liters"
              name="2023"
              additionalBars={[
                {
                  dataKey: "prevYearUsage",
                  name: "2022",
                  color: "#cbd5e1"
                }
              ]}
            />
            {/* Fill in missing prop data for chart comparison */}
            <script dangerouslySetInnerHTML={{ __html: `
              // This would be done properly with real data
              document.addEventListener('DOMContentLoaded', () => {
                const charts = document.querySelectorAll('.recharts-wrapper');
                if (charts.length > 1) {
                  // Add previous year data to the chart
                  // This is just a placeholder for the UI demo
                }
              });
            `}} />
          </CardContent>
        </Card>
      </div>
      
      {/* Detailed Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Water Usage Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Region</th>
                  <th scope="col" className="px-6 py-3">Month</th>
                  <th scope="col" className="px-6 py-3">Year</th>
                  <th scope="col" className="px-6 py-3">Usage (L)</th>
                  <th scope="col" className="px-6 py-3">Change</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((report, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{report.region}</td>
                    <td className="px-6 py-4">{report.month}</td>
                    <td className="px-6 py-4">{report.year}</td>
                    <td className="px-6 py-4">{report.usage.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className="text-success-600 dark:text-success-400">-5%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;