export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Software Delivery
            <br />
            <span className="text-gray-600">Driving Business</span>
            <br />
            <span className="text-black">Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Partner with dedicated IT experts who 'get' your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-md text-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="border border-black text-black px-8 py-4 rounded-md text-lg hover:bg-black hover:text-white transition-colors">
              Showreel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
