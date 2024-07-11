import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import Question from '../components/Question';
import { Container } from '../components/Container';
import { PAGES } from '../utils/pages';
import { questions } from '../utils/questions';


export default function Quiz({ navigate, setScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswerOptionClick = (selectedOption) => {
    setTotalScore(totalScore + questions[currentQuestionIndex].scores[selectedOption]);

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setScore(totalScore);
      navigate(PAGES.RESULT, {});
    }
  };

  return (
    <Container>
      <Text style={styles.header}>Que tipo de dev você é?</Text>
      <Question
        question={questions[currentQuestionIndex]}
        onOptionClick={handleAnswerOptionClick}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
});
