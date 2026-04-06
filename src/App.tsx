import { useState } from 'react';
import type { Page } from './lib/types';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ScannerPage } from './pages/ScannerPage';
import { EvidencePage } from './pages/EvidencePage';
import { ComplaintPage } from './pages/ComplaintPage';
import { CasesPage } from './pages/CasesPage';
import { CoalitionPage } from './pages/CoalitionPage';

function App() {
  const [page, setPage] = useState<Page>('home');

  function navigate(p: Page) {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPage() {
    switch (page) {
      case 'home': return <HomePage onNavigate={navigate} />;
      case 'scanner': return <ScannerPage />;
      case 'evidence': return <EvidencePage />;
      case 'complaint': return <ComplaintPage />;
      case 'cases': return <CasesPage />;
      case 'coalition': return <CoalitionPage />;
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav currentPage={page} onNavigate={navigate} />
      <main id="main-content">{renderPage()}</main>
      <Footer />
    </>
  );
}

export default App;
