import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CookiePage } from './pages/CookiePage';
import { PaymentsPage } from './pages/PaymentsPage';
import AboutPage from './pages/AboutPage';
import CoachApplicationPage from './pages/CoachApplicationPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookie" element={<CookiePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/join-as-coach" element={<CoachApplicationPage />} />
      </Routes>
    </Router>
  );
}
