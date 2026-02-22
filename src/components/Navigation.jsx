import { useEffect, useRef } from "react";
import logo from "../assets/CAMPANHA DA QUARESMA.png";

export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  openModal
}) {
  const menuRef = useRef(null);

  const handleClick = (section) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  const handleShare = () => {
    openModal("share");
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/95 backdrop-blur-md border-b border-purple-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleClick("hero")}
          >
            <img className="w-16 h-16 mr-8" src={logo} />

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
              className="px-6 py-2 bg-gradient-to-r from-rose-400 to-purple-900 rounded-full font-cinzel font-semibold text-base text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              Compartilhar
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-700/30 transition"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Animated */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[500px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="bg-purple-950/98 border-t border-purple-700/20 px-4 py-6 space-y-3">
            <button
              onClick={() => handleClick("formacao")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-xl font-medium transition"
            >
              Formações
            </button>

            <button
              onClick={() => handleClick("download")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-xl font-medium transition"
            >
              Download
            </button>

            <button
              onClick={() => handleClick("oracoes")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-xl font-medium transition"
            >
              Orações
            </button>

            <button
              onClick={() => handleClick("sobre")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-xl font-medium transition"
            >
              Sobre
            </button>

            <button
              onClick={() => handleClick("partners")}
              className="block w-full text-left px-4 py-3 rounded-lg hover:bg-purple-700/20 text-white text-xl font-medium transition"
            >
              Apoie
            </button>

            <button
              onClick={handleShare}
              className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-rose-400 to-purple-900 rounded-full font-cinzel font-semibold text-lg text-white transition-all active:scale-95"
            >
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}