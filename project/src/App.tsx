import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import useAuthStore from './store/authStore';
import useThemeStore from './store/themeStore';

// Components
import AppShell from './components/layout/AppShell';
import PublicLayout from './components/layout/PublicLayout';

// Pages
import Landing from './pages/Landing';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/app/Dashboard';
import Farmers from './pages/app/Farmers';
import Forum from './pages/app/Forum';
import IoT from './pages/app/IoT';
import Reports from './pages/app/Reports';
import WaterQuality from './pages/app/WaterQuality';
import Settings from './pages/app/Settings';

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Redirect to the login page, but save the current location
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

const RedirectIfAuthenticated: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
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