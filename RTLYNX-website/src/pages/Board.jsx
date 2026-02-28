function Board() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-bold mb-3 text-green-600">Board of Directors</h1>
        <p className="text-gray-600 text-lg">Meet our experienced leadership team driving RTLYNX's vision</p>
      </div>

      <section className="glass rounded-2xl p-8 shadow-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img src="/assets/images/Debi.jpg" className="w-32 h-32 object-cover rounded-2xl shadow-lg" alt="Debi" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Debi Prasad Rath</h3>
                <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-3 font-medium">
                  Founder & Director
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Debi is a seasoned industry leader with more than two decades of experience in the semiconductor and high-technology sector. He has held influential leadership roles at <strong>Capgemini</strong>, <strong>Happiest Minds</strong>, <strong>Tata Elxsi</strong>, <strong>CoreEL Technologies</strong> & <strong>Cadence</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 card-hover border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="relative">
                <img src="/assets/images/Soumya.jpg" className="w-32 h-32 object-cover rounded-2xl shadow-lg" alt="Soumya" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1">Soumya Rani Patro</h3>
                <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-3 font-medium">
                  Co-Founder & Director
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Soumya is a Chartered Accountant with 15+ years of corporate experience across <strong>CGI</strong>, <strong>DXC</strong>, <strong>HPE</strong>, and <strong>Avery Dennison</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Our Leadership Philosophy</h4>
              <p className="text-sm text-gray-700">Together, our directors bring complementary expertise in technology and business, creating a balanced leadership approach that drives innovation while ensuring financial sustainability and operational excellence.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Board;

