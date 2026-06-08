import { useState } from "react";
import { Clock } from "lucide-react";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-[#101828] text-white font-parag pt-[18px] md:pt-[22px] pb-[10px] px-[5%] lg:pr-0">
        {/* Tablet e desktop: stessa struttura a 3 colonne */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-16">
          {/* Colonna 1 */}
          <div>
            <h3 className="font-titles text-[20px] lg:text-[22px] font-bold mb-[14px] lg:mb-[22px] whitespace-nowrap">
              Cicala <span className="text-[#1570EF]">Riparazioni</span>
            </h3>
            <p className="text-[12px] lg:text-[13px] leading-[14px] lg:leading-[13px] text-white/90 max-w-[190px]">
              Il punto di riferimento a Grottaglie per riparazioni
              industriali, macchine agricole e lavorazioni in ferro.
              Professionalità e rapidità al tuo servizio.
            </p>
          </div>

          {/* Colonna 2 */}
          <div>
            <h3 className="font-titles text-[20px] lg:text-[22px] font-bold mb-[8px] flex items-center gap-[4px] whitespace-nowrap">
              <Clock size={13} strokeWidth={2} className="text-[#1570EF]" />
              Orari di Apertura
            </h3>
            <div className="w-[54px] h-[2px] bg-[#1570EF] mb-[12px]" />
            <div className="w-[138px] text-[12px] lg:text-[13px]">
              <div className="flex justify-between border-b border-white/10 pb-[8px]">
                <span>Lun - Ven:</span>
                <span>7:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-[8px]">
                <span>Sabato:</span>
                <span>7:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 py-[8px]">
                <span>Domenica:</span>
                <span className="text-white/35">Chiuso</span>
              </div>
            </div>
          </div>

          {/* Colonna 3 */}
          <div>
            <h3 className="font-titles text-[20px] lg:text-[22px] font-bold mb-[14px] lg:mb-[22px] whitespace-nowrap">
              Note legali
            </h3>
            <div className="text-[12px] lg:text-[14px] leading-[19px] lg:leading-[21px] text-white/85">
              <p>Cicala Riparazioni di Cicala Ciro</p>
              <p>P.IVA: 03405210737</p>
              <p>Via Ennio, 167 int.1</p>
            </div>
          </div>
        </div>

        {/* Mobile: titolo sopra, solo orari e note legali affiancati */}
        <div className="md:hidden">
          <h3 className="font-titles text-[25px] font-bold mb-[4px] whitespace-nowrap">
            Cicala <span className="text-[#1570EF]">Riparazioni</span>
          </h3>

          <div className="border-t border-white/25 pt-[10px] grid grid-cols-[1fr_1.15fr] gap-4 items-start">
            <div className="min-w-0">
              <h3 className="font-titles text-[16px] font-bold text-[#1570EF] mb-[4px] whitespace-nowrap">
                Orari
              </h3>
              <div className="text-[10px] min-[390px]:text-[11px] leading-[17px] font-bold whitespace-nowrap">
                <p>Lun - Ven: 7:00 - 19:00</p>
                <p>Sabato: 7:00 - 19:00</p>
                <p className="text-white/35">Domenica: Chiuso</p>
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="font-titles text-[16px] font-bold text-[#1570EF] mb-[4px] whitespace-nowrap">
                Note legali
              </h3>
              <div className="text-[10px] min-[390px]:text-[11px] leading-[17px] text-white/85 whitespace-nowrap">
                <p>P.IVA: 01234567890</p>
                <p>C.F.: CCLMRA70A01E123Y</p>
                <p>REA: TA-123456</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-[18px] md:mt-[20px] pt-[8px] flex items-center justify-between gap-4 text-[9px] md:text-[10px] text-white/30 whitespace-nowrap">
          <p className="md:hidden">© 2026 Cicala Riparazioni.</p>
          <p className="hidden md:block">© 2026 Cicala Riparazioni. Tutti i diritti riservati.</p>
          <div className="flex gap-[14px] md:gap-[18px] md:px-[5%]">
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-white/60 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  );
}
