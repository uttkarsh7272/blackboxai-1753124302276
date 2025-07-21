export default function Industries() {
  const industries = [
    {
      name: "Oil & Gas",
      description: "For the oil and gas industry, we create custom asset management systems, drilling optimization tools, remote monitoring platforms, and other solutions that enhance safety and maximize productivity through digitization and automation."
    },
    {
      name: "Energy and Utilities",
      description: "We build smart grid management systems, renewable energy analytics platforms, and energy efficiency optimization tools, helping to improve grid reliability, cut costs, and meet sustainability goals on facilities."
    },
    {
      name: "Logistics (Transportation)",
      description: "From route optimization algorithms and fleet management systems to supply chain tracking platforms, we work on a range of specialized solutions that boost the overall fleet and delivery routing efficiency."
    },
    {
      name: "eCommerce",
      description: "Get tailored commerce-tuned software solutions, including online storefronts, inventory management systems, and personalized marketing automation tools, to help grab customers' attention and boost sales."
    },
    {
      name: "Healthcare",
      description: "Power healthcare service provision with advanced software solutions, like electronic health record (EHR) systems, telemedicine platforms, and patient engagement applications for improved clinical workflows and enhanced patient outcomes."
    },
    {
      name: "Real Estate",
      description: "For a full scope of real estate opportunities and maxed-out productivity, leverage customized property management platforms, CRM systems, and virtual property tours built based on unique concepts and pressing needs."
    },
    {
      name: "Fintech",
      description: "Get tailored software solutions for high-performance digital banking, payment processing, and robo-advisory purposes (e.g., chatbots and data analytics systems) — everything you need to organize a finance-based workflow."
    },
    {
      name: "Agriculture",
      description: "We develop software for precision farming, crop management, and IoT-enabled agriculture sensors for the ultimate optimization of all farm operations, boosted crop yields, and better overall resource efficiency."
    },
    {
      name: "Manufacturing",
      description: "Improve manufacturing processes across the board with tailored software like ERP systems, inventory management solutions, and predictive maintenance tools that optimize production and reduce downtime."
    },
    {
      name: "Education",
      description: "Digitize educative workflows and content delivery efficiency with custom learning management solutions, student information hubs, and virtual classrooms that grant more student engagement and personalized learning experiences."
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">We Will Help You</h2>
          <p className="text-xl text-gray-600">Digital transformation for industries</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
              <a href="#" className="text-black font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
