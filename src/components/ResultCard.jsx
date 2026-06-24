/**
 * ResultCard — kartu hasil akhir setelah semua soal di satu section selesai.
 */
export default function ResultCard({ score, total, sectionLabel, onRetry }) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  let comment = "落ち込まないで！もう一度　チャレンジしてみましょう。";
  if (pct >= 80) comment = "すばらしい！この　ペースで　がんばってください。";
  else if (pct >= 50) comment = "もう少しです。もう一度　復習してみましょう。";

  return (
    <div className="bg-ink text-white rounded-2xl px-8 py-10 text-center">
      <div className="text-white/70 text-[0.9rem] tracking-wide">
        RESULT ・ {sectionLabel}
      </div>
      <div className="font-serif text-[3.2rem] font-extrabold my-1.5">
        {score} / {total}
      </div>
      <div className="text-white/70 text-[0.9rem] tracking-wide">
        正解率 {pct}%
      </div>
      <p className="mt-[18px] text-base text-white">{comment}</p>
      <button
        onClick={onRetry}
        className="mt-[22px] bg-torii text-white rounded-lg px-6 py-2.5 font-bold text-[0.92rem] hover:bg-white hover:text-torii transition-colors"
      >
        もう一度　やる
      </button>
    </div>
  );
}
