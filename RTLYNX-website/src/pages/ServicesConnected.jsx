import { getServiceByLink } from '../data/servicesCatalog';
import ServiceCapabilitiesGrid from '../components/ServiceCapabilitiesGrid';

function ServicesConnected() {
  const service = getServiceByLink('/services/connected');

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">{service.pageHeading}</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">{service.description}</p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <ServiceCapabilitiesGrid capabilities={service.capabilities} />
      </section>

      <div className="section-divider"></div>
    </main>
  );
}

export default ServicesConnected;
