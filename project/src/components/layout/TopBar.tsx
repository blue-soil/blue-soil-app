import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import useThemeStore from '../../store/themeStore';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuClick }) => {
  const user = useAuthStore((state) => state.user);
  const { theme, toggleTheme } = useThemeStore();
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Menu size={24} />
        </button>
        
        {/* Right side buttons and user info */}
        <div className="flex items-center ml-auto">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          {/* User info */}
          <div className="flex items-center ml-4">
            <div className="relative">
              <div className="flex items-center">
                {/* User avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                      {user?.name?.charAt(0) || 'U'}
                    </div>
                  )}
                </div>
                
                {/* User info */}
                <div className="hidden md:flex md:flex-col md:ml-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {user?.name || 'User'}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Regular User – Farmer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;