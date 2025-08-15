import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ReferralProvider } from './contexts/ReferralContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ReferralLogin from './pages/referral/ReferralLogin';
import ReferralDashboard from './pages/referral/ReferralDashboard';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ReferralProvider>
          <CartProvider>
            <Router>
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <Routes>
                  <Route path="/admin" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/referral" element={<ReferralLogin />} />
                  <Route path="/referral/dashboard" element={<ReferralDashboard />} />
                  <Route
                    path="/*"
                    element={
                      <>
                        <Header />
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/cart" element={<CartPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                      </>
                    }
                  />
                </Routes>
              </div>
            </Router>
          </CartProvider>
        </ReferralProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;