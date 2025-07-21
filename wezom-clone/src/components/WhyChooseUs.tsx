export default function WhyChooseUs() {
  const features = [
    { number: "25+", label: "years of active, market-driven experience" },
    { number: "250+", label: "satisfied clients with 3-year collaboration" },
    { number: "275+", label: "certified full-time professionals" },
    { number: "3,500+", label: "projects finished with x2 revenue boost" }
  ]

  const certifications = [
    "ISO 27001-certified",
    "IT designs that protect data",
    "Forbes Council",
    "TOP USA awards",
    "USAID"
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why choose us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WEZOM is a software engineering company dedicated to delivering services that drive your vision forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{feature.number}</div>
              <div className="text-gray-600">{feature.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-sm font-medium text-gray-700">{cert}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
