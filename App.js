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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  box1:{
    width: 80,
    height: 80,
    backgroundColor: 'purple',
    padding: 10
  },
  box2:{
    width: 80,
    height: 80,
    backgroundColor: 'green'
  },
  box3:{
    width: 80,
    height: 80,
    backgroundColor: 'blue'
  }

});
