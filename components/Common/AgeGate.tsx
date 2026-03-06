"use client";

import { useEffect, useState } from "react";

type AgeGateProps = {
  children: React.ReactNode;
};

type AudienceOption = "mulheres" | "homens" | "trans" | "todos";

export default function AgeGate({ children }: AgeGateProps) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [selectedAudience, setSelectedAudience] =
    useState<AudienceOption | null>(null);

  useEffect(() => {
    // Block page scroll while gate is visible.
    if (!isAccepted) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [isAccepted]);

  const handleExit = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "https://www.google.com";
  };

  return (
    <div className="relative">
      <div
        className={`transition-all duration-300 ${
          isAccepted
            ? "opacity-100 blur-0"
            : "pointer-events-none select-none opacity-40 blur-[4px]"
        }`}
        aria-hidden={!isAccepted}
      >
        {children}
      </div>

      {!isAccepted && (
        <div className="fixed inset-0 z-[100000] grid place-items-center bg-[rgba(5,14,11,0.82)] px-4 backdrop-blur-sm">
          <div className="w-full max-w-[440px] rounded-xl border border-white/15 bg-[#f2f4f5] p-6 text-center shadow-2xl dark:bg-[#ebeeef]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0c8b60]">
              Conteudo Adulto
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#10221c]">
              Acesso restrito para maiores de 18 anos
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#31413b]">
              Este site pode conter material sensivel para menores. Ao clicar em
              "Entrar", voce confirma que tem 18 anos ou mais e concorda em
              visualizar o conteudo.
            </p>

            <p className="mt-5 text-sm font-semibold text-[#24372f]">
              O que voce prefere assistir?
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setSelectedAudience("mulheres");
                  setIsAccepted(true);
                }}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  selectedAudience === "mulheres"
                    ? "bg-[#0ea371] text-white"
                    : "border border-[#9aa6a1] bg-white text-[#2f3e39] hover:bg-[#eef1f0]"
                }`}
              >
                Mulheres
              </button>
              <button
                onClick={() => {
                  setSelectedAudience("homens");
                  setIsAccepted(true);
                }}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  selectedAudience === "homens"
                    ? "bg-[#0ea371] text-white"
                    : "border border-[#9aa6a1] bg-white text-[#2f3e39] hover:bg-[#eef1f0]"
                }`}
              >
                Homens
              </button>
              <button
                onClick={() => {
                  setSelectedAudience("trans");
                  setIsAccepted(true);
                }}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  selectedAudience === "trans"
                    ? "bg-[#0ea371] text-white"
                    : "border border-[#9aa6a1] bg-white text-[#2f3e39] hover:bg-[#eef1f0]"
                }`}
              >
                Trans
              </button>
              <button
                onClick={() => {
                  setSelectedAudience("todos");
                  setIsAccepted(true);
                }}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  selectedAudience === "todos"
                    ? "bg-[#0ea371] text-white"
                    : "border border-[#9aa6a1] bg-white text-[#2f3e39] hover:bg-[#eef1f0]"
                }`}
              >
                Todos
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <p className="text-sm font-semibold text-[#2f3e39]">Nao concorda?</p>
              <button
                onClick={handleExit}
                className="rounded-md border border-[#9aa6a1] bg-white px-4 py-2.5 font-semibold text-[#2f3e39] transition hover:bg-[#eef1f0]"
              >
                Sair
              </button>
            </div>

            <p className="mt-4 text-xs text-[#4e5f58]">
              Primeiro passo concluido: aceite por clique em cada carregamento da
              home. No proximo passo, podemos salvar em cookie por 24h.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
