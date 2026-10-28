function ServicesSIPI() {
  const keyAreas = [
    {
      title: "Signal Integrity Analysis",
      desc: "High-speed channel modeling, impedance discontinuities, reflections, crosstalk and signal quality analysis.",
    },
    {
      title: "Power Integrity & PDN Analysis",
      desc: "Power delivery network (PDN) impedance, decoupling, voltage droop, transient response and resonance analysis.",
    },
    {
      title: "Die, Package & PCB Co-Design",
      desc: "SI/PI analysis and interconnect modeling across silicon, advanced packaging and PCB interfaces.",
    },
    {
      title: "3D Electromagnetic Modeling",
      desc: "Electromagnetic extraction and analysis of packages, interconnects, connectors and high-speed structures.",
    },
    {
      title: "Simulation & Design Optimization",
      desc: "Model development, simulation, root-cause analysis and engineering recommendations for design improvement.",
    },
    {
      title: "Measurement & Correlation",
      desc: "Correlation of simulation results with laboratory measurements to validate models and improve design confidence.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">
          Silicon-to-Systems Signal & Power Integrity Engineering
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Integrated Signal Integrity (SI) and Power Integrity (PI) engineering across silicon, package, PCB and system-level interconnects, supported by simulation, design optimization and measurement correlation.
        </p>
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
        <div className="grid md:grid-cols-3 gap-6">
          {keyAreas.map((area, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl card-hover">
              <h4 className="font-semibold text-lg mb-2">{area.title}</h4>
              <p className="text-sm text-gray-600">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ServicesSIPI;
