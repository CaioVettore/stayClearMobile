import React from 'react'
import {
    View, Image, TextInput, ImageBackground, StyleSheet
} from 'react-native'
import background from '../../assets/background.jpg'

function Register() {
    return (
        <ImageBackground source={background} style={styles.background} >

            <View style={styles.logo}>
                <Image source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.viewRegister}>
                <TextInput style = {styles.viewRegister} />
                <TextInput style = {styles.viewRegister} />
                <TextInput style = {styles.viewRegister}/>
            </View>


        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    logo: {
        marginTop: 8,
        position: "absolute",
        width: 350,
        height: 350,
        alignItems: "center",
    },
    viewRegister: {
        marginTop: 350,
        alignItems: "center",
       
        width:"90%",
        color:'#ffffff'
        

    },
    textInput:{
        borderBottomColor:'#ffffff',
        borderBottomWidth: 1,
    }
})

//Exportando nosso componente de Cadastro 
export default Register