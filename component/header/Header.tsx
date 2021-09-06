import React from "react";
import { View, StyleSheet, TouchableOpacity ,Text} from "react-native";
import Constant from "expo-constants";
import { AntDesign } from "@expo/vector-icons";

function Header({ navigation }: { navigation: any }) {
  return (
    <View style={styles.firstContainer}>
      
       <Text style={{textAlign:"center",color:"#4ba3c7",fontWeight:"bold",fontSize:25}}>RICK AND MORTY</Text>
      
    </View>
  );
}
export default Header;
const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: "#efdcd5",
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    marginTop: Constant.statusBarHeight,
    padding: 8,
  },
  secondContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 10,
  },
  touhableContainer: {
    width: 60,
    height: 60,
  },
});