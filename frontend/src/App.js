import React from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SummaryDetails from './pages/SummaryDetailsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/summary/:id" element={<SummaryDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
