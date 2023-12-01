import React from "react";
import 'react-native-gesture-handler';
import HomeScreen from "./Screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./Screens/UserScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const StackNav=()=>{
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator initialRouteName="Home" 
        screenOptions={{headerShown:false}}
        >
                 <Stack.Screen name="Home" component={HomeScreen} /> 
                 <Stack.Screen name="User" component={UserScreen} /> 
                 <Stack.Screen name="Profile" component={DrawerNav} 
                 options={{
                    headerShown:false
                 }}
                 /> 
             </Stack.Navigator>
    )
}

const DrawerNav=()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator
        >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="User" component={UserScreen} /> 
                <Drawer.Screen name="Profile" component={ProfileScreen}/>  
             </Drawer.Navigator>
    )
}


function App(){
    
    return(
        <NavigationContainer>
             <StackNav />
        </NavigationContainer>
    )
}

export default App;