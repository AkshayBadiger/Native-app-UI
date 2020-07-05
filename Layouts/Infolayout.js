import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';



export default function Infolayout({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>welcome to my Native app!</Text>
      <Text style={styles.Welcome}>Thank you for logging in.</Text>
      <View style={styles.btnContainer}>
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
  
});