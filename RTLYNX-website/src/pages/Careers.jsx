import { useState } from 'react';

function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const actualJobs = [
    {
      title: "Senior Firmware Engineer",
      experience: "5-8 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Design and develop embedded firmware for IoT devices, RTOS-based systems, and real-time applications. Experience with ARM processors, BSP development, and low-level programming required.",
      skills: ["C/C++", "RTOS", "ARM", "Embedded Systems", "Device Drivers"]
    },
    {
      title: "SoC Validation Engineer",
      experience: "4-8 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Lead validation and verification activities for complex SoC designs. Develop test plans, execute validation suites, and debug hardware-software integration issues.",
      skills: ["SoC Validation", "SystemVerilog", "UVM", "Python", "Debugging"]
    },
    {
      title: "AI/ML Systems Engineer",
      experience: "3-6 years",
      location: "Bangalore",
      type: "Full-time",
      description: "Design and implement AI/ML systems for edge devices and cloud platforms. Work on model optimization, quantization, and deployment of neural networks on embedded hardware.",
      skills: ["Python", "TensorFlow/PyTorch", "Edge AI", "Model Optimization", "Embedded Systems"]
    }
  ];

  const allJobs = [...actualJobs];

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', resume: null });
    document.body.style.overflow = 'unset';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Application for: ${selectedJob.title}

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Resume: ${formData.resume ? formData.resume.name : 'Not attached (Please attach separately)'}

---
This application was submitted through the RTLYNX Careers page.
    `.trim();

    // Open email client
    const mailtoLink = `mailto:career@rtlynx.com?subject=Application for ${encodeURIComponent(selectedJob.title)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    // Show success message
    alert('Your email client will open with your application details. Please attach your resume before sending.');
    
    closeModal();
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section className="bg-white rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-green-600">Careers at RTLYNX</h1>
        <p className="mt-4 text-gray-700">Join a purpose-driven engineering team shaping the future of semiconductor and high-technology products.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Why work with us</h4>
            <p className="text-sm text-gray-600 mt-2">Purpose-led engineering, chip-to-cloud work, ownership and growth.</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Benefits</h4>
            <p className="text-sm text-gray-600 mt-2">Learning opportunities, leadership accessibility, flexible policies.</p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-semibold">Apply</h4>
            <p className="text-sm text-gray-600 mt-2">Send your resume to <a href="mailto:career@rtlynx.com" className="text-green-600">career@rtlynx.com</a></p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Open Positions</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {allJobs.map((job, index) => (
              <div key={index} className="p-4 border rounded hover:shadow-lg transition-all duration-300 bg-white">
                <h4 className="font-semibold">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.experience} • {job.location} • {job.type}</p>
                <p className="text-sm text-gray-600 mt-2">{job.description}</p>
                {job.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{skill}</span>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => openModal(job)}
                  className="text-sm text-green-600 inline-block mt-3 hover:underline cursor-pointer"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold">Apply for Position</h2>
                <p className="text-gray-600 mt-1">{selectedJob?.title}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="px-8 py-6">
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Resume/CV <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                  {formData.resume && (
                    <p className="text-sm text-green-600 mt-2">✓ {formData.resume.name}</p>
                  )}
                </div>

                {/* Additional Info */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> After clicking Submit, your email client will open with the application details. Please attach your resume and send the email to complete your application.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Careers;
