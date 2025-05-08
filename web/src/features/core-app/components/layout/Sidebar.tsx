import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { 
  Home, 
  Users, 
  MessageSquare, 
  Activity, 
  BarChart2, 
  Droplet, 
  Settings, 
  LogOut,
  X 
} from 'lucide-react';
import useAuthStore from '../../store/authStore';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const links = [
    { to: '/app/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    { to: '/app/farmers', icon: <Users size={20} />, label: 'Farmers' },
    { to: '/app/forum', icon: <MessageSquare size={20} />, label: 'Forum' },
    { to: '/app/iot', icon: <Activity size={20} />, label: 'IoT' },
    { to: '/app/reports', icon: <BarChart2 size={20} />, label: 'Reports' },
    { to: '/app/water-quality', icon: <Droplet size={20} />, label: 'Water Quality' },
    { to: '/app/settings', icon: <Settings size={20} />, label: 'Settings' }
  ];
  
  return (
    <aside 
      className={clsx(
        "fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out lg:static lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* Logo and close button (mobile only) */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <span className="inline-block w-8 h-8 mr-2 rounded-md bg-primary-600 text-white flex items-center justify-center">
            <Droplet size={18} />
          </span>
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            Blue Soil
          </span>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => clsx(
                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-100" 
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                )}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Logout */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="flex w-full items-center px-3 py-2 text-sm font-medium text-error-600 dark:text-error-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;