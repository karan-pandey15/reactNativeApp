import React from 'react';
import { Text, View  } from 'react-native'
import styles from '../style';

function CustomText(props) {
    return (
        <View>
            <View style={styles.viewStyle} >
                <Text> {props.title} </Text>
            </View>
        </View>

    )
}

export default CustomText;