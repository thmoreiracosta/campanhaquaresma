export default function Sobre({ openModal }) {
  return (
    <section id="sobre" className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-center mb-16 text-rose-500 text-sm tracking-widest uppercase">
            Nossa Missão
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900">
            Sobre a Campanha
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-purple-300/20 shadow-md">
            <h3 className="cinzel text-2xl sm:text-3xl font-bold mb-6 text-rose-500">
              O que é a Campanha da Quaresma?
            </h3>
            <div className="space-y-4 text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                A <strong>Campanha da Quaresma</strong> é uma iniciativa
                católica que resgata o verdadeiro sentido do tempo quaresmal:{" "}
                <em>conversão do coração</em>, <em>oração profunda</em> e{" "}
                <em>caridade cristã autêntica</em>.
              </p>
              <p>
                Fundamentada na Sagrada Escritura, no Magistério da Igreja e no
                depositum fidei, oferecemos conteúdo fiel à doutrina católica,
                livre de influências ideológicas.
              </p>
              <p>
                O tema deste ano, 2026, é <strong>"Mestre, onde moras?"</strong>
                , e nos convida, cada fiel, a buscar a{" "}
                <strong>verdadeira morada de Cristo.</strong> Venha conosco,
                viver uma santa quaresma.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: "📖",
                title: "Tradição",
                desc: "Baseado no Catecismo da Igreja Católica.",
              },
              {
                icon: "⛪",
                title: "Comunhão",
                desc: "Em comunhão com o Santo Padre e a Igreja.",
              },
              {
                icon: "🕊️",
                title: "Autenticidade",
                desc: "Longe de agendas políticas ou partidárias ideológicas.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-hover bg-white rounded-xl sm:rounded-2xl p-6 border border-purple-300/20 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="cinzel font-bold text-lg sm:text-xl mb-2 text-purple-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
