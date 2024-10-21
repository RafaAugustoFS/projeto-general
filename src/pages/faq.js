import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Faq() {
    const [faq, setFaq] = useState([]);

    const listQuestions = () =>{
        axios
        .get("http://10.0.2.2:3000/Faq")
      .then((response) => {
        setFaq(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar perguntas", error);
      });
    }

    useEffect(() =>{
        listQuestions();
    }, [])
  return (
    <View style={style.container}>
        <Text style={style.title}>Perguntas frequentes</Text>
        {faq.length > 0 ? (
        faq.map((perguntas, index) => (
          <View key={index} style={style.contatoItem}>
            <Text style={style.contatoItem}>{perguntas.pergunta}</Text>
            <Text style={style.contatoItem}>{perguntas.resposta}</Text>
          </View>
        ))
      ) : (
        <Text>Nenhum contato disponível</Text>
      )}
    </View>
  )
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