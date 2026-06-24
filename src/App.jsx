import { useState } from "react";
import TaskBar from "./components/TaskBar";
import ConfirmSwitchModal from "./components/ConfirmSwitchModal";
import QuizSection from "./components/QuizSection";
import { SECTION_META } from "./data/sectionMeta";

import mojigoiData from "./data/mojigoi";
import hyougenData from "./data/hyougen";
import choukaiData from "./data/choukai";
import dokkaiData from "./data/dokkai";

const QUIZ_DATA = {
  mojigoi: mojigoiData,
  hyougen: hyougenData,
  choukai: choukaiData,
  dokkai: dokkaiData,
};

export default function App() {
  const [activeSection, setActiveSection] = useState("mojigoi");
  const [pendingSection, setPendingSection] = useState(null);
  // sessionKey berubah setiap kali section benar-benar diganti, dipakai
  // sebagai React key agar QuizSection remount total (reset progress).
  const [sessionKey, setSessionKey] = useState(0);

  function handleRequestChange(targetKey) {
    if (targetKey === activeSection) return;
    // Selalu konfirmasi sebelum pindah, karena pindah = mengulang dari awal.
    setPendingSection(targetKey);
  }

  function confirmSwitch() {
    setActiveSection(pendingSection);
    setPendingSection(null);
    setSessionKey((k) => k + 1);
  }

  function cancelSwitch() {
    setPendingSection(null);
  }

  const meta = SECTION_META[activeSection];

  return (
    <div className="min-h-screen bg-washi text-ink font-sans bg-[radial-gradient(circle_at_1px_1px,rgba(139,131,120,0.12)_1px,transparent_0)] bg-[length:22px_22px]">
      <div className="max-w-[1080px] mx-auto px-5 pb-20">
        {/* ---------- Header ---------- */}
        <header className="pt-9 pb-[22px] border-b-[3px] border-ink">
          <div className="text-[0.78rem] tracking-[0.18em] text-torii font-bold uppercase mb-2">
            JFT-Basic 練習サイト ・ Situs Latihan JFT-Basic
          </div>
          <h1 className="font-serif text-[2.6rem] font-extrabold leading-tight text-ink">
            日本語基礎テスト 練習問題
          </h1>
          <div className="mt-2.5 text-ink-soft text-[0.95rem]">
            Latihan soal untuk 4 bagian JFT-Basic — pilih menu di bawah untuk mulai berlatih.
          </div>
        </header>

        {/* ---------- Task bar (menu) ---------- */}
        <TaskBar activeSection={activeSection} onRequestChange={handleRequestChange} />

        {/* ---------- Section intro ---------- */}
        <div className="flex items-baseline gap-4 mt-[34px] border-b border-paper-line pb-3.5">
          <div className="font-serif text-[1.9rem] font-extrabold text-ink">{meta.jp}</div>
          <div className="text-ink-soft text-[0.92rem]">{meta.desc}</div>
        </div>

        {/* ---------- Quiz area ---------- */}
        <div className="mt-6">
          <QuizSection
            key={sessionKey}
            questions={QUIZ_DATA[activeSection]}
            sectionMeta={meta}
          />
        </div>

        {/* ---------- Footer ---------- */}
        <footer className="mt-16 pt-[18px] border-t border-paper-line text-stone text-[0.78rem] text-center">
          JFT-Basic 練習問題 ・ Dibuat untuk latihan mandiri — bukan soal resmi The Japan Foundation
        </footer>
      </div>

      {/* ---------- Confirm modal ---------- */}
      {pendingSection && (
        <ConfirmSwitchModal
          targetLabel={SECTION_META[pendingSection].jp}
          onConfirm={confirmSwitch}
          onCancel={cancelSwitch}
        />
      )}
    </div>
  );
}
