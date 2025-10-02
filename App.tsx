import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/matca.jpg")} // 
      style={styles.background}
    >
      <View style={styles.overlay}>
  <Text style={styles.title}>Rasakan Kehangatan{"\n"}dalam Secangkir Matcha</Text>
  <Text style={styles.subtitle}>
    Setiap tegukan matcha membawa ketenangan, kehangatan, dan energi baru. 
    Nikmati momen sederhana yang penuh makna.
  </Text>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Nikmati Sekarang</Text>
  </TouchableOpacity>
</View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    padding: 24,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00C896",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
