import React from 'react';
import { MessageSquare } from 'lucide-react';
import Card from '../ui/Card';
import { ForumCategory } from '../../types';

interface CategoryCardProps {
  category: ForumCategory;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <Card 
      className="transition-all duration-200 hover:shadow-md cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
          <MessageSquare size={20} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{category.description}</p>
          
          <div className="flex items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center">
              <MessageSquare size={14} className="mr-1" />
              {category.threadCount} threads
            </span>
            <span className="mx-2">•</span>
            <span>{category.postCount} posts</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;