import { Text, View ,Button} from "react-native";
import React from "react";

function ProfileScreen(props){
    return(
        <View>
           <Text>{props.route.params.name} </Text>
           <Button title="User Btn"
            onPress={() => props.navigation.navigate("User")}
            />
        </View>
    )
}
export default ProfileScreen;