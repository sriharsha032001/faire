import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import SignupCTA from './components/SignupCTA';
import Footer from './components/Footer';
import KeepExploring from './components/KeepExploring';
import SEOSection from './components/SEOSection';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className="bg-[#faf9f6] min-h-screen">
      <Navbar />
      <Hero />
      <MainContent />
      <Pagination />
      <KeepExploring />
      <SignupCTA />
      <SEOSection />
      <Footer />
    </div>
  );
}

export default App;
