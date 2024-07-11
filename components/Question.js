import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Question({ question, onOptionClick }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option, index) => (
        <View key={index} style={styles.optionContainer}>
          <Button
            title={option}
            onPress={() => onOptionClick(option)}
            style={styles.optionButton}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  optionContainer: {
    marginVertical: 5, 
    width: '80%',
  },
  optionButton: {
    marginBottom: 10,
  },
});
