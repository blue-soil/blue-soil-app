import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useAuthStore from './features/core-app/store/authStore';
import useThemeStore from './features/core-app/store/themeStore';

// Components
import AppShell from './features/core-app/components/layout/AppShell';
import PublicLayout from './features/core-app/components/layout/PublicLayout';

// Pages
import Landing from './features/core-app/pages/Landing';
import SignIn from './features/core-app/pages/auth/SignIn';
import SignUp from './features/core-app/pages/auth/SignUp';
import Dashboard from './features/core-app/pages/app/Dashboard';
import Farmers from './features/core-app/pages/app/Farmers';
import Forum from './features/core-app/pages/app/Forum';
import IoT from './features/core-app/pages/app/IoT';
import Reports from './features/core-app/pages/app/Reports';
import WaterQuality from './features/core-app/pages/app/WaterQuality';
import Settings from './features/core-app/pages/app/Settings';



const RedirectIfAuthenticated: React.FC<{ children: React.ReactNode }> = ({ children }: {children: any}) => {
  const isAuthenticated = useAuthStore((state: any) => state.isAuthenticated);
  
  if (isAuthenticated) {
    // If user is authenticated, redirect to dashboard
    return <Navigate to="/app/dashboard" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  const { theme } = useThemeStore();
  
  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  // Update document title
  useEffect(() => {
    document.title = 'Blue Soil - Smart Agriculture Management';
  }, []);
  
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route 
          path="/" 
          element={
            <RedirectIfAuthenticated>
              <PublicLayout>
                <Landing />
              </PublicLayout>
            </RedirectIfAuthenticated>
          } 
        />
        <Route 
          path="/signin" 
          element={
            <RedirectIfAuthenticated>
              <PublicLayout>
                <SignIn />
              </PublicLayout>
            </RedirectIfAuthenticated>
          } 
        />
        <Route 
          path="/signup" 
          element={
            <RedirectIfAuthenticated>
              <PublicLayout>
                <SignUp />
              </PublicLayout>
            </RedirectIfAuthenticated>
          } 
        />
        
        {/* REMOVE RequireAuth wrapper for testing */}
        <Route 
          path="/app" 
          element={
            // <RequireAuth>
              <AppShell />
            // </RequireAuth>
          }
        >
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="farmers" element={<Farmers />} />
          <Route path="forum" element={<Forum />} />
          <Route path="iot" element={<IoT />} />
          <Route path="reports" element={<Reports />} />
          <Route path="water-quality" element={<WaterQuality />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;