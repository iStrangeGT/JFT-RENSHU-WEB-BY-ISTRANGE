/**
 * ExplainBox — kotak penjelasan jawaban, muncul setelah user menjawab.
 * explain berisi HTML sederhana (tag <b>) sehingga dirender via dangerouslySetInnerHTML.
 */
export default function ExplainBox({ visible, explain }) {
  if (!visible) return null;

  return (
    <div className="mt-[18px] pt-4 border-t border-dashed border-paper-line text-[0.92rem] text-ink-soft leading-relaxed">
      <b className="text-ink">解説：</b>
      <span dangerouslySetInnerHTML={{ __html: explain }} />
    </div>
  );
}
