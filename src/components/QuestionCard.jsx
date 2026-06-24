import { useState } from "react";
import AnswerStamp from "./AnswerStamp";
import ChoiceList from "./ChoiceList";
import ExplainBox from "./ExplainBox";
import AudioPlayer from "./AudioPlayer";
import ReadingPassage from "./ReadingPassage";

/**
 * QuestionCard — kartu satu soal lengkap: tag, passage/audio (jika ada),
 * pertanyaan, pilihan jawaban, stempel hasil, dan penjelasan.
 *
 * questionNumber: nomor urut soal (1-based) untuk badge bundar.
 * onAnswered(isCorrect): dipanggil sekali saat user memilih jawaban.
 */
export default function QuestionCard({ question, questionNumber, sectionLabel, onAnswered }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const answered = selectedIndex !== null;

  function handleSelect(index) {
    if (answered) return;
    setSelectedIndex(index);
    onAnswered(index === question.answer);
  }

  return (
    <div className="bg-white border-[1.5px] border-ink rounded-2xl px-7 py-[30px] relative shadow-[5px_5px_0_rgba(31,41,55,0.06)] overflow-hidden">
      <span className="inline-flex items-center justify-center w-[30px] h-[30px] bg-ink text-white rounded-full text-[0.85rem] font-bold mr-2.5">
        {questionNumber}
      </span>
      <span className="text-[0.72rem] text-torii font-bold tracking-wide border border-torii rounded-full px-2.5 py-0.5 inline-block">
        {question.tag || sectionLabel}
      </span>

      <AnswerStamp visible={answered} correct={selectedIndex === question.answer} />

      {question.passage && <ReadingPassage passage={question.passage} />}
      {question.script && (
        <AudioPlayer script={question.script} showScript={answered} />
      )}

      <div
        className="text-[1.3rem] leading-relaxed font-medium my-1.5 mb-[22px]"
        dangerouslySetInnerHTML={{ __html: question.prompt }}
      />

      <ChoiceList
        choices={question.choices}
        selectedIndex={selectedIndex}
        correctIndex={answered ? question.answer : null}
        onSelect={handleSelect}
      />

      <ExplainBox visible={answered} explain={question.explain} />
    </div>
  );
}
