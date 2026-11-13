import { useState, useEffect, useCallback } from 'react';
import { Navbar, type AppPage } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TrustedClients } from './components/TrustedClients';
import { ClientFeedbackSection } from './components/ClientFeedbackSection';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function getInitialPage(): AppPage {
  const hash = window.location.hash.toLowerCase();
  if (hash === '#about') return 'about';
  if (hash === '#contact') return 'contact';
  return 'home';
}

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<AppPage>(getInitialPage);

  const handleNavigate = useCallback((page: AppPage, targetHash?: string) => {
    setCurrentPage(page);

    if (page === 'about') {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'contact') {
      window.location.hash = '#contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Home page navigation
    if (targetHash && targetHash !== '#home') {
      window.location.hash = targetHash;
      setTimeout(() => {
        const id = targetHash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.location.hash = '#home';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Listen to browser Back / Forward buttons
  useEffect(() => {
    const onHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0612] text-white selection:bg-violet-600/40 selection:text-white">
      <Navbar
        onOpenModal={() => setModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero onOpenModal={() => setModalOpen(true)} />
            <About />
            <Services onOpenModal={() => setModalOpen(true)} />
            <TrustedClients />
            <ClientFeedbackSection />
            <Team />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenModal={() => setModalOpen(true)}
            onNavigateContact={() => handleNavigate('contact')}
            onNavigateHome={() => handleNavigate('home', '#home')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenModal={() => setModalOpen(true)}
            onNavigateHome={() => handleNavigate('home', '#home')}
          />
        )}
      </main>

      <Footer
        onOpenModal={() => setModalOpen(true)}
        onNavigate={handleNavigate}
      />

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
