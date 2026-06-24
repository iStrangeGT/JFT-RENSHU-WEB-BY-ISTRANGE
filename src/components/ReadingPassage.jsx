/**
 * ReadingPassage — kotak wacana/teks bacaan untuk soal 読解 (reading).
 */
export default function ReadingPassage({ passage }) {
  return (
    <div className="bg-washi-deep border-l-4 border-gold px-5 py-[18px] rounded-r-xl text-[1.05rem] leading-loose mb-5 whitespace-pre-line">
      {passage}
    </div>
  );
}
