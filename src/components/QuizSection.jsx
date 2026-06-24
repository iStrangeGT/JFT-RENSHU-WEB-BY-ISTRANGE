import { useState } from "react";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

/**
 * QuizSection — mengatur jalannya kuis untuk satu bagian (mojigoi/hyougen/dst).
 * Dipasang dengan `key` di App.jsx supaya otomatis remount (reset total)
 * setiap kali user pindah ke section yang berbeda.
 */
export default function QuizSection({ questions, sectionMeta }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const total = questions.length;
  const isFinished = currentIndex >= total;

  function handleAnswered(isCorrect) {
    setAnswered(true);
    if (isCorrect) setScore((s) => s + 1);
  }

  function goNext() {
    setAnswered(false);
    setCurrentIndex((i) => i + 1);
  }

  function handleRetry() {
    setAnswered(false);
    setCurrentIndex(0);
    setScore(0);
  }

  return (
    <div>
      <ProgressBar current={currentIndex} total={total} score={score} />

      <div className="mt-6">
        {isFinished ? (
          <ResultCard
            score={score}
            total={total}
            sectionLabel={sectionMeta.jp}
            onRetry={handleRetry}
          />
        ) : (
          <>
            <QuestionCard
              key={currentIndex}
              question={questions[currentIndex]}
              questionNumber={currentIndex + 1}
              sectionLabel={sectionMeta.jp}
              onAnswered={handleAnswered}
            />
            <div className="flex justify-between items-center mt-5">
              <button
                onClick={goNext}
                className="border border-paper-line text-ink-soft rounded-lg px-6 py-2.5 font-bold text-[0.92rem] hover:border-ink hover:text-ink transition-colors"
              >
                あとで（スキップ）
              </button>
              <button
                onClick={goNext}
                disabled={!answered}
                className={[
                  "rounded-lg px-6 py-2.5 font-bold text-[0.92rem] transition-colors",
                  answered
                    ? "bg-ink text-white hover:bg-torii-deep"
                    : "bg-ink text-white opacity-35 cursor-not-allowed",
                ].join(" ")}
              >
                次へ →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
