export default function ProgressBar({ current, total, score }) {
  const pct = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="flex items-center gap-3.5 mt-4 text-[0.85rem] text-ink-soft">
      <span className="whitespace-nowrap">
        問題 {Math.min(current + 1, total)} / {total}
      </span>
      <div className="flex-1 h-2 bg-washi-deep rounded-md overflow-hidden border border-paper-line">
        <div
          className="h-full bg-matcha transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="bg-ink text-white px-3.5 py-1 rounded-full font-bold text-[0.8rem] whitespace-nowrap">
        正解 {score}
      </span>
    </div>
  );
}
