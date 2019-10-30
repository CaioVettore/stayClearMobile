import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

function Login() {
    return (
        <View style = {styles.container}>
            <Image source = {require ('../../assets/background.jpg')} />

            <View style = {styles.logo}>
                <Image source = {require('../../assets/logo.png')} />
            </View>

        </View>


    )
}
const styles = StyleSheet.create({
container:{
    alignItems:"center",
    flex: 1     
},
logo:{
    position: "absolute",
    width: 200,
    height: 200,
    alignItems: "center",
},



})
export default Login