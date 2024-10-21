import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../components/card";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Text style={style.tituloContato}>Seja bem-vindo</Text>
      <Card
        title='Sobre'
        content='Saiba mais sobre nossos serviços.'
        buttonText='ir para sobre'
        onPress={() => navigation.navigate('About')}
      />
      <Text style={style.tituloInfo}>Mais informações</Text>

      <Card
        title='Contato'
        content='Entre em contato conosco.'
        buttonText='ir para contato'
        onPress={() => navigation.navigate('Contact')}
      />

      <Card
        title='História'
        content='Conheça nossa história.'
        buttonText='Nossa história'
        onPress={() => navigation.navigate('History')}
      />

      <Card
        title='Faq'
        content='Tire suas dúvidas.'
        buttonText='Tire suas dúvidas'
        onPress={() => navigation.navigate('Faq')}
      />
    </View>
  );
}

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F6EFBD'
    },
    tituloContato:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign:'center'
    },
    tituloInfo:{
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:20,
        marginBottom: 20,
        textAlign:'center',
    }
});