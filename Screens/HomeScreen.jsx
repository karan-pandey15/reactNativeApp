import { Button, Text, View } from "react-native";
import React from "react";

function HomeScreen(props){
    console.log(props);
    return(
        <View>
           <Text>Home Screen</Text>
           <Button title="Profile Btn"
            onPress={() => props.navigation.navigate("Profile" ,{
                name:"Karan"
            })}
            />
        </View>
    )
}
export default HomeScreen;