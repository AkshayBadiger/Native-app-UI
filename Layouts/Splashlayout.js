import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';



export default function Splashlayout({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>NATIVE APP!</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.userBtn}
        onPress={() =>{
          navigation.navigate('Loginlayout')
       }}
        >
          <Text style={styles.btnTxt}>Get started!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "#111111", 
  },
  userBtn: {
    backgroundColor: "#B10DC9",
    padding: 15,
    width: "45%"
  },
  btnTxt:{
    fontSize: 18,
    textAlign: "center"
  }
});
