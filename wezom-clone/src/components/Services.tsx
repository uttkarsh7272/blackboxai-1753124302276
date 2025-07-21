export default function Services() {
  const services = [
    {
      number: "01",
      title: "Software",
      items: ["Chicago", "New York", "Houston", "IT Consulting", "Scoping Session", "Product Development", "Product Management", "MVP Development", "Maintenance & Support", "SaaS"],
      description: "Streamline all your interactions with customers through the launch of an individual CRM system made by WEZOM."
    },
    {
      number: "02",
      title: "Web Development",
      items: ["Web Applications", "Front-End Development", "Progressive Web Applications", "Single Page Application", "Web Portals", "Corporate Websites"],
      description: "Leverage next-generation expertise to develop and app, complete a startup foundation, or build a new solution from scratch"
    },
    {
      number: "03",
      title: "Mobile App Development",
      items: ["iOS App", "Android App", "Flutter", "Cross-platform", "AR/VR App Development", "Wearable Solutions"],
      description: "Create a feature-rich mobile app that runs on clean code and integrates with the most appropriate additions and plugins."
    },
    {
      number: "04",
      title: "Data Science & AI",
      items: ["AWS & Cloud", "Big Data Solutions", "IoT Development", "NFT marketplace", "Artificial Intelligence", "DevOps Services"],
      description: "Make every business decision a data-driven one with stats, insights and analysis that positions you ahead of the competition"
    },
    {
      number: "05",
      title: "QA & Software Testing",
      items: ["Test Automation", "Cybersecurity", "Functional Testing", "Performance Testing", "Mobile App Testing", "QA Consulting", "Load Testing Services"],
      description: "Ensure the fault tolerance, stability, and correct operation of your digital solution with software QA testing services by WEZOM"
    },
    {
      number: "06",
      title: "UX/UI Design",
      items: ["UX Review", "Product Design", "Rapid UX Prototyping", "Mobile App Design", "Web Design Services"],
      description: "Get a UI/UX design inspired by the desires and needs of your users by entrusting its implementation to WEZOM experts."
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-gray-400 mb-4">{service.number}/</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <div className="space-y-2 mb-4">
                {service.items.map((item, itemIndex) => (
                  <a key={itemIndex} href="#" className="block text-sm text-gray-600 hover:text-black transition-colors">
                    {item}
                  </a>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <a href="#" className="text-black font-medium hover:underline">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
