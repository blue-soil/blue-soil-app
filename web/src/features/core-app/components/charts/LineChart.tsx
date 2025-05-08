import React from 'react';
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface LineChartProps {
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  stroke?: string;
  height?: number;
  yAxisLabel?: string;
  xAxisLabel?: string;
  name?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  customTooltip?: React.FC<any>;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  dataKey,
  xAxisKey = 'name',
  stroke = '#0ea5e9',
  height = 300,
  yAxisLabel,
  xAxisLabel,
  name,
  showLegend = true,
  showGrid = true,
  customTooltip,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart
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
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          strokeWidth={2}
          dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
          activeDot={{ r: 6, strokeWidth: 2 }}
          name={name || dataKey}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;