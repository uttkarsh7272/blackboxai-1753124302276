export default function Testimonials() {
  const testimonials = [
    {
      name: "Peter Sachse",
      role: "Client",
      content: "We chose WEZOM amongst other companies because they provided prototypes of future systems and we had a clear understanding of what the finished product would look like. We worked with the team on several projects, including the development of a CRM with adaptation for desktop and mobile versions, as well as the creation of a suite of server applications that are available on iOS, Android, and online. We are very pleased with the results and the flexibility of the WEZOM team."
    },
    {
      name: "Kyle",
      role: "DRAGI",
      content: "I am very satisfied with the work process and project management. Everything was clear, on time and I had nothing specific to add. Yes, we are satisfied with the result of the work and the product meets the goals set. I can't wait to continue our work on the app."
    },
    {
      name: "Daniel Mailovsky",
      role: "Client",
      content: "Thanks to WEZOM, our sales increased by 65% and conversions increased by 150%. The team fully developed an online store for us, with 1C and amoCRM integrations. The guys conducted a market analysis, created a mind map with all the functions of the future site, and argued for each element of development. Everything was transparent, and the quality was high."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">contributing to the success</h2>
          <p className="text-xl text-gray-600">What clients say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.content}</p>
              <a href="#" className="text-black font-medium text-sm hover:underline mt-4 inline-block">Read more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
