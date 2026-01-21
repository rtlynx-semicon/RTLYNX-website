function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">
          About RTLYNX
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Pioneering semiconductor and advanced technology solutions through innovation, expertise, and purpose-driven engineering.
        </p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl mb-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          <strong className="text-black font-bold">RTLYNX</strong> specializes in semiconductor and advanced technology product design services, helping customers build innovative and high-performance products. We believe in asking <strong>"Why"</strong> — understanding the reasoning behind every requirement, decision, and challenge our customers bring. This insight helps us reduce risk, deliver meaningful value, and build strong, purpose-driven engineering partnerships.
        </p>
        
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover">
            <h4 className="font-semibold text-lg mb-2">Mission</h4>
            <p className="text-sm text-gray-700">To foster a thriving ecosystem where innovation, trust, and collaboration empower employees, customers, vendors, and investors to succeed.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover">
            <h4 className="font-semibold text-lg mb-2">Vision</h4>
            <p className="text-sm text-gray-700">To be the most dependable partner for engineering product makers by reducing the risks of software and hardware innovation.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover">
            <h4 className="font-semibold text-lg mb-2">Purpose</h4>
            <p className="text-sm text-gray-700">To combine mindful leadership and technology to create positive impact for employees, customers, partners, investors, and society.</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-3xl font-bold mb-3 text-center">Our Values (Y.O.G.A.)</h3>
        <p className="text-center text-gray-600 mb-8">Principles that guide everything we do</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center mx-auto">
              <span className="text-gray-700 text-3xl font-bold">Y</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Youthful Spirit</h5>
            <p className="text-sm text-gray-700">Stay energetic, innovative and adaptive in challenges. Embrace change with enthusiasm.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center mx-auto">
              <span className="text-gray-700 text-3xl font-bold">O</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Openness</h5>
            <p className="text-sm text-gray-700">Transparent communication and inclusiveness. Foster trust through honesty.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center mx-auto">
              <span className="text-gray-700 text-3xl font-bold">G</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Giving Back</h5>
            <p className="text-sm text-gray-700">Social responsibility and community contribution. Make a positive impact.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 card-hover text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center mx-auto">
              <span className="text-gray-700 text-3xl font-bold">A</span>
            </div>
            <h5 className="font-semibold text-lg mb-2">Accountability</h5>
            <p className="text-sm text-gray-700">Ownership, integrity and dependable delivery. Stand behind our commitments.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

