import { SECTION_ORDER, SECTION_META } from "../data/sectionMeta";

/**
 * TaskBar — menu navigasi 4 bagian JFT-Basic.
 * Memanggil onRequestChange(sectionKey) setiap kali user klik menu lain.
 * Logika konfirmasi "yakin pindah?" ditangani di parent (App.jsx).
 */
export default function TaskBar({ activeSection, onRequestChange }) {
  return (
    <nav className="flex border-2 border-ink rounded-xl overflow-hidden bg-white mt-7">
      {SECTION_ORDER.map((key, idx) => {
        const meta = SECTION_META[key];
        const isActive = key === activeSection;
        return (
          <button
            key={key}
            onClick={() => onRequestChange(key)}
            className={[
              "flex-1 px-2 pt-4 pb-3.5 font-sans transition-colors duration-150",
              idx !== SECTION_ORDER.length - 1 ? "border-r-2 border-ink" : "",
              isActive ? "bg-torii text-white" : "bg-washi text-ink hover:bg-washi-deep",
            ].join(" ")}
          >
            <span
              className={[
                "block text-[0.68rem] font-bold tracking-wide mb-1",
                isActive ? "text-white/85" : "text-stone",
              ].join(" ")}
            >
              {meta.num}
            </span>
            <span className="block font-serif text-xl font-bold leading-tight">
              {meta.jp}
            </span>
            <span
              className={[
                "block text-[0.72rem] mt-0.5",
                isActive ? "text-white/85" : "text-ink-soft",
              ].join(" ")}
            >
              {meta.romaji}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
