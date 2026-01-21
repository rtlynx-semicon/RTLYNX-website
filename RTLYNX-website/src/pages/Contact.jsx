function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 animated-bg">
      <div className="text-center mb-8 animate-fadeIn">
        <h1 className="text-4xl font-bold text-green-600">Get In Touch</h1>
        <p className="mt-2 text-gray-600 text-lg">We're here to partner with you on semiconductor, hardware, embedded, connected systems, and AI engineering.</p>
      </div>
      
      <section className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8 shadow-xl card-hover">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Address</p>
                <p className="text-sm text-gray-600">RTLYNX SEMICON INDIA PRIVATE LIMITED<br />No. 112, AKR Tech Park, 'B' Block, Ground Floor,<br />7th Mile, Off Hosur Road, Kudlu Gate,<br />Bangalore, Karnataka 560068<br />India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Phone</p>
                <a href="tel:+919036379007" className="text-sm text-green-600 hover:underline">+91 903 637 9007</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">✉️</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Email</p>
                <a href="mailto:info@rtlynx.com" className="text-sm text-green-600 hover:underline">info@rtlynx.com</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass rounded-2xl p-8 shadow-xl">
          <h3 className="font-semibold text-2xl mb-4">Send Us a Message</h3>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
            <div>
              <input 
                name="name" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                placeholder="Your name *" 
                required 
              />
            </div>
            <div>
              <input 
                name="email" 
                type="email" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                placeholder="Email address *" 
                required 
              />
            </div>
            <div>
              <input 
                name="company" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                placeholder="Company name" 
              />
            </div>
            <div>
              <textarea 
                name="message" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all" 
                placeholder="How can we help you?" 
                rows="4"
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 btn-primary text-white px-6 py-3 rounded-lg font-medium" type="submit">
                Send Message
              </button>
              <button type="reset" className="px-6 py-3 btn-secondary rounded-lg font-medium">
                Reset
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-gray-500 text-center">Or email us directly at <a href="mailto:info@rtlynx.com" className="text-green-600 hover:underline">info@rtlynx.com</a></p>
        </div>
      </section>

      <section className="mt-12 glass rounded-2xl p-8 shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Find Us on the Map</h3>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe 
            title="rtlynx map" 
            src="https://www.google.com/maps?q=AKR+Tech+Park+Kudlu+Gate+Bangalore&output=embed" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Contact;

