import { useState } from "react";
import { modalContentData } from "../data/modalContent";

// Pega todas as meditações que possuem summary
const meditacoes = Object.entries(modalContentData)
  .filter(([key, value]) => value.summary)
  .map(([key, value]) => ({ key, ...value }));

export default function Meditacao({ openModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMeditacao = meditacoes[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % meditacoes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? meditacoes.length - 1 : prev - 1));
  };

  return (
    <section id="formacao" className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-center mb-16 text-rose-500 text-sm tracking-widest uppercase">
            Contemplação
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900">
            Formações
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Reflexões para encontrar Cristo no silêncio do coração.
          </p>
        </div>

        {/* Card de Meditação */}
        <div
          className="card-hover bg-gradient-to-br from-rose-200/40 to-purple-200/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-rose-300/30 mb-8 cursor-pointer relative"
          onClick={() => openModal(currentMeditacao.key)}
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
            {/* Ícone */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto bg-gradient-to-br from-yellow-400 to-rose-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl sm:text-5xl">✝️</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="cinzel text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 text-purple-900">
                {currentMeditacao.title.replace("Meditação: ", "")}
              </h3>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 mr-8 text-justify">
                {currentMeditacao.summary}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-500 font-semibold text-base sm:text-lg">
                <span>Continuar lendo</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Botões de Navegação Ajustados */}
          {meditacoes.length > 1 && (
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="bg-purple-200/60 p-2 w-8 h-8 rounded-full hover:bg-purple-300 flex items-center justify-center text-purple-900 font-bold"
              >
                ◀
              </button>
            </div>
          )}
          {meditacoes.length > 1 && (
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="bg-purple-200/60 p-2 w-8 h-8 rounded-full hover:bg-purple-300 flex items-center justify-center text-purple-900 font-bold"
              >
                ▶
              </button>
            </div>
          )}
        </div>

        {/* Botoes fixos (Oração, Jejum, Esmola, Conversão) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            {
              icon: "🙏",
              title: "Oração",
              desc: "Diálogo com Deus",
              key: "oracao-tema",
            },
            {
              icon: "🍞",
              title: "Jejum",
              desc: "Mortificação santa",
              key: "jejum-tema",
            },
            {
              icon: "❤️",
              title: "Esmola",
              desc: "Caridade cristã",
              key: "esmola-tema",
            },
            {
              icon: "✨",
              title: "Conversão",
              desc: "Mudança de vida",
              key: "conversao-tema",
            },
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => openModal(item.key)}
              className="card-hover bg-purple-100/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-300/20 text-center cursor-pointer"
            >
              <div className="text-3xl sm:text-5xl mb-3">{item.icon}</div>
              <h4 className="cinzel font-bold text-base sm:text-xl mb-2 text-purple-900">
                {item.title}
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bloco de citação */}
        <div className="mt-12 bg-gradient-to-r from-rose-liturgy/20 to-purple-liturgy/20 rounded-2xl p-8 border border-rose-liturgy/30 text-center transition-transform duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-liturgy/20">
          <svg
            className="w-12 h-12 mx-auto mb-6 text-gold-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-crimson text-2xl italic text-purple-900 mb-4">
            "A Quaresma é o tempo favorável para renovar o encontro com Cristo
            vivo na sua Palavra, nos Sacramentos e no próximo."
          </blockquote>
          <cite className="text-rose-900 font-cinzel">— Papa Bento XVI</cite>
        </div>
      </div>
    </section>
  );
}
