import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = [
    {
      id: "chip-to-cloud-engineering",
      title: "Chip-to-Cloud Engineering: Why Integration Matters",
      description: "How unified engineering accelerates product development from silicon design to cloud deployment, reducing time-to-market and improving system reliability.",
      date: "January 15, 2025",
      category: "Engineering",
      author: "RTLYNX Team",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          In today's fast-paced technology landscape, the traditional siloed approach to product development is no longer sufficient. Companies are recognizing the need for integrated engineering that spans from the lowest levels of silicon design all the way to cloud deployment and management.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Challenge of Fragmented Engineering</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Historically, chip design, embedded systems, hardware platforms, and cloud infrastructure have been handled by separate teams with minimal integration. This fragmentation leads to:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Extended time-to-market due to integration delays</li>
          <li>Performance bottlenecks discovered late in the development cycle</li>
          <li>Increased costs from redesign and rework</li>
          <li>Compromised system reliability and security</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Chip-to-Cloud Approach</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Chip-to-cloud engineering represents a paradigm shift where every layer of the technology stack is designed with the entire system in mind. This holistic approach ensures:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Optimized Performance:</strong> Hardware and software co-design enables maximum efficiency</li>
          <li><strong>Enhanced Security:</strong> Security is built in from the silicon level up to the cloud</li>
          <li><strong>Faster Innovation:</strong> Integrated teams can iterate more quickly</li>
          <li><strong>Better Resource Utilization:</strong> Understanding the full stack prevents over or under-provisioning</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Real-World Applications</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Consider an IoT device that needs to process sensor data, make intelligent decisions, and communicate with the cloud. A chip-to-cloud approach would:
        </p>
        <ol class="list-decimal list-inside text-gray-700 mb-6 space-y-2">
          <li>Design custom silicon optimized for specific AI workloads</li>
          <li>Develop firmware that maximizes the hardware capabilities</li>
          <li>Implement edge processing to reduce cloud communication</li>
          <li>Create cloud services that complement edge intelligence</li>
          <li>Ensure end-to-end security from chip to cloud</li>
        </ol>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Product Development</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          As products become more complex and interconnected, chip-to-cloud engineering will become not just a competitive advantage, but a necessity. Companies that embrace this integrated approach will be better positioned to:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Respond quickly to market changes</li>
          <li>Deliver more reliable and secure products</li>
          <li>Reduce total cost of ownership</li>
          <li>Enable new business models and services</li>
        </ul>

        <p class="text-gray-700 leading-relaxed mb-6">
          At RTLYNX, we specialize in this integrated approach, bringing together expertise in chip design, embedded systems, hardware platforms, and cloud technologies to deliver comprehensive solutions that work seamlessly from silicon to cloud.
        </p>
      `
    },
    {
      id: "rise-of-edge-ai",
      title: "The Rise of Edge AI in Real-World Systems",
      description: "Why edge intelligence is becoming essential for modern IoT and embedded systems, enabling real-time decision-making without cloud dependency.",
      date: "January 8, 2025",
      category: "AI & Technology",
      author: "RTLYNX Team",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Edge AI is revolutionizing how we build intelligent systems. By bringing artificial intelligence directly to devices at the edge of the network, we're enabling real-time decision-making, reducing latency, and improving privacy and security.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">Why Edge AI Matters</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Traditional cloud-based AI systems face several limitations that edge AI addresses:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Latency:</strong> Real-time applications can't afford the round-trip time to the cloud</li>
          <li><strong>Bandwidth:</strong> Sending all data to the cloud is expensive and impractical</li>
          <li><strong>Privacy:</strong> Processing data locally keeps sensitive information on-device</li>
          <li><strong>Reliability:</strong> Edge AI works even without network connectivity</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Technical Challenges</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Deploying AI at the edge requires solving unique technical challenges:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Model Optimization:</strong> Compressing models to fit resource-constrained devices</li>
          <li><strong>Power Efficiency:</strong> Running AI inference within tight power budgets</li>
          <li><strong>Hardware Acceleration:</strong> Leveraging specialized AI accelerators</li>
          <li><strong>Model Updates:</strong> Enabling over-the-air model updates and versioning</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Real-World Applications</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Edge AI is enabling breakthrough applications across industries:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Industrial IoT:</strong> Predictive maintenance and quality control</li>
          <li><strong>Automotive:</strong> Advanced driver assistance and autonomous driving</li>
          <li><strong>Healthcare:</strong> Patient monitoring and diagnostic assistance</li>
          <li><strong>Smart Cities:</strong> Traffic management and public safety</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Edge Intelligence</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          As edge AI continues to evolve, we're seeing exciting developments:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>More powerful and efficient edge AI chips</li>
          <li>Better tools for model optimization and deployment</li>
          <li>Federated learning enabling privacy-preserving AI</li>
          <li>Hybrid edge-cloud architectures for optimal performance</li>
        </ul>

        <p class="text-gray-700 leading-relaxed mb-6">
          RTLYNX specializes in building complete edge AI solutions, from silicon-level optimizations to intelligent systems that operate reliably in real-world conditions.
        </p>
      `
    },
    {
      id: "secure-iot-ecosystems",
      title: "Building Secure IoT Ecosystems",
      description: "Principles of secure device-to-cloud engineering, covering encryption, authentication, and best practices for protecting connected systems.",
      date: "December 20, 2024",
      category: "Security",
      author: "RTLYNX Team",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          As billions of IoT devices connect to networks worldwide, security has become paramount. A single vulnerability can compromise entire systems, making security-first design essential for any IoT ecosystem.
        </p>

        <h2 class="text-2xl font-bold mt-8 mb-4">The IoT Security Challenge</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          IoT devices face unique security challenges:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li><strong>Resource Constraints:</strong> Limited processing power and memory for security operations</li>
          <li><strong>Physical Access:</strong> Devices deployed in unsecured locations</li>
          <li><strong>Scale:</strong> Managing security for millions of devices</li>
          <li><strong>Longevity:</strong> Devices that operate for years require long-term security</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Security by Design Principles</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Building secure IoT systems requires a comprehensive approach:
        </p>

        <h3 class="text-xl font-semibold mt-6 mb-3">1. Hardware Root of Trust</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Security starts at the silicon level with:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Secure boot mechanisms</li>
          <li>Hardware-based cryptographic acceleration</li>
          <li>Tamper detection and protection</li>
          <li>Secure key storage</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">2. Device Identity and Authentication</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Every device must have a unique, verifiable identity:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>X.509 certificates for device identity</li>
          <li>Mutual TLS for device-cloud authentication</li>
          <li>Certificate rotation and management</li>
          <li>Zero-touch provisioning</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">3. Data Protection</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Protecting data throughout its lifecycle:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>End-to-end encryption for data in transit</li>
          <li>Encrypted storage for data at rest</li>
          <li>Secure communication protocols (TLS 1.3, DTLS)</li>
          <li>Data minimization and privacy by design</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-3">4. Secure Updates</h3>
        <p class="text-gray-700 leading-relaxed mb-4">
          Enabling secure over-the-air updates:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Signed firmware images</li>
          <li>Rollback protection</li>
          <li>Atomic updates with failover</li>
          <li>Delta updates to minimize bandwidth</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Cloud Security Integration</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          The cloud side of IoT ecosystems requires equally robust security:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>API authentication and authorization</li>
          <li>Rate limiting and DDoS protection</li>
          <li>Security monitoring and alerting</li>
          <li>Compliance with regulations (GDPR, CCPA, etc.)</li>
        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-4">Best Practices</h2>
        <p class="text-gray-700 leading-relaxed mb-6">
          Key recommendations for building secure IoT ecosystems:
        </p>
        <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Conduct regular security audits and penetration testing</li>
          <li>Implement defense in depth with multiple security layers</li>
          <li>Plan for security incident response</li>
          <li>Stay current with security patches and updates</li>
          <li>Educate development teams on secure coding practices</li>
        </ul>

        <p class="text-gray-700 leading-relaxed mb-6">
          At RTLYNX, security is integrated into every layer of our IoT solutions, from chip-level protections to cloud security architectures, ensuring your connected systems remain protected against evolving threats.
        </p>
      `
    }
  ];

  const blog = blogs.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/blogs')}
        className="flex items-center gap-2 text-gray-600 hover:text-green-600 mb-8 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blogs
      </button>

      {/* Header Image */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Article Header */}
      <article className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
            {blog.category}
          </span>
          <span className="text-gray-400 text-sm">{blog.date}</span>
          <span className="text-gray-400 text-sm">•</span>
          <span className="text-gray-400 text-sm">{blog.readTime}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">{blog.title}</h1>
        
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 font-bold text-lg">RT</span>
          </div>
          <div>
            <p className="font-semibold">{blog.author}</p>
            <p className="text-sm text-gray-600">Engineering Team</p>
          </div>
        </div>

        {/* Blog Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-6">More Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.filter(b => b.id !== id).slice(0, 2).map((relatedBlog) => (
            <Link 
              key={relatedBlog.id}
              to={`/blogs/${relatedBlog.id}`}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs text-green-600 font-semibold">{relatedBlog.category}</span>
              <h4 className="font-semibold mt-2 mb-2">{relatedBlog.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{relatedBlog.description}</p>
              <span className="text-sm text-green-600 hover:underline">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogDetail;
