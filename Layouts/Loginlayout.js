import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default function Loginlayout({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>Signin</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.userBtn}
        onPress={() =>{
          navigation.navigate('Infolayout')
       }}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.userBtn}
        onPress={() =>{
          navigation.navigate('Signuplayout')
       }}
        >
          <Text style={styles.btnTxt}>Signup</Text>
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
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
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
