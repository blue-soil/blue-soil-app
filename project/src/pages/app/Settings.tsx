import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Smartphone, PaintBucket, Moon, Sun } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import InputField from '../../components/forms/InputField';
import useAuthStore from '../../store/authStore';
import useThemeStore from '../../store/themeStore';

const tabs = ['Account', 'Notifications', 'Appearance'];

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Account');
  const user = useAuthStore((state) => state.user);
  const { theme, toggleTheme, setTheme } = useThemeStore();
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings and preferences
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
      
      {/* Account Tab */}
      {activeTab === 'Account' && (
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-3xl">
                        {user?.name?.charAt(0) || 'U'}
                      </div>
                    )}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2 w-full"
                  >
                    Change
                  </Button>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Recommended image size: 200x200px. Maximum file size: 2MB.
                  </p>
                </div>
              </div>
              
              <InputField
                label="Full Name"
                type="text"
                leftIcon={<User size={18} />}
                defaultValue={user?.name || ''}
                fullWidth
              />
              
              <InputField
                label="Email Address"
                type="email"
                leftIcon={<Mail size={18} />}
                defaultValue={user?.email || ''}
                fullWidth
              />
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Change Password
                </h3>
                
                <InputField
                  label="Current Password"
                  type="password"
                  leftIcon={<Lock size={18} />}
                  fullWidth
                />
                
                <InputField
                  label="New Password"
                  type="password"
                  leftIcon={<Lock size={18} />}
                  fullWidth
                />
                
                <InputField
                  label="Confirm New Password"
                  type="password"
                  leftIcon={<Lock size={18} />}
                  fullWidth
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
      
      {/* Notifications Tab */}
      {activeTab === 'Notifications' && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Email Notifications
                </h3>
                
                <div className="space-y-4">
                  {['System Alerts', 'Weather Alerts', 'Sensor Readings', 'Community Updates'].map((notification) => (
                    <div key={notification} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bell size={18} className="text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{notification}</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  SMS Notifications
                </h3>
                
                <div className="space-y-4">
                  {['Critical Alerts', 'Irrigation Reminders', 'Equipment Failures'].map((notification) => (
                    <div key={notification} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Smartphone size={18} className="text-gray-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{notification}</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4">
                  <InputField
                    label="Phone Number"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    leftIcon={<Smartphone size={18} />}
                  />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="button">
                  Save Preferences
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {/* Appearance Tab */}
      {activeTab === 'Appearance' && (
        <Card>
          <CardHeader>
            <CardTitle>Appearance Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Theme
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      theme === 'light' 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => setTheme('light')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900 dark:text-white">Light Theme</span>
                      <div className="p-1 rounded-full bg-white text-yellow-500 border border-gray-200">
                        <Sun size={18} />
                      </div>
                    </div>
                    <div className="h-24 bg-white border border-gray-200 rounded-md"></div>
                  </div>
                  
                  <div 
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      theme === 'dark' 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    onClick={() => setTheme('dark')}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900 dark:text-white">Dark Theme</span>
                      <div className="p-1 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                        <Moon size={18} />
                      </div>
                    </div>
                    <div className="h-24 bg-gray-900 border border-gray-700 rounded-md"></div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Accent Color
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Blue', color: 'bg-blue-500' },
                    { name: 'Green', color: 'bg-green-500' },
                    { name: 'Purple', color: 'bg-purple-500' },
                    { name: 'Orange', color: 'bg-orange-500' },
                    { name: 'Pink', color: 'bg-pink-500' },
                  ].map((color) => (
                    <div key={color.name} className="flex flex-col items-center">
                      <button 
                        className={`w-8 h-8 rounded-full ${color.color} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                        aria-label={`Select ${color.name} theme`}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Display Density
                </h3>
                
                <div className="flex items-center space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="density" className="sr-only peer" defaultChecked />
                    <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-4 peer-checked:border-primary-500"></div>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Comfortable</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input type="radio" name="density" className="sr-only peer" />
                    <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 peer-checked:border-4 peer-checked:border-primary-500"></div>
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Compact</span>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button type="button">
                  Apply Changes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Settings;