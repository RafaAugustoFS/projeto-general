import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
 
export default function Contato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
 
  const enviarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }
 
    const novoContato = { nome, telefone };
 
    try {
      const resposta = await axios.post("http://10.0.2.2:3000/Contatos", novoContato);
      if (resposta.status === 201) {
        Alert.alert("Contato criado com sucesso!");
      } else {
        Alert.alert("Erro ao criar o contato.");
      }
    } catch (error) {
      Alert.alert("Erro ao enviar o contato. :U");
    }
  };
 
  return (
    <View style={style.container}>
      <Text>Tela de Contato</Text>
      <Text style={style.label}>Nome</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={style.label}>Telefone</Text>
      <TextInput
        style={style.input}
        placeholder="Digite seu telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <Button title="Enviar Informações" onPress={enviarContato} />
    </View>
  );
}
 
const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});