import { useState, lazy, Suspense } from 'react';
import type { Page } from './lib/types';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ScannerPage = lazy(() => import('./pages/ScannerPage').then(m => ({ default: m.ScannerPage })));
const EvidencePage = lazy(() => import('./pages/EvidencePage').then(m => ({ default: m.EvidencePage })));
const ComplaintPage = lazy(() => import('./pages/ComplaintPage').then(m => ({ default: m.ComplaintPage })));
const CasesPage = lazy(() => import('./pages/CasesPage').then(m => ({ default: m.CasesPage })));
const CoalitionPage = lazy(() => import('./pages/CoalitionPage').then(m => ({ default: m.CoalitionPage })));

function NotFoundPage() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>404 — Page Not Found</h1>
      <p style={{ opacity: 0.6, marginTop: '0.5rem' }}>The page you're looking for doesn't exist.</p>
    </div>
  );
}

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
      default: return <NotFoundPage />;
    }
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav currentPage={page} onNavigate={navigate} />
      <main id="main-content">
        <ErrorBoundary>
          <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>}>
            {renderPage()}
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
