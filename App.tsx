import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Claims from './pages/Claims';
import Resources from './pages/Resources';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Preloader />
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch all route - redirects to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <MobileStickyBar />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;