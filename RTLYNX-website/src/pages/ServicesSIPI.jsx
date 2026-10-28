import { getServiceByLink } from '../data/servicesCatalog';
import ServiceCapabilitiesGrid from '../components/ServiceCapabilitiesGrid';

function ServicesSIPI() {
  const service = getServiceByLink('/services/sipi');

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">{service.pageHeading}</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">{service.description}</p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Signal Integrity (SI) – Signal Path</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Die → Package → PCB → Connector/Cable → System → Measurement
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Power Integrity (PI) – Power Delivery Path</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              VRM → PCB PDN → Package PDN → Die PDN → Silicon
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Key Service Areas</h3>
        <ServiceCapabilitiesGrid capabilities={service.capabilities} />
      </section>
    </main>
  );
}

export default ServicesSIPI;
