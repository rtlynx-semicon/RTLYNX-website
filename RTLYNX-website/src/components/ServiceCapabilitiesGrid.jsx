function ServiceCapabilitiesGrid({ capabilities }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {capabilities.map((cap) => (
        <div key={cap.title} className="p-6 bg-white border border-gray-200 rounded-xl card-hover">
          <h4 className="font-semibold text-lg mb-2">{cap.title}</h4>
          {cap.subItems ? (
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside pl-1">
              {cap.subItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600">{cap.desc}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ServiceCapabilitiesGrid;
