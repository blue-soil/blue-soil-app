import React from 'react';
import { StatisticItem } from '@/features/landing/types';
import { Droplets, Users, Globe } from 'lucide-react';

const statisticsData: StatisticItem[] = [
  {
    value: '143,524',
    label: 'Water projects funded',
    icon: <Droplets className="h-8 w-8 text-olive-700" />,
  },
  {
    value: '14,553,634',
    label: 'People will be served',
    icon: <Users className="h-8 w-8 text-olive-700" />,
  },
  {
    value: '45',
    label: 'Countries',
    icon: <Globe className="h-8 w-8 text-olive-700" />,
  },
];

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            Together we can change the world of people without<br />
            basic access to clean and safe drinking water.
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statisticsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold mb-1 flex items-center">
                  {stat.value}
                  <div className="inline-block w-2 h-2 bg-yellow-400 rounded-full ml-2"></div>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;