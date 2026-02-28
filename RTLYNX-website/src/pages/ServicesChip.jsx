function ServicesChip() {
  const capabilities = [
    { title: "Architecture & Micro-architecture", desc: "Requirements analysis, system & block-level architecture, PPA feasibility." },
    { title: "Analog & Mixed-Signal IC Design", desc: "Custom analog/mixed-signal blocks, data converters, PLLs, and high-speed interfaces." },
    {
      title: "RF",
      subItems: [
        "RFIC & Microwave IC Development",
        "GaN / GaAs MMIC Engineering",
        "Antenna & RF Front-End Co-Optimization"
      ]
    },
    { title: "RTL Design & Integration", desc: "IP/subsystem RTL, SoC integration, low-power techniques." },
    { title: "Verification & Validation", desc: "UVM-based verification, coverage-driven validation." },
    { title: "Physical Design", desc: "Synthesis, place & route, timing closure and sign-off." },
    { title: "DFT (Design For Test)", desc: "Scan insertion, ATPG, MBIST/LBIST." },
    { title: "Silicon Bring-Up", desc: "Board bring-up, debug, characterization, yield optimization." }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">
          Chip & Silicon Engineering
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Complete silicon development from architecture to tape-out and post-silicon validation.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl card-hover">
              <h4 className="font-semibold text-lg mb-2">{cap.title}</h4>
              {cap.subItems ? (
                <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside pl-1">
                  {cap.subItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-600">{cap.desc}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* <section className="glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-4">Capabilities & Engagement Models</h3>
        <p className="text-gray-700 mb-6">
          We bring deep expertise in semiconductor design and verification, helping you accelerate time-to-market while maintaining quality and performance standards.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <h5 className="font-semibold mb-2">Fixed-Scope</h5>
            <p className="text-sm text-gray-700">Well-defined deliverables with fixed timeline and budget.</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <h5 className="font-semibold mb-2">Time & Materials</h5>
            <p className="text-sm text-gray-700">Flexible engagement for evolving requirements.</p>
          </div>
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <h5 className="font-semibold mb-2">Dedicated Teams</h5>
            <p className="text-sm text-gray-700">Extended team augmentation for long-term needs.</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a href="/contact" className="inline-block px-8 py-3 btn-primary text-white rounded-lg font-medium">
            Discuss Your Project
          </a>
        </div>
      </section> */}
    </main>
  );
}

export default ServicesChip;
