import React from "react";
import { View, Button } from "react-native";

export function Home({ navigation }) {
    function openScreen(){
        navigation.navigate('Response');
    }

    return(
        <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
            <Button
                title="Ver repositorios"
                onPress={openScreen}
            />

        </View>
    )
}