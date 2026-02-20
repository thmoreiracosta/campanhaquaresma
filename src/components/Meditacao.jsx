export default function Meditacao({ openModal }) {
  return (
    <section id="meditacao" className="py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900">Meditação Quaresmal</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">Reflexões para encontrar Cristo no silêncio do coração.</p>
        </div>

        <div 
          className="card-hover bg-gradient-to-br from-rose-200/40 to-purple-200/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-rose-300/30 mb-8 cursor-pointer"
          onClick={() => openModal('meditacao-dia')}
        >
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto bg-gradient-to-br from-yellow-400 to-rose-400 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl sm:text-5xl">✝️</span>
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h3 className="cinzel text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 text-purple-900">"Mestre, onde moras?"</h3>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6">Os discípulos perguntaram a Jesus não por curiosidade, mas por desejo de intimidade. A Quaresma nos convida a fazer a mesma pergunta: onde encontro Cristo em minha vida?</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-rose-500 font-semibold text-base sm:text-lg">
                <span>Continuar lendo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: '🙏', title: 'Oração', desc: 'Diálogo com Deus', key: 'oracao-tema' },
            { icon: '🍞', title: 'Jejum', desc: 'Mortificação santa', key: 'jejum-tema' },
            { icon: '❤️', title: 'Esmola', desc: 'Caridade cristã', key: 'esmola-tema' },
            { icon: '✨', title: 'Conversão', desc: 'Mudança de vida', key: 'conversao-tema' },
          ].map((item) => (
            <div 
              key={item.key}
              onClick={() => openModal(item.key)}
              className="card-hover bg-purple-100/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-300/20 text-center cursor-pointer"
            >
              <div className="text-3xl sm:text-5xl mb-3">{item.icon}</div>
              <h4 className="cinzel font-bold text-base sm:text-xl mb-2 text-purple-900">{item.title}</h4>
              <p className="text-gray-700 text-xs sm:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}