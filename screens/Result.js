import React from "react";
import { Text, Button, StyleSheet } from "react-native";
import { Container } from "../components/Container";
import { PAGES } from "../utils/pages";

const getResultMessage = (score) => {
  if (score < 3) return "Você é um Dev Nutella";
  if (score < 7) return "Você está no meio termo";
  return "Você é um Dev Raiz";
};

export default function Result({ navigate, userData, score }) {
  return (
    <Container>
      <Text style={styles.resultText}>
        Parabéns, {userData.name}! Seu resultado foi:
      </Text>
      <Text style={styles.result}> {getResultMessage(score)}</Text>
      <Text style={styles.resultText}>
        Ele será enviado para o seu email: {userData.email}
      </Text>

      <Button title="Voltar ao Início" onPress={() => navigate(PAGES.HOME)} />
    </Container>
  );
}

const styles = StyleSheet.create({
  result: {
    fontSize: 20,
    marginVertical: 10,
    color:'blue',
  },
  resultText: {
    fontSize: 20,
    marginVertical: 10,
  },
});
