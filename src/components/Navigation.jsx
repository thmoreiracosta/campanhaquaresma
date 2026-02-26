import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/CAMPANHA DA QUARESMA.png";

// Componente do toggle de tema, estilo switch com sol e lua
const SunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E8D5E8"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
  </svg>
);

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
      title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
      className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
        theme === "dark" ? "bg-purple-700" : "bg-rose-500"
      } focus:outline-none`}
    >
      {/* Bolinha que desliza */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg"
        style={{
          x: theme === "dark" ? 24 : 0,
        }}
      />

      {/* Ícones */}
      <div className="absolute top-1.5 left-2">{SunIcon}</div>
      <div className="absolute top-1.5 right-2">{MoonIcon}</div>
    </button>
  );
}

export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  openModal,
}) {
  const menuRef = useRef(null);

  // Estado do tema com persistência no localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.body.classList.remove(theme === "dark" ? "light" : "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

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
            <img className="w-16 h-16 mr-8" src={logo} alt="Logo" />
            <span className="cinzel font-bold text-base sm:text-lg text-white hidden sm:block">
              Campanha da Quaresma 2026
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden tablet:flex md:flex items-center gap-6">
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

            {/* Toggle Tema */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <button
              onClick={handleShare}
              className="px-6 py-2 bg-gradient-to-r from-rose-400 to-purple-900 rounded-full font-cinzel font-semibold text-base text-white transition-all hover:scale-105 hover:shadow-xl"
            >
              Compartilhar
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-700/30 transition"
            aria-label="Abrir menu mobile"
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

        {/* Menu Mobile Animado */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[600px] opacity-100 translate-y-0"
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

            {/* Toggle tema mobile */}
            <div className="flex justify-center mt-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>

            <button
              onClick={handleShare}
              className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-rose-400 to-purple-900 rounded-full font-cinzel font-semibold text-lg text-white transition-all active:scale-95"
            >
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}