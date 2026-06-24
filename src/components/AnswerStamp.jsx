/**
 * AnswerStamp — stempel bundar "○" (benar) atau "✕" (salah)
 * yang muncul di pojok kanan-atas kartu soal setelah dijawab.
 */
export default function AnswerStamp({ visible, correct }) {
  return (
    <div
      className={[
        "absolute top-5 right-6 w-[74px] h-[74px] rounded-full border-[5px]",
        "flex items-center justify-center font-serif font-extrabold text-[2.4rem]",
        "transition-transform transition-opacity duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] pointer-events-none",
        correct ? "text-matcha border-matcha" : "text-torii border-torii",
        visible ? "scale-100 opacity-90 rotate-[-14deg]" : "scale-0 opacity-0 rotate-[-14deg]",
      ].join(" ")}
    >
      {correct ? "○" : "✕"}
    </div>
  );
}
