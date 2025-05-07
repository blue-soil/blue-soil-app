import React from 'react';
import { clsx } from 'clsx';
import Card from '../ui/Card';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    value: string;
  };
  className?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'default';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon,
  description,
  trend,
  className,
  color = 'default',
}) => {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400',
    secondary: 'bg-secondary-50 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400',
    success: 'bg-success-50 text-success-700 dark:bg-success-900/30 dark:text-success-400',
    warning: 'bg-warning-50 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400',
    error: 'bg-error-50 text-error-700 dark:bg-error-900/30 dark:text-error-400',
    default: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  };

  const trendColor = trend
    ? trend.direction === 'up'
      ? 'text-success-600 dark:text-success-400'
      : trend.direction === 'down'
      ? 'text-error-600 dark:text-error-400'
      : 'text-gray-500 dark:text-gray-400'
    : '';

  return (
    <Card className={clsx('overflow-hidden', className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {value}
              {unit && <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">{unit}</span>}
            </p>
            {trend && (
              <span className={clsx('ml-2 text-sm font-medium', trendColor)}>
                {trend.value}
              </span>
            )}
          </div>
          {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
        </div>
        <div className={clsx('p-2 rounded-md', colorClasses[color])}>{icon}</div>
      </div>
    </Card>
  );
};

export default MetricCard;