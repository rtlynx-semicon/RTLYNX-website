import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ServicesChip from './pages/ServicesChip';
import ServicesHardware from './pages/ServicesHardware';
import ServicesEmbedded from './pages/ServicesEmbedded';
import ServicesConnected from './pages/ServicesConnected';
import ServicesAI from './pages/ServicesAI';
import Board from './pages/Board';
import Careers from './pages/Careers';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <div className="antialiased text-gray-800 relative min-h-screen">
        {/* Enhanced logo background */}
        <div className="logo-background"></div>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/chip" element={<ServicesChip />} />
          <Route path="/services/hardware" element={<ServicesHardware />} />
          <Route path="/services/embedded" element={<ServicesEmbedded />} />
          <Route path="/services/connected" element={<ServicesConnected />} />
          <Route path="/services/ai" element={<ServicesAI />} />
          <Route path="/board" element={<Board />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
