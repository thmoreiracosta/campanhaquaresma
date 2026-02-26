import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Oracoes({ openModal }) {
  const [ref, visible] = useScrollReveal();
  return (
    <section
      id="oracoes"
      ref={ref}
      className={`py-12 sm:py-20 px-4 bg-gray-50 reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-center mb-16 text-rose-500 text-base sm:text-lg tracking-widest uppercase">
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
              className="card-hover bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-purple-300/20 cursor-pointer shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="p-5 sm:p-8 bg-gradient-to-br from-purple-100/40 to-rose-100/40">
                <div className="flex items-center gap-4 mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="cinzel text-lg sm:text-2xl font-bold text-purple-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">
                      {item.sub}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800 text-base sm:text-2xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-purple-300/20 shadow-md">
          <h3 className="cinzel text-lg sm:text-3xl font-bold mb-6 text-center text-purple-900">
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
                className="p-4 bg-gray-50 rounded-lg text-left border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:bg-purple-100/40 hover:shadow-lg hover:scale-105"
              >
                <span className="font-bold text-lg sm:text-xl text-purple-900">
                  {item.title}
                </span>
                <p className="text-gray-600 text-base sm:text-lg">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
