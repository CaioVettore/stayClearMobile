/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Alert,

} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style = {style.backgroundView}>
      
      <Text style={style.question}>Meu nome: </Text>      
      <Text style={style.respost}> Zé </Text>
      <Text style={style.question}>Cidade: </Text>
      <Text style={style.respost}> Cidade do Morango </Text>
      <Text style={style.question}>Endereço: </Text>
      <Text style={style.respost}> Rua dos moranguinhos </Text>
      <TouchableOpacity style = {style.btn}>
        <Text style={style.respost}>Click</Text>
      </TouchableOpacity> 
      
    </View>
  )
}
const style = StyleSheet.create(
  {
    backgroundView:{
      backgroundColor: '#525252',
      alignItems: 'center',
      height: 300
           
    },
    question: {
      fontSize:20,
      color: '#b58deb'
    },
    respost:{

      fontSize:18,
      color :'#ffffff'

    },
    btn: {
     padding: 10,
     
     backgroundColor: '#4e09ab'
    }
  }
)


const styles = StyleSheet.create();
  

export default App;
