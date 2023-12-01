import { Text, View ,Button} from "react-native";
import React from "react";

function UserScreen(props){
    return(
        <View>
           <Text>UserScreen </Text>
           <Button title="Go Home"
            onPress={() => props.navigation.navigate("Home")}
            />
        </View>
    )
}
export default UserScreen;