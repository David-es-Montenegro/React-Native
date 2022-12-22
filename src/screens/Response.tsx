import React from "react";
import { View, Button } from "react-native";
import { useEffect, useState } from "react"
import { FlatList } from "react-native-gesture-handler";

type Repository = {
  full_name: string;
  description: string;
}

export function Response({ navigation }) {
    function openScreen(){
        navigation.navigate('Response');
    }
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
      fetch ('https://api.github.com/users/diego3g/repos')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
      })
    },[])

    return(
      <View>
        {repositories.map(repo =>{
          return(
            <FlatList key={repo.full_name}>
            <Text>{repo.full_name}</Text>
            <Text>{repo.description}</Text>
        </FlatList>
        )})}
      </View>
    )
}