import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ServicesPage from './pages/ServicesPage';
import ModelsPage from './pages/ModelsPage';
import ContactPage from './pages/ContactPage';
import FloatingActionButtons from './components/FloatingActionButtons';
import ProductsPage from './pages/ProductsPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/features':
        return <FeaturesPage />;
      case '#/services':
        return <ServicesPage />;
      case '#/models':
        return <ModelsPage />;
      case '#/products':
        return <ProductsPage />;
      case '#/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-sky-50 min-h-screen">
      <Header currentRoute={route} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};

export default App;