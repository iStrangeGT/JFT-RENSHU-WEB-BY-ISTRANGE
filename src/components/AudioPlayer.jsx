import { useRef, useState } from "react";

/**
 * AudioPlayer — tombol play untuk soal 聴解 (listening).
 * Memakai Web Speech API browser (SpeechSynthesis) untuk membaca
 * dialog bahasa Jepang baris per baris. Naskah ditampilkan setelah
 * user menjawab (dikontrol lewat prop showScript dari parent).
 */
export default function AudioPlayer({ script, showScript }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cancelledRef = useRef(false);

  const lines = script
    .split("\n")
    .map((line) => line.replace(/^[^：]*：/, ""))
    .filter(Boolean);

  function handlePlay() {
    if (!("speechSynthesis" in window)) {
      alert("このブラウザは音声読み上げに対応していません。文字を表示します。");
      return;
    }

    window.speechSynthesis.cancel();
    cancelledRef.current = false;
    setIsPlaying(true);

    let i = 0;
    function speakNext() {
      if (cancelledRef.current || i >= lines.length) {
        setIsPlaying(false);
        return;
      }
      const utter = new SpeechSynthesisUtterance(lines[i]);
      utter.lang = "ja-JP";
      utter.rate = 0.95;
      utter.onend = () => {
        i++;
        speakNext();
      };
      window.speechSynthesis.speak(utter);
    }
    speakNext();
  }

  return (
    <div className="flex items-center gap-3.5 bg-washi-deep border border-dashed border-stone rounded-xl px-4 py-3.5 mb-5">
      <button
        onClick={handlePlay}
        aria-label="音声を再生する"
        className="w-[46px] h-[46px] rounded-full bg-ink text-white border-none cursor-pointer text-[1.1rem] flex-shrink-0 flex items-center justify-center hover:bg-torii transition-colors"
      >
        {isPlaying ? "❙❙" : "▶"}
      </button>
      <div>
        <div className="text-[0.85rem] text-ink-soft">
          音声を　きいて、質問に　答えてください。（クリックして　再生）
        </div>
        {showScript && (
          <div className="text-base text-ink mt-1.5 leading-relaxed whitespace-pre-line">
            {script}
          </div>
        )}
      </div>
    </div>
  );
}
