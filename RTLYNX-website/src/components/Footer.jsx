import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer py-6 mt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          <div>
            <img 
              src="/assets/images/RTLYNX_FOOTER_LOGO.png" 
              className="mb-2" 
              alt="RTLYNX"
              style={{ maxWidth: '150px', height: 'auto', paddingTop: '10px', paddingBottom: '10px' }}
            />
            <p className="text-sm text-gray-300">Engineering semiconductor, hardware, embedded, connected systems, and AI products with purpose and precision.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/services/chip" onClick={scrollToTop}>Services</Link></li>
              <li><Link to="/board" onClick={scrollToTop}>Board</Link></li>
              <li><Link to="/careers" onClick={scrollToTop}>Careers</Link></li>
              <li><Link to="/blogs" onClick={scrollToTop}>Blogs</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Services</h4>
            <ul className="text-sm space-y-1">
              <li><Link to="/services/chip" onClick={scrollToTop}>Chip & Silicon Engineering</Link></li>
              <li><Link to="/services/ai" onClick={scrollToTop}>Agentic AI Systems</Link></li>
              <li><Link to="/services/hardware" onClick={scrollToTop}>Hardware Platform Engineering</Link></li>
              <li><Link to="/services/embedded" onClick={scrollToTop}>Systems & Embedded</Link></li>
              <li><Link to="/services/connected" onClick={scrollToTop}>Secured & Connected Ecosystems</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Contact</h4>
            <p className="text-sm break-words">RTLYNX SEMICON INDIA PRIVATE LIMITED<br />No. 112, AKR Tech Park, 'B' Block, Ground Floor,<br />7th Mile, Off Hosur Road, Kudlu Gate,<br />Bangalore, Karnataka 560068<br />India</p>
            <p className="mt-3 text-sm break-words">Phone: <a href="tel:+919036379007" className="hover:text-green-400">+91 903 637 9007</a><br />Email: <a href="mailto:info@rtlynx.com" className="hover:text-green-400">info@rtlynx.com</a></p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">© 2025 RTLYNX SEMICON. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

