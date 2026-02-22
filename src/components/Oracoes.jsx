export default function Oracoes({ openModal }) {
  return (
    <section id="oracoes" className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-center mb-16 text-rose-500 text-sm tracking-widest uppercase">
            Vida de Oração
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900">
            Orações Quaresmais
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Orações tradicionais da Igreja para nutrir sua vida espiritual
            durante este tempo santo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {[
            {
              icon: "✝️",
              title: "Via Sacra",
              sub: "14 Estações",
              desc: "Acompanhe Jesus no caminho do Calvário.",
              key: "via-sacra",
            },
            {
              icon: "🌹",
              title: "Santo Rosário",
              sub: "Mistérios Dolorosos",
              desc: "Contemple a Paixão com Nossa Senhora.",
              key: "rosario",
            },
            {
              icon: "📿",
              title: "Terço da Misericórdia",
              sub: "Santa Faustina",
              desc: "Clame pela misericórdia divina.",
              key: "terco-misericordia",
            },
            {
              icon: "⏰",
              title: "Liturgia das Horas",
              sub: "Ofício Divino",
              desc: "Oração oficial da Igreja.",
              key: "liturgia-horas",
            },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => openModal(item.key)}
              className="card-hover bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-purple-300/20 cursor-pointer shadow-md"
            >
              <div className="p-6 sm:p-8 bg-gradient-to-br from-purple-100/40 to-rose-100/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl sm:text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="cinzel text-lg sm:text-2xl font-bold text-purple-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-semibold text-sm sm:text-lg">
                      {item.sub}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 text-sm sm:text-2xl">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-300/20 shadow-md">
          <h3 className="cinzel text-xl sm:text-3xl font-bold mb-6 text-center text-purple-900">
            Orações Breves
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              {
                title: "Pai Nosso",
                desc: "A oração do Senhor",
                key: "pai-nosso",
              },
              {
                title: "Ave Maria",
                desc: "Saudação à Virgem",
                key: "ave-maria",
              },
              {
                title: "Glória ao Pai",
                desc: "Louvor à Trindade",
                key: "gloria",
              },
              { title: "Credo", desc: "Profissão de Fé", key: "credo" },
              {
                title: "Ato de Contrição",
                desc: "Arrependimento",
                key: "ato-contricao",
              },
              {
                title: "Salve Rainha",
                desc: "Súplica a Maria",
                key: "salve-rainha",
              },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => openModal(item.key)}
                className="p-4 bg-gray-50 rounded-lg hover:bg-purple-100/40 transition-all text-left border border-gray-200"
              >
                <span className="font-bold text-base sm:text-xl text-purple-900">
                  {item.title}
                </span>
                <p className="text-gray-600 text-xs sm:text-lg">{item.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
