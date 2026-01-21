import { Link } from 'react-router-dom';

function Services() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: "Chip & Silicon Engineering",
      description: "Complete silicon development from architecture to tape-out and post-silicon validation.",
      link: "/services/chip",
      details: [
        "Architecture & Micro-architecture",
        "RTL Design & Integration",
        "Verification & Validation",
        "Physical Design & DFT"
      ]
    },
    {
      title: "Agentic AI Systems",
      description: "Intelligent agent-based systems that operate autonomously across device, edge, and cloud.",
      link: "/services/ai",
      details: [
        "AI Agent Architecture",
        "On-Device AI",
        "Edge AI Systems",
        "Cloud AI Integration"
      ]
    },
    {
      title: "Hardware Platform Engineering",
      description: "High-density, high-performance hardware platforms engineered for reliability and manufacturability.",
      link: "/services/hardware",
      details: [
        "Board Design & Layout",
        "Signal & Power Integrity",
        "Thermal Management",
        "Compliance & Certification"
      ]
    },
    {
      title: "Systems & Embedded Engineering",
      description: "Robust embedded systems integrating firmware, RTOS, Linux, and system optimization.",
      link: "/services/embedded",
      details: [
        "Bare-Metal & RTOS Development",
        "Linux BSP & Drivers",
        "Boot Loaders & Middleware",
        "Performance Optimization"
      ]
    },
    {
      title: "Secured & Connected Ecosystems",
      description: "Device–Edge–Cloud engineering with built-in security, reliability, and scalability.",
      link: "/services/connected",
      details: [
        "IoT Device & Gateway Engineering",
        "Edge Computing & Analytics",
        "Cloud Integration & APIs",
        "Security & Data Privacy"
      ]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">Our Services</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          From silicon to systems, we deliver end-to-end engineering excellence across the entire product lifecycle
        </p>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            onClick={scrollToTop}
            className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-green-500 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 mb-4">
              {service.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="flex items-center text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </section>

      <div className="mt-12 text-center">
        <div className="inline-block bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-4">Let's discuss how we can help accelerate your engineering goals</p>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Services;
