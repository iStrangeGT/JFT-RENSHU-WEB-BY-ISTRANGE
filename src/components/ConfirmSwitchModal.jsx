/**
 * ConfirmSwitchModal — muncul saat user mencoba pindah section
 * padahal progress section saat ini belum selesai.
 * Semua teks dalam bahasa Jepang sesuai permintaan.
 */
export default function ConfirmSwitchModal({ targetLabel, onConfirm, onCancel }) {
  return (
    <div
      className="fixed inset-0 bg-ink/55 flex items-center justify-center p-5 z-50"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="bg-washi border-2 border-ink rounded-2xl p-7 max-w-sm w-full shadow-[8px_8px_0_rgba(31,41,55,0.12)]">
        <div className="text-[0.72rem] tracking-widest text-torii font-bold uppercase mb-2">
          確認 ・ Konfirmasi
        </div>
        <div className="font-serif text-xl font-extrabold text-ink mb-3">
          本当に移動しますか？
        </div>
        <p className="text-sm text-ink-soft leading-relaxed mb-6">
          「{targetLabel}」に移動すると、今の問題の進み具合（スコア）は
          すべて<span className="font-bold text-torii">リセット</span>
          されます。よろしいですか。
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-paper-line text-ink-soft rounded-lg py-2.5 font-bold text-sm hover:border-ink hover:text-ink transition-colors"
          >
            やめる
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 bg-torii text-white rounded-lg py-2.5 font-bold text-sm hover:bg-torii-deep transition-colors"
          >
            移動する
          </button>
        </div>
      </div>
    </div>
  );
}
