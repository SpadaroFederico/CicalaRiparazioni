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

        <h2 className="font-titles text-xl md:text-2xl text-[#162556] mb-5 md:mb-6 pr-8">Privacy Policy</h2>

        <div className="font-parag text-xs md:text-sm text-gray-700 space-y-4 leading-relaxed">

          <section>
            <h3 className="font-bold text-[#162556] mb-1">1. Titolare del Trattamento</h3>
            <p>
              Cicala Riparazioni di Cicala Ciro<br />
              P.IVA: 01234567890<br />
              C.F.: CCLMRA70A01E123Y<br />
              REA: TA-123456<br />
              Sede: [INDIRIZZO COMPLETO], Grottaglie (TA)<br />
              Email: [EMAIL CONTATTO]
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">2. Tipologia di dati raccolti</h3>
            <p>
              Il presente sito web ha natura esclusivamente informativa (sito vetrina). Non vengono raccolti dati personali degli utenti tramite moduli di contatto, registrazioni o sistemi di profilazione. Non vengono utilizzati cookie di profilazione o di tracciamento.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">3. Cookie tecnici</h3>
            <p>
              Il sito potrebbe utilizzare esclusivamente cookie tecnici strettamente necessari al corretto funzionamento della navigazione. Tali cookie non richiedono il consenso dell'utente ai sensi dell'art. 122 del D.Lgs. 196/2003 e del Provvedimento del Garante dell'8 maggio 2014.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">4. Dati di navigazione</h3>
            <p>
              I sistemi informatici e le procedure software preposte al funzionamento di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser). Tali dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento. I dati potrebbero essere utilizzati per l'accertamento di responsabilità in caso di ipotetici reati informatici.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">5. Base giuridica del trattamento</h3>
            <p>
              Il trattamento dei dati di navigazione si basa sul legittimo interesse del titolare (art. 6, par. 1, lett. f del Regolamento UE 2016/679 – GDPR) a garantire la sicurezza e il corretto funzionamento del sito.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">6. Conservazione dei dati</h3>
            <p>
              I dati di navigazione non vengono conservati oltre il tempo strettamente necessario alla fornitura del servizio richiesto, salvo eventuali necessità di accertamento di reati da parte dell'autorità giudiziaria.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">7. Diritti dell'interessato</h3>
            <p>
              Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione, la limitazione del trattamento, la portabilità e di opporsi al trattamento. Per esercitare tali diritti è possibile contattare il Titolare all'indirizzo email indicato al punto 1.
            </p>
            <p className="mt-2">
              L'utente ha inoltre il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-[#162556] mb-1">8. Aggiornamenti</h3>
            <p>
              La presente Privacy Policy è aggiornata al 2026 e potrà essere soggetta a modifiche. Si invita a consultarla periodicamente.
            </p>
          </section>

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
