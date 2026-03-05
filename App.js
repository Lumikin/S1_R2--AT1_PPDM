import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={ styles.conteiner }>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
}

 const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "#00000000",

  },

});
