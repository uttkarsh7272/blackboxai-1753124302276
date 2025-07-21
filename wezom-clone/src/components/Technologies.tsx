export default function Technologies() {
  const technologies = {
    "Web Platform": ["Turborepo", "GraphQL", "React hook form", "Ant Design", "Material UI", "Apollo Client", "React.js", "REST API", "TypeScript"],
    "Database": ["Python Development Team", "Scala", "Java", "Node.js", "PHP"],
    "Cloud & DevOps": ["AWS & Cloud", "Big Data Solutions", "IoT Development", "NFT marketplace", "Artificial Intelligence", "DevOps Services"],
    "Mobile apps": ["iOS App", "Android App", "Flutter", "Cross-platform", "AR/VR App Development", "Wearable Solutions"],
    "Front-End": ["React.js", "TypeScript", "Material UI", "Ant Design", "GraphQL", "Apollo Client"]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600">Technology stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, itemIndex) => (
                  <span key={itemIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Discover More
          </a>
        </div>
      </div>
    </section>
  )
}
