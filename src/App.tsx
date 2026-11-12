import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TrustedClients } from './components/TrustedClients';
import { ClientFeedbackSection } from './components/ClientFeedbackSection';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0612] text-white selection:bg-violet-600/40 selection:text-white">
      <Navbar onOpenModal={() => setModalOpen(true)} />

      <main>
        <Hero />
        <About />
        <Services onOpenModal={() => setModalOpen(true)} />
        <TrustedClients />
        <ClientFeedbackSection />
        <Team />
      </main>

      <Footer onOpenModal={() => setModalOpen(true)} />

      <BookingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
