export default function CaseStudies() {
  const cases = [
    {
      title: "AeroIntel AI: Analytical software solution for UAV operators",
      category: "AI/GenAI",
      metrics: ["0.3 s/image inference speed", "90% automation analyst effort reduced through AI", "Full adaptation of the model to new datasets"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "SafeRoute AI: Smart logistics solution for real-time truck tracking",
      category: "Custom Software",
      metrics: ["100% Processing of telematics events", "Reduction in route and speed violations", "Real-time reporting on fuel consumption"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "X-AI Insight: AI solution for AI tweet analysis",
      category: "Custom Software",
      metrics: ["100% automated cleaning and filtering", "GDPR compliance and user anonymization", "User-friendly Twitter data analytics dashboard"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "EZ Blockchain: Live Dashboard for Mining Monitoring",
      category: "Custom Software",
      metrics: ["60% customer loyalty index growth", "8 out of 10 lead score of new customers", "Real-time crypto monitoring"],
      image: "/api/placeholder/400/300"
    }
  ]

  return (
    <section id="cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Case Studies</h2>
        <div className="flex justify-center mb-12 space-x-4">
          <a href="#" className="text-black font-medium">QA & Software Testing</a>
          <a href="#" className="text-gray-600 hover:text-black">Web & Mobile Development</a>
          <a href="#" className="text-gray-600 hover:text-black">Custom Software</a>
          <a href="#" className="text-gray-600 hover:text-black">AI/GenAI</a>
          <a href="#" className="text-gray-600 hover:text-black">All cases</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gray-200 h-48"></div>
              <div className="p-6">
                <span className="text-sm text-gray-600 mb-2 block">{caseItem.category}</span>
                <h3 className="text-xl font-bold mb-4">{caseItem.title}</h3>
                <ul className="space-y-2 mb-4">
                  {caseItem.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="text-sm text-gray-600">• {metric}</li>
                  ))}
                </ul>
                <a href="#" className="text-black font-medium hover:underline">View case →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
