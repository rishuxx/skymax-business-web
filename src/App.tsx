import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SolutionsView from './components/SolutionsView';
import WhySkymaxView from './components/WhySkymaxView';
import SupportAMCView from './components/SupportAMCView';
import PricingView from './components/PricingView';
import ContactView from './components/ContactView';
import SolutionDetailView from './components/SolutionDetailView';
import SplashLoader from './components/SplashLoader';
import { PageId, SolutionId } from './types';
import { solutionsData } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentSolutionId, setCurrentSolutionId] = useState<SolutionId | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  // Synchronize state with incoming URL paths
  useEffect(() => {
    const parseUrl = () => {
      // Legacy Hash Support - redirect to clean URLs
      if (window.location.hash && window.location.hash.length > 1) {
        const hashPath = window.location.hash.substring(1);
        window.history.replaceState(null, '', `/${hashPath}`);
      }

      const path = window.location.pathname;
      
      if (path === '/' || path === '/home') {
        setCurrentPage('home');
        setCurrentSolutionId(null);
      } else if (path === '/about') {
        setCurrentPage('about');
        setCurrentSolutionId(null);
      } else if (path === '/why-skymax') {
        setCurrentPage('why-skymax');
        setCurrentSolutionId(null);
      } else if (path === '/support-amc') {
        setCurrentPage('support-amc');
        setCurrentSolutionId(null);
      } else if (path === '/pricing') {
        setCurrentPage('pricing');
        setCurrentSolutionId(null);
      } else if (path === '/contact') {
        setCurrentPage('contact');
        setCurrentSolutionId(null);
      } else if (path === '/solutions') {
        setCurrentPage('solutions');
        setCurrentSolutionId(null);
      } else if (path.startsWith('/solutions/')) {
        const potentialId = path.replace('/solutions/', '') as SolutionId;
        const exists = solutionsData.some((item) => item.id === potentialId);
        if (exists) {
          setCurrentPage('solution-detail');
          setCurrentSolutionId(potentialId);
        } else {
          setCurrentPage('solutions');
          setCurrentSolutionId(null);
        }
      } else {
        setCurrentPage('home');
        setCurrentSolutionId(null);
      }
    };

    // Parse initial URL load
    parseUrl();

    window.addEventListener('popstate', parseUrl);
    return () => window.removeEventListener('popstate', parseUrl);
  }, []);

  // Set the outbound URL path whenever navigation happens
  const navigateTo = (page: PageId, solution?: SolutionId) => {
    let newPath = '/';
    if (page === 'home') {
      newPath = '/';
    } else if (page === 'about') {
      newPath = '/about';
    } else if (page === 'why-skymax') {
      newPath = '/why-skymax';
    } else if (page === 'support-amc') {
      newPath = '/support-amc';
    } else if (page === 'pricing') {
      newPath = '/pricing';
    } else if (page === 'contact') {
      newPath = '/contact';
    } else if (page === 'solutions') {
      newPath = '/solutions';
    } else if (page === 'solution-detail' && solution) {
      newPath = `/solutions/${solution}`;
    }
    
    // Only push state if path changed
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
      // Trigger popstate so local listeners update
      window.dispatchEvent(new Event('popstate'));
    }
  };

  // Find the currently selected solution if applicable
  const selectedSolution = currentSolutionId
    ? solutionsData.find((item) => item.id === currentSolutionId)
    : null;

  return (
    <div className="min-h-screen text-gray-900 flex flex-col justify-between selection:bg-[#3D9FFF]/30 selection:text-[#0B2E59]">
      
      {/* Premium custom animated logo splash loader on initial load */}
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      {/* Premium Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        currentSolutionId={currentSolutionId}
        onNavigate={navigateTo}
      />

      {/* Main Container Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${currentSolutionId || ''}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
          >
            {currentPage === 'home' && <HomeView onNavigate={navigateTo} />}
            {currentPage === 'about' && <AboutView />}
            {currentPage === 'solutions' && <SolutionsView onNavigate={navigateTo} />}
            {currentPage === 'why-skymax' && <WhySkymaxView onNavigate={navigateTo} />}
            {currentPage === 'support-amc' && <SupportAMCView onNavigate={navigateTo} />}
            {currentPage === 'pricing' && <PricingView onNavigate={navigateTo} />}
            {currentPage === 'contact' && <ContactView />}
            {currentPage === 'solution-detail' && selectedSolution && (
              <SolutionDetailView
                solution={selectedSolution}
                onNavigate={navigateTo}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Multi-Column High-Accountability Footer */}
      <Footer onNavigate={navigateTo} />

    </div>
  );
}
