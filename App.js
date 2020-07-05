import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

 
import Loginlayout from './Layouts/Loginlayout';
import Splashlayout from './Layouts/Splashlayout';
import Infolayout from './Layouts/Infolayout';
import Signuplayout from './Layouts/Signuplayout';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const Stack = createStackNavigator();


const App = () => {

 return (
   <NavigationContainer>
     <Stack.Navigator
     screenOptions={{
       headerStyle:{
          backgroundColor: '#DDDDDD',

       },
     }}>
       <Stack.Screen name={'Splashlayout'} component={Splashlayout} />
       <Stack.Screen name={'Loginlayout'} component={Loginlayout} />
       <Stack.Screen name={'Infolayout'} component={Infolayout}/>
       <Stack.Screen name={'Signuplayout'} component={Signuplayout} />
     </Stack.Navigator>
   </NavigationContainer>
 );

}

export default App;
