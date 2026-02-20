export default function Footer({ scrollToSection, openModal }) {
  return (
    <footer className="bg-purple-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 100 100">
                <rect x="40" y="10" width="20" height="80" rx="5" fill="#C9A227" />
                <rect x="10" y="40" width="80" height="20" rx="5" fill="#C9A227" />
              </svg>
              <span className="cinzel font-bold">Quaresma 2026</span>
            </div>
            <p className="text-white/70 text-sm">Vivendo autenticamente o tempo quaresmal.</p>
          </div>

          <div>
            <h4 className="cinzel font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><button onClick={() => scrollToSection('meditacao')} className="hover:text-rose-300">Meditação</button></li>
              <li><button onClick={() => scrollToSection('oracoes')} className="hover:text-rose-300">Orações</button></li>
              <li><button onClick={() => scrollToSection('sobre')} className="hover:text-rose-300">Sobre</button></li>
            </ul>
          </div>

          <div>
            <h4 className="cinzel font-bold mb-4">Recursos</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><button onClick={() => openModal('via-sacra')} className="hover:text-rose-300">Via Sacra</button></li>
              <li><button onClick={() => openModal('rosario')} className="hover:text-rose-300">Santo Rosário</button></li>
              <li><button onClick={() => openModal('terco-misericordia')} className="hover:text-rose-300">Terço</button></li>
            </ul>
          </div>

          <div>
            <h4 className="cinzel font-bold mb-4">Compartilhe</h4>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors text-lg">📱</button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors text-lg">📘</button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors text-lg">𝕏</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 mb-2 text-sm"><em>"Mestre, onde moras?" — "Vinde e vede."</em> (Jo 1, 38-39)</p>
          <p className="text-white/40 text-xs">© 2026 Campanha da Quaresma • Ad Maiorem Dei Gloriam ✝️</p>
        </div>
      </div>
    </footer>
  )
}