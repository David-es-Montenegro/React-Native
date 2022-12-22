import React, { Component } from "react";
import { View, Button,Text, StyleSheet, TextInput, Platform, FlatList } from "react-native";
import { color, Value } from "react-native-reanimated";


export function Response({ navigation }) {
    function openScreen(){
        navigation.navigate('Response');
    }
    return(
      <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center' }}>
            
        <TextInput
          placeholder="Digite aqui uma marca de motos"
          onChangeText={newText => translate(newText)}
          defaultValue={''}
        
          style={{backgroundColor: '#fff', margin: 40}}
        />

        </View>
    )
}

function translate (marca) {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '26f8ab4f76mshd9fa8a6bb8c4dcbp1d7d1cjsn622064e7e73f',
      'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
    }
  };
  const endpoint = `https://motorcycle-specs-database.p.rapidapi.com/model/make-name/${marca}`;
  fetch(endpoint, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

}