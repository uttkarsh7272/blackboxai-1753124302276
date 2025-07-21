export default function Clients() {
  const clients = [
    "H2H Movers", "Selfreliance", "UGL HOLDING", "NVA TRANSPORTATION",
    "BIKERENT.NYC", "INTERPIPE", "SCHWARZ LOGISTICS", "AUTO TRANSPORT CHICAGO",
    "Metinvest", "Aptiv PLC", "Toyota Material Handling", "Cooper&Hunter",
    "EasyLoad", "Loadaza", "Darkstore", "Makeit.io"
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Key clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="h-12 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">{client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
