const LABELS = ["A", "B", "C", "D"];

/**
 * ChoiceList — menampilkan 4 pilihan jawaban.
 * selectedIndex: index yang dipilih user (null jika belum jawab)
 * correctIndex: index jawaban benar (untuk styling setelah dijawab)
 */
export default function ChoiceList({ choices, selectedIndex, correctIndex, onSelect }) {
  const answered = selectedIndex !== null;

  return (
    <div className="grid gap-2.5">
      {choices.map((choice, i) => {
        const isSelected = i === selectedIndex;
        const isCorrect = i === correctIndex;

        let stateClasses = "border-paper-line bg-washi hover:border-ink hover:bg-white";
        if (answered) {
          if (isCorrect) {
            stateClasses = "border-matcha bg-matcha-soft";
          } else if (isSelected) {
            stateClasses = "border-torii bg-[#FBEAE7]";
          } else {
            stateClasses = "border-paper-line bg-washi opacity-70";
          }
        }

        let labelClasses = "border-stone text-ink-soft";
        if (answered && isCorrect) labelClasses = "bg-matcha text-white border-matcha";
        else if (answered && isSelected) labelClasses = "bg-torii text-white border-torii";

        return (
          <div
            key={i}
            onClick={() => !answered && onSelect(i)}
            className={[
              "flex items-center gap-3.5 border-[1.5px] rounded-xl px-4 py-3.5 text-[1.05rem] transition-colors duration-150",
              answered ? "cursor-default" : "cursor-pointer",
              stateClasses,
            ].join(" ")}
          >
            <span
              className={[
                "w-[26px] h-[26px] rounded-full border-[1.5px] flex items-center justify-center text-[0.78rem] font-bold flex-shrink-0",
                labelClasses,
              ].join(" ")}
            >
              {LABELS[i]}
            </span>
            <span>{choice}</span>
          </div>
        );
      })}
    </div>
  );
}
