// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'farmer' | 'analyst';
  avatar?: string;
}

// Authentication Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Field and Farm Types
export interface Field {
  id: string;
  name: string;
  location: string;
  size: number;
  crop: string;
  soilMoisture: number;
  temperature: number;
  humidity: number;
}

// IoT Device Types
export interface Device {
  id: string;
  name: string;
  type: 'moisture' | 'temperature' | 'humidity' | 'light' | 'wind';
  status: 'online' | 'offline' | 'warning';
  battery: number;
  lastReading: number;
  unit: string;
  fieldId: string;
}

// Water Quality Types
export interface WaterQuality {
  id: string;
  date: string;
  ph: number;
  salinity: number;
  turbidity: number;
  temperature: number;
  fieldId: string;
}

// Forum Types
export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  threadCount: number;
  postCount: number;
}

export interface ForumThread {
  id: string;
  title: string;
  authorId: string;
  authorName: string;
  categoryId: string;
  postCount: number;
  createdAt: string;
  lastActivity: string;
}

// Report Types
export interface WaterUsageReport {
  region: string;
  month: string;
  usage: number;
  year: number;
}

// Theme Type
export type Theme = 'light' | 'dark';