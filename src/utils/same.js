export function computeSameAnswer (correct = 0, userAnswer, correctAnswers, index) {
  if (userAnswer === correctAnswers[index - 1] && correct <= 25) {
    correct++;
  }

  return correct;
}
