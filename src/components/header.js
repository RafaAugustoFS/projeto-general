import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Header() {

  return (
    <View style={style.header}>
      <Text style={style.tituloHeader}>InfoSASS</Text>
      
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    backgroundColor: "#FF0000",
  },
  tituloHeader: {
    width: "100%",
    textAlign: "center",
    color: "white",
    paddingTop: 60,
    fontWeight: "bold",
    fontSize: 20,
  },
});
