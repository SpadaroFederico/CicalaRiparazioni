export default function SiteBlocked() {
  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#162556] px-4 text-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="max-w-md">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            className="h-8 w-8 text-white"
          >
            <rect x="4" y="10.5" width="16" height="10" rx="2" />
            <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
          </svg>
        </div>

        <h1 className="font-titles text-2xl md:text-3xl text-white mb-3">
          Sito bloccato per mancato pagamento
        </h1>

        <p className="font-parag text-sm md:text-base text-white/70 leading-relaxed">
          Il sito è stato temporaneamente sospeso in attesa del pagamento.
          Per riattivarlo, contattare l'amministratore.
        </p>
      </div>
    </div>
  )
}
