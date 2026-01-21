import { Link } from 'react-router-dom';

function Blogs() {
  const actualBlogs = [
    {
      id: "chip-to-cloud-engineering",
      title: "Chip-to-Cloud Engineering: Why Integration Matters",
      description: "How unified engineering accelerates product development from silicon design to cloud deployment, reducing time-to-market and improving system reliability.",
      date: "December 15, 2025",
      category: "Engineering"
    },
    {
      id: "rise-of-edge-ai",
      title: "The Rise of Edge AI in Real-World Systems",
      description: "Why edge intelligence is becoming essential for modern IoT and embedded systems, enabling real-time decision-making without cloud dependency.",
      date: "November 8, 2025",
      category: "AI & Technology"
    },
    {
      id: "secure-iot-ecosystems",
      title: "Building Secure IoT Ecosystems",
      description: "Principles of secure device-to-cloud engineering, covering encryption, authentication, and best practices for protecting connected systems.",
      date: "September 20, 2025",
      category: "Security"
    }
  ];

  const allBlogs = [...actualBlogs];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold text-green-600">Insights & Perspectives</h1>
        <p className="mt-2 text-gray-600">Thought leadership on semiconductor, embedded, hardware, IoT, and agentic AI.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {allBlogs.map((blog) => (
            <div key={blog.id} className="p-4 border rounded hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-green-600 font-semibold">{blog.category}</span>
                <span className="text-xs text-gray-400">{blog.date}</span>
              </div>
              <h4 className="font-semibold mb-2">{blog.title}</h4>
              <p className="text-sm text-gray-600">{blog.description}</p>
              <Link 
                to={`/blogs/${blog.id}`}
                className="text-sm text-green-600 mt-3 inline-block hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blogs;
