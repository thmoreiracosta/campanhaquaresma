import { useEffect, useState } from "react";
import dores from "../assets/dores.png";
import viaSacra from "../assets/via-sacra.png";
import cquaresma from "../assets/cquaresma.png";
import confissao from "../assets/confissao.png";

export default function LentenSubsidies() {
  // 🔥 DATA INICIAL DA QUARESMA (AJUSTE AQUI TODO ANO)
  const inicioQuaresma = new Date("2026-02-18"); 

  const [currentWeek, setCurrentWeek] = useState(1);
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    const hoje = new Date();
    const diffTime = hoje - inicioQuaresma;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const semanaAtual = Math.min(Math.floor(diffDays / 7) + 1, 6);
    setCurrentWeek(semanaAtual);

    const proximaLiberacao = new Date(inicioQuaresma);
    proximaLiberacao.setDate(
      inicioQuaresma.getDate() + semanaAtual * 7
    );

    const restante = Math.ceil(
      (proximaLiberacao - hoje) / (1000 * 60 * 60 * 24)
    );

    if (semanaAtual < 6 && restante > 0) {
      setDaysRemaining(restante);
    }
  }, []);

  const semanasMeditacoes = [
    { title: "Meditações para 1ª Semana", link: "LINK_SEMANA_1" },
    { title: "Meditações para 2ª Semana", link: "LINK_SEMANA_2" },
    { title: "Meditações para 3ª Semana", link: "LINK_SEMANA_3" },
    { title: "Meditações para 4ª Semana", link: "LINK_SEMANA_4" },
    { title: "Meditações para 5ª Semana", link: "LINK_SEMANA_5" },
    { title: "Meditações para Semana Santa", link: "LINK_SEMANA_6" },
  ];

  return (
    <section id="download" className="py-12 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-rose-500 text-sm tracking-widest uppercase">
            Aprofundamento
          </span>
          <h2 className="cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900">
            Subsídios Quaresmais
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
            Material para download. Toda semana novas meditações.
          </p>

          {daysRemaining && (
            <p className="mt-4 text-sm text-rose-600 font-semibold">
              Próxima meditação disponível em {daysRemaining} dias
            </p>
          )}
        </div>

        {/* GRID PRINCIPAL — 6 COLUNAS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center">

          {/* DORES */}
          <a
            href="LINK_DORES"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-40"
          >
            <img
              className="w-32 h-48 border-8 border-white shadow-2xl rounded-3xl hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-rose-liturgy"
              src={dores}
              alt="As Dores de Nossa Senhora"
            />
            <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy text-lg hover:text-rose-liturgy transition-colors duration-300">
              As Dores de Nossa Senhora
            </p>
          </a>

          {/* VIA SACRA */}
          <a
            href="LINK_VIA_SACRA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-40"
          >
            <img
              className="w-32 h-48 border-8 border-white shadow-2xl rounded-3xl hover:scale-110 hover:border-rose-liturgy transition-all duration-500"
              src={viaSacra}
              alt="Via-Sacra"
            />
            <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy text-lg hover:text-rose-liturgy transition-colors duration-300">
              Via-Sacra
            </p>
          </a>

          {/* CONFISSÃO */}
          <a
            href="LINK_CONFISSAO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-40"
          >
            <img
              className="w-32 h-48 border-8 border-white shadow-2xl rounded-3xl hover:scale-110 hover:border-rose-liturgy transition-all duration-500"
              src={confissao}
              alt="Manual de Confissão"
            />
            <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy text-lg hover:text-rose-liturgy transition-colors duration-300">
              Manual de Confissão
            </p>
          </a>

          {/* MEDITAÇÕES AUTOMÁTICAS */}
          {semanasMeditacoes.map((semana, index) => {
            const liberada = currentWeek > index;

            return liberada ? (
              <a
                key={index}
                href={semana.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-40"
              >
                <img
                  className="w-32 h-48 border-8 border-white shadow-2xl rounded-3xl hover:scale-110 hover:border-rose-liturgy transition-all duration-500"
                  src={cquaresma}
                  alt={semana.title}
                />
                <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy text-lg hover:text-rose-liturgy transition-colors duration-300">
                  {semana.title}
                </p>
              </a>
            ) : (
              <div
                key={index}
                className="relative flex flex-col items-center w-40 group"
              >
                {/* Cadeado */}
                <div className="absolute top-2 right-2 text-purple-900 opacity-70">
                  🔒
                </div>

                <img
                  className="w-32 h-48 border-8 border-white shadow-2xl rounded-3xl opacity-40"
                  src={cquaresma}
                  alt={semana.title}
                />

                {/* Tooltip */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="bg-white/90 text-purple-900 text-xs font-semibold px-3 py-1 rounded-lg shadow-md">
                    Liberado na {index + 1}ª semana
                  </span>
                </div>

                <p className="h-16 flex items-center text-center mt-4 font-cinzel font-semibold text-purple-liturgy text-lg opacity-60">
                  {semana.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}