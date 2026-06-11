interface PrivacyModalProps {
  onClose: () => void
}

export default function PrivacyModal({ onClose }: PrivacyModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 md:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-[92vw] md:max-w-2xl w-full max-h-[85vh] md:max-h-[80vh] overflow-y-auto p-5 md:p-7 lg:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 md:top-4 md:right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="font-titles text-xl md:text-2xl text-[#162556] mb-1 pr-8">Privacy Policy</h2>
        <p className="font-parag text-[11px] md:text-xs text-gray-400 mb-5 md:mb-6">Ultima modifica: 14 ottobre 2025</p>

        <div className="font-parag text-xs md:text-sm text-gray-700 space-y-5 leading-relaxed">

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Titolare del Trattamento dei Dati</h3>
            <p>
              Cicala Riparazioni di Cicala Ciro<br />
              Via Ennio, 167 int.1 — 74023 Grottaglie (TA)<br />
              Email: <a href="mailto:cicalariparazioni@gmail.com" className="text-[#1B61FD] hover:underline">cicalariparazioni@gmail.com</a>
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Tipologie di Dati raccolti</h3>
            <p>
              Il Titolare non raccoglie dati personali tramite moduli di contatto, registrazioni o sistemi di profilazione. I Dati Personali possono essere raccolti automaticamente durante l'uso dell'applicazione (Dati di Utilizzo).
            </p>
            <p className="mt-2">
              L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Modalità e luogo del trattamento</h3>
            <p>
              Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative strettamente correlate alle finalità indicate.
            </p>
            <p className="mt-2">
              I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Se non diversamente indicato, i Dati Personali sono conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Cookie Policy</h3>
            <p>
              Questa Applicazione potrebbe fare utilizzo di strumenti di tracciamento tecnici strettamente necessari al corretto funzionamento della navigazione. Tali strumenti non richiedono il consenso dell'utente ai sensi della normativa vigente.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Base giuridica del trattamento (GDPR)</h3>
            <p>Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>l'Utente ha prestato il consenso per una o più finalità specifiche;</li>
              <li>il trattamento è necessario per adempiere un obbligo legale;</li>
              <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Diritti dell'Utente (GDPR)</h3>
            <p>Nei limiti previsti dalla legge, l'Utente ha il diritto di:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>revocare il consenso in ogni momento;</li>
              <li>opporsi al trattamento dei propri Dati;</li>
              <li>accedere ai propri Dati e riceverne copia;</li>
              <li>richiedere la rettifica o la cancellazione;</li>
              <li>ottenere la limitazione del trattamento;</li>
              <li>proporre reclamo all'Autorità Garante (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer" className="text-[#1B61FD] hover:underline">www.garanteprivacy.it</a>).</li>
            </ul>
            <p className="mt-2">
              Per esercitare tali diritti contattare il Titolare all'indirizzo: <a href="mailto:cicalariparazioni@gmail.com" className="text-[#1B61FD] hover:underline">cicalariparazioni@gmail.com</a>. Il Titolare risponderà entro un mese.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Ulteriori informazioni</h3>
            <p>
              I Dati Personali dell'Utente possono essere utilizzati dal Titolare in giudizio o nelle fasi preparatorie per la difesa da abusi. Il Titolare si riserva il diritto di apportare modifiche alla presente policy, notificandolo agli Utenti su questa pagina.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">Log di sistema e manutenzione</h3>
            <p>
              Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione potrebbe raccogliere log di sistema contenenti Dati Personali quali l'indirizzo IP dell'Utente.
            </p>
          </section>

          <p className="text-[10px] md:text-[11px] text-gray-400 pt-2 border-t border-gray-100">
            Privacy Policy generata con il supporto di iubenda.
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-6 bg-[#1B61FD] text-white font-parag text-sm md:text-base px-5 md:px-6 py-2 rounded-lg hover:bg-[#1C398E] transition-colors"
        >
          Chiudi
        </button>
      </div>
    </div>
  )
}
