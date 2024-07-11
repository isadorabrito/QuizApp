import React, { useState } from "react";
import { Button, Text, TextInput, StyleSheet } from "react-native";
import { Container } from "../components/Container";
import { PAGES } from "../utils/pages";

export default function Home({ navigate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button
        title="Começar Quiz"
        onPress={() => navigate(PAGES.QUIZ, { name, email })}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "80%",
  },
});
