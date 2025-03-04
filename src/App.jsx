import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import CycleForm from './pages/cycleForm';
import WhatTrack from './pages/whatTrack';
import MenstrualDashboard from './pages/Dashboard';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';


// config.autoAddCss = false;


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Single protected route with nested children */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              {/* Give z-index to highest  in tailwind to home so that chatbot does not appear above home components */}
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="track" element={<WhatTrack />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="cycle" element={<CycleForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mensturalDashboard" element={<MenstrualDashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;