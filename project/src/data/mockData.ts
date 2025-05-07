import { 
  User, Field, Device, WaterQuality, 
  ForumCategory, ForumThread, WaterUsageReport 
} from '../types';

// Mock User Data
export const mockUser: User = {
  id: '1',
  name: 'John Farmer',
  email: 'john@bluesoil.com',
  role: 'farmer',
  avatar: 'https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=100'
};

// Mock Fields Data
export const mockFields: Field[] = [
  {
    id: '1',
    name: 'North Field',
    location: 'Sector A',
    size: 25,
    crop: 'Corn',
    soilMoisture: 42,
    temperature: 24,
    humidity: 65,
  },
  {
    id: '2',
    name: 'South Field',
    location: 'Sector B',
    size: 30,
    crop: 'Wheat',
    soilMoisture: 38,
    temperature: 26,
    humidity: 60,
  },
  {
    id: '3',
    name: 'East Field',
    location: 'Sector C',
    size: 20,
    crop: 'Soybeans',
    soilMoisture: 45,
    temperature: 25,
    humidity: 68,
  },
];

// Mock IoT Devices
export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Moisture Sensor A1',
    type: 'moisture',
    status: 'online',
    battery: 85,
    lastReading: 42,
    unit: '%',
    fieldId: '1',
  },
  {
    id: '2',
    name: 'Temperature Sensor A1',
    type: 'temperature',
    status: 'online',
    battery: 90,
    lastReading: 24,
    unit: '°C',
    fieldId: '1',
  },
  {
    id: '3',
    name: 'Humidity Sensor A1',
    type: 'humidity',
    status: 'online',
    battery: 75,
    lastReading: 65,
    unit: '%',
    fieldId: '1',
  },
  {
    id: '4',
    name: 'Light Sensor A1',
    type: 'light',
    status: 'warning',
    battery: 45,
    lastReading: 12000,
    unit: 'lux',
    fieldId: '1',
  },
  {
    id: '5',
    name: 'Wind Sensor A1',
    type: 'wind',
    status: 'offline',
    battery: 20,
    lastReading: 8,
    unit: 'km/h',
    fieldId: '1',
  },
];

// Mock Water Quality Data
export const mockWaterQuality: WaterQuality[] = [
  { id: '1', date: '2023-06-01', ph: 6.8, salinity: 550, turbidity: 12, temperature: 22, fieldId: '1' },
  { id: '2', date: '2023-06-02', ph: 6.9, salinity: 545, turbidity: 10, temperature: 22.5, fieldId: '1' },
  { id: '3', date: '2023-06-03', ph: 7.0, salinity: 540, turbidity: 9, temperature: 23, fieldId: '1' },
  { id: '4', date: '2023-06-04', ph: 7.1, salinity: 535, turbidity: 11, temperature: 23.2, fieldId: '1' },
  { id: '5', date: '2023-06-05', ph: 7.0, salinity: 530, turbidity: 13, temperature: 23.5, fieldId: '1' },
  { id: '6', date: '2023-06-06', ph: 6.9, salinity: 535, turbidity: 14, temperature: 23.8, fieldId: '1' },
  { id: '7', date: '2023-06-07', ph: 6.8, salinity: 540, turbidity: 15, temperature: 24, fieldId: '1' },
];

// Mock Forum Categories
export const mockForumCategories: ForumCategory[] = [
  {
    id: '1',
    name: 'Crop Management',
    description: 'Discuss best practices for crop management and optimization',
    threadCount: 24,
    postCount: 143,
  },
  {
    id: '2',
    name: 'Soil Health',
    description: 'Topics related to soil health, testing, and improvement',
    threadCount: 18,
    postCount: 97,
  },
  {
    id: '3',
    name: 'Weather & Climate',
    description: 'Weather patterns, climate change impacts, and adaptation strategies',
    threadCount: 12,
    postCount: 76,
  },
  {
    id: '4',
    name: 'Equipment & Tools',
    description: 'Farming equipment, sensors, and smart farm technologies',
    threadCount: 15,
    postCount: 84,
  },
];

// Mock Forum Threads
export const mockForumThreads: ForumThread[] = [
  {
    id: '1',
    title: 'Best time to plant corn in the midwest?',
    authorId: '1',
    authorName: 'John Farmer',
    categoryId: '1',
    postCount: 8,
    createdAt: '2023-05-15T14:30:00',
    lastActivity: '2023-05-18T09:45:00',
  },
  {
    id: '2',
    title: 'Soil pH adjustments for tomatoes',
    authorId: '2',
    authorName: 'Emily Gardner',
    categoryId: '2',
    postCount: 12,
    createdAt: '2023-05-12T10:15:00',
    lastActivity: '2023-05-17T16:20:00',
  },
  {
    id: '3',
    title: 'Climate-resilient crop varieties',
    authorId: '3',
    authorName: 'Marcus Lee',
    categoryId: '3',
    postCount: 6,
    createdAt: '2023-05-10T08:45:00',
    lastActivity: '2023-05-16T11:30:00',
  },
];

// Mock Water Usage Report Data
export const mockWaterUsageReports: WaterUsageReport[] = [
  // Monthly data for current year
  { region: 'North', month: 'Jan', usage: 12500, year: 2023 },
  { region: 'North', month: 'Feb', usage: 11200, year: 2023 },
  { region: 'North', month: 'Mar', usage: 13400, year: 2023 },
  { region: 'North', month: 'Apr', usage: 15600, year: 2023 },
  { region: 'North', month: 'May', usage: 18900, year: 2023 },
  { region: 'North', month: 'Jun', usage: 22500, year: 2023 },
  
  { region: 'South', month: 'Jan', usage: 14500, year: 2023 },
  { region: 'South', month: 'Feb', usage: 13200, year: 2023 },
  { region: 'South', month: 'Mar', usage: 15400, year: 2023 },
  { region: 'South', month: 'Apr', usage: 17600, year: 2023 },
  { region: 'South', month: 'May', usage: 20900, year: 2023 },
  { region: 'South', month: 'Jun', usage: 24500, year: 2023 },
  
  { region: 'East', month: 'Jan', usage: 9500, year: 2023 },
  { region: 'East', month: 'Feb', usage: 8200, year: 2023 },
  { region: 'East', month: 'Mar', usage: 10400, year: 2023 },
  { region: 'East', month: 'Apr', usage: 12600, year: 2023 },
  { region: 'East', month: 'May', usage: 15900, year: 2023 },
  { region: 'East', month: 'Jun', usage: 19500, year: 2023 },
  
  // Previous year data for comparison
  { region: 'North', month: 'Jan', usage: 13500, year: 2022 },
  { region: 'North', month: 'Feb', usage: 12200, year: 2022 },
  { region: 'North', month: 'Mar', usage: 14400, year: 2022 },
  { region: 'North', month: 'Apr', usage: 16600, year: 2022 },
  { region: 'North', month: 'May', usage: 19900, year: 2022 },
  { region: 'North', month: 'Jun', usage: 23500, year: 2022 },
];

// Mock 7-day water usage data for dashboard
export const mockDailyWaterUsage = [
  { day: 'Mon', usage: 2450 },
  { day: 'Tue', usage: 2780 },
  { day: 'Wed', usage: 3090 },
  { day: 'Thu', usage: 2850 },
  { day: 'Fri', usage: 2650 },
  { day: 'Sat', usage: 2100 },
  { day: 'Sun', usage: 1980 },
];

