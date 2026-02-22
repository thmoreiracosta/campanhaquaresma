import logo from "../assets/CAMPANHA DA QUARESMA.png";

export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  openModal
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/95 backdrop-blur-md border-b border-purple-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img className="w-16 h-16 mr-8" src={logo}></img>

            <span className="cinzel font-bold text-base sm:text-lg text-white hidden sm:block">
              Campanha da Quaresma 2026
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("formacao")}
              className="nav-link text-white/90 hover:text-rose-300 font-medium text-lg"
            >
              Formações
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="nav-link text-white/90 hover:text-rose-300 font-medium text-lg"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("oracoes")}
              className="nav-link text-white/90 hover:text-rose-300 font-medium text-lg"
            >
              Orações
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="nav-link text-white/90 hover:text-rose-300 font-medium text-lg"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="nav-link text-white/90 hover:text-rose-300 font-medium text-lg"
            >
              Apoie
            </button>

            <button
              onClick={() => openModal("share")}
              className="px-6 sm:px-6 py-2 sm:py-2 bg-gradient-to-r from-rose-400 to-purple-900 rounded-full font-cinzel font-semibold text-base sm:text-sm text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              Compartilhar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-700/30"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-950/98 border-t border-purple-700/20 px-4 py-4 space-y-2">
            <button
              onClick={() => scrollToSection("meditacao")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-lg"
            >
              🙏 Meditação
            </button>
            <button
              onClick={() => scrollToSection("oracoes")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-lg"
            >
              ✝️ Orações
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-lg"
            >
              ℹ️ Sobre
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
