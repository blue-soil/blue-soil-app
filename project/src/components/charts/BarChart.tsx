import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface BarChartProps {
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  barColor?: string;
  height?: number;
  yAxisLabel?: string;
  xAxisLabel?: string;
  name?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  customTooltip?: React.FC<any>;
  additionalBars?: Array<{
    dataKey: string;
    name?: string;
    color: string;
  }>;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  dataKey,
  xAxisKey = 'name',
  barColor = '#0ea5e9',
  height = 300,
  yAxisLabel,
  xAxisLabel,
  name,
  showLegend = true,
  showGrid = true,
  customTooltip,
  additionalBars = [],
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />}
        <XAxis 
          dataKey={xAxisKey} 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          axisLine={{ stroke: '#d1d5db' }}
          tickLine={{ stroke: '#d1d5db' }}
          label={xAxisLabel ? { value: xAxisLabel, position: 'insideBottom', offset: -10 } : undefined}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          axisLine={{ stroke: '#d1d5db' }}
          tickLine={{ stroke: '#d1d5db' }}
          label={yAxisLabel ? { value: yAxisLabel, angle: -90, position: 'insideLeft' } : undefined}
        />
        <Tooltip content={customTooltip} />
        {showLegend && <Legend />}
        <Bar
          dataKey={dataKey}
          fill={barColor}
          radius={[4, 4, 0, 0]}
          name={name || dataKey}
        />
        {additionalBars.map((bar, index) => (
          <Bar
            key={index}
            dataKey={bar.dataKey}
            fill={bar.color}
            radius={[4, 4, 0, 0]}
            name={bar.name || bar.dataKey}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;