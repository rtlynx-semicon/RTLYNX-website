import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  // Floating chips positions for background animation
  const chips = [
    { delay: 0, x: "10%", y: "20%", icon: "⚡" },
    { delay: 1, x: "80%", y: "30%", icon: "🔧" },
    { delay: 2, x: "15%", y: "70%", icon: "💻" },
    { delay: 0.5, x: "75%", y: "65%", icon: "🧠" },
    { delay: 1.5, x: "60%", y: "15%", icon: "🔌" },
    { delay: 2.5, x: "25%", y: "50%", icon: "⚙️" },
  ];

  return (
    <main className="relative">
      {/* Animated Background - Only behind hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ height: '100vh' }}>
        {/* Smooth Gradient Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-[300px] h-[300px] bg-green-200 rounded-full blur-[80px] opacity-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-20 w-[250px] h-[250px] bg-emerald-200 rounded-full blur-[80px] opacity-15"
        />
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-green-300 rounded-full blur-[60px] opacity-10"
        />

        {/* Connecting Network Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6CC04A" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#5a9d3e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4a8c2e" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {chips.map((chip1, i) =>
            chips.map((chip2, j) => {
              if (i >= j) return null;
              
              // Calculate positions based on viewport
              const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
              const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;
              
              const x1 = parseFloat(chip1.x) * viewportWidth / 100 + 24;
              const y1 = parseFloat(chip1.y) * viewportHeight / 100 + 24;
              const x2 = parseFloat(chip2.x) * viewportWidth / 100 + 24;
              const y2 = parseFloat(chip2.y) * viewportHeight / 100 + 24;
              
              const distance = Math.sqrt(
                Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
              );
              const maxDistance = viewportWidth * 0.5;
              
              if (distance > maxDistance) return null;
              
              const opacity = 1 - distance / maxDistance;
              
              return (
                <motion.line
                  key={`line-${i}-${j}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGrad)"
                  strokeWidth="2"
                  opacity={opacity}
                  animate={{
                    strokeOpacity: [opacity * 0.3, opacity * 0.7, opacity * 0.3],
                  }}
                  transition={{
                    duration: 3 + (i + j) * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })
          )}
        </svg>

        {/* Animated Floating Chips/Bubbles */}
        {chips.map((chip, idx) => (
          <motion.div
            key={idx}
            className="absolute w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-lg backdrop-blur-sm border-2 border-green-500"
            style={{
              background: "linear-gradient(135deg, #6CC04A 0%, #5a9d3e 100%)",
              left: chip.x,
              top: chip.y,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(idx) * 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + idx * 0.5,
              repeat: Infinity,
              delay: chip.delay,
              ease: "easeInOut",
            }}
          >
            {chip.icon}
          </motion.div>
        ))}

        {/* Shining Particles/Dots */}
        {[...Array(20)].map((_, idx) => (
          <motion.div
            key={`particle-${idx}`}
            className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Tech Grid Lines (subtle) */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#22c55e" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Original Hero Section Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeIn order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:font-bold leading-tight text-black" style={{ fontSize: 'clamp(1.875rem, 5vw, 3.375rem)' }}>
              AI-Driven Intelligent Systems Engineering
            </h1>
            <p className="mt-6 text-gray-700 text-xl leading-relaxed font-medium">
              From silicon to systems, we engineer intelligence across chip, edge, and cloud.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              <strong className="text-black font-bold">RTLYNX</strong> delivers next-generation silicon engineering, embedded systems, and agentic AI platforms for a connected world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="px-8 py-4 btn-primary text-white rounded-lg font-semibold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
                Explore Services <span>→</span>
              </Link>
              <Link to="/contact" className="px-8 py-4 btn-secondary rounded-lg font-semibold inline-flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative order-1 md:order-2" style={{ marginLeft: '10px' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200 hover:shadow-green-200/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative" style={{ minHeight: '450px' }}>
                {/* Professional AI Chip Image */}
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E12AQEP6nKGwQ8LYQ/article-cover_image-shrink_720_1280/B4EZT1TXLxGwAU-/0/1739282282415?e=2147483647&v=beta&t=Z-9OxQ6Rka5S-xW0EogceZBQk4Ek_LXjsENHBDU5fko" 
                  alt="AI-Driven Intelligent Systems Engineering - Semiconductor Technology" 
                  className="w-full h-full object-cover"
                  style={{ minHeight: '450px', maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-2xl p-8 shadow-xl card-hover">
        <h3 className="text-2xl font-bold">About Us</h3>
        <p className="mt-4 text-gray-700"><strong className="text-black font-bold">RTLYNX</strong> specializes in semiconductor and advanced technology product design services, helping customers build innovative and high-performance products. We believe in asking "Why" — understanding the reasoning behind every requirement, decision, and challenge our customers bring. This insight helps us reduce risk, deliver meaningful value, and build strong, purpose-driven engineering partnerships.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Values — Y.O.G.A.</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>Y — Youthful Spirit</strong>: Adaptive, energetic, and positive.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>O — Openness</strong>: Transparency and inclusivity.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>G — Giving Back</strong>: Social & environmental responsibility.</span></li>
              <li className="flex items-start"><span className="text-green-600 mr-2">✓</span><span><strong>A — Accountability</strong>: Ownership and integrity.</span></li>
            </ul>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">Purpose</h4>
            <p className="mt-3 text-sm text-gray-700">Combine mindful leadership and technology to create positive impact for employees, customers, partners, investors, and society.</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto px-6"></div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">Our Services</h3>
            <p className="mt-2 text-gray-600 text-lg">Comprehensive engineering services across chip, hardware, systems, security and agentic AI.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="group p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-xl mb-3 text-gray-900">Chip & Silicon Engineering</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">From architecture to tape-out with industry-leading methodologies.</p>
            <Link to="/services/chip" className="text-sm text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-green-700">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="group p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-xl mb-3 text-gray-900">Agentic AI Systems</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">AI agents, workflow automation, and intelligent systems operating across devices and cloud.</p>
            <Link to="/services/ai" className="text-sm text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-green-700">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="group p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-xl mb-3 text-gray-900">Hardware Platform Engineering</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">High-density boards, performance-critical designs and compliance testing.</p>
            <Link to="/services/hardware" className="text-sm text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-green-700">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="group p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-xl mb-3 text-gray-900">Systems & Embedded Engineering</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Real-time software, system optimization and productization support.</p>
            <Link to="/services/embedded" className="text-sm text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-green-700">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          <div className="group p-8 bg-white border-l-4 border-green-500 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-bold text-xl mb-3 text-gray-900">Secured & Connected Ecosystems</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">Device connectivity, cloud platforms, edge computing, and secure data pipelines.</p>
            <Link to="/services/connected" className="text-sm text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all group-hover:text-green-700">
              Learn more <span className="ml-1">→</span>
            </Link>
          </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto px-6"></div>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-2">Leadership</h3>
        <p className="text-gray-600 mb-6">Meet our experienced leadership team</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl flex gap-4 items-start card-hover bg-white">
            <img src="/assets/images/Debi.jpg" className="w-20 h-20 object-cover rounded-full shadow-lg" alt="Debi" />
            <div>
              <div className="font-semibold text-lg">Debi Prasad Rath</div>
              <div className="text-sm text-green-600 mb-2">Founder & Director</div>
              <p className="text-sm text-gray-600">Seasoned industry leader with 20+ years in semiconductor and high-tech. Leadership roles at Capgemini, Happiest Minds, Tata Elxsi, CoreEL Technologies & Cadence.</p>
            </div>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl flex gap-4 items-start card-hover bg-white">
            <img src="/assets/images/Soumya.jpg" className="w-20 h-20 object-cover rounded-full shadow-lg" alt="Soumya" />
            <div>
              <div className="font-semibold text-lg">Soumya Rani Patro</div>
              <div className="text-sm text-green-600 mb-2">Co-Founder & Director</div>
              <p className="text-sm text-gray-600">Chartered Accountant with 15+ years across Avery Dennison, HPE, DXC and CGI. Expert in financial planning and compliance.</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="p-8 bg-white rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold">Join Our Team</h3>
        <p className="mt-2 text-gray-600">We are building a team of curious builders. Send your resume to <a href="mailto:career@rtlynx.com" className="text-green-600 font-medium hover:underline">career@rtlynx.com</a>.</p>
            <Link to="/careers" className="mt-4 inline-block px-6 py-3 btn-primary text-white rounded-lg font-medium">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

