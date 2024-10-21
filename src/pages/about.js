import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function About() {
  const [contatos, setContatos] = useState([]);

  // função para buscar contatos do servidor
  const listContatos = () => {
    axios
      .get("http://10.0.2.2:3000/Contatos")
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar contatos", error);
      });
  };

  useEffect(() => {
    listContatos();
  }, []);
  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de contatos</Text>
      {contatos.length > 0 ? (
        contatos.map((contato, index) => (
          <View key={index} style={style.contatoItem}>
            <Text style={style.contatoItem}>{contato.nome}</Text>
            <Text style={style.contatoItem}>{contato.telefone}</Text>
          </View>
        ))
      ) : (
        <Text>Nenhum contato disponível</Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#F6EFBD"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contatoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  noContacts: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20
  }
});
