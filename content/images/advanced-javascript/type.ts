
export type Question {
  question: string;
  answers: string[];
  correct: number;
}

const q: Question = {
  question: "What is 2 + 2?",
  answers: ["3", "4", "5", "22"],
  correct: 1,
};

function printQuestion(q: Question) {
  console.log(q.question, q.answers[q.correct]);
}

printQuestion(q);

/*
printQuestion({
  question: "What is 2 + 2?",
  answers: ["3", "4", "5", "22"],
  correct: 1,
  color: "red",
});
*/
