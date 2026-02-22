import { apoiadores } from "../data/apoiadores";
import SponsorGrid from "./SponsorGrid";

export default function Sobre({ openModal }) {
  return (
    <section id="partners" className="pt-6 sm:pt-0 pb-12 sm:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">

          <div className="bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 
                          border border-rose-300/30 shadow-md">

            <h3 className="cinzel text-2xl sm:text-3xl font-bold mb-4 text-purple-900">
              Junte-se a nós
            </h3>

            <p className="text-gray-800 mb-10 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
              Nos ajude. Conheça e siga também aos nossos apoiadores.
              Vamos juntos viver intensamente esses 40 dias.
            </p>

            <SponsorGrid apoiadores={apoiadores} />

            <div className="mt-10">
              <button 
                onClick={() => openModal('share')}
                className="px-8 sm:px-10 py-3 sm:py-4 
                           bg-gradient-to-r from-rose-400 to-purple-900 
                           rounded-full font-cinzel font-semibold 
                           text-base sm:text-lg text-white 
                           transition-all duration-300 
                           hover:scale-105 hover:shadow-xl"
              >
                Compartilhar
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}