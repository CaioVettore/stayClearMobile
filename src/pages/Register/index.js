import React from 'react'
import {
    View, Image, TextInput, ImageBackground, StyleSheet
} from 'react-native'
import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'
function Register() {
    return (
        <ImageBackground source={background} style={styles.background} >


            <Image source={logo}/>

            <View style={styles.viewRegister}>
                <TextInput style={styles.textInput} />
                <TextInput style={styles.textInput} />
                <TextInput style={styles.textInput} />
            </View>


        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo: {
        marginTop: 8,
        width: 350,
        height: 350,
        alignItems: "center",
    },
    viewRegister: {
        marginTop: 5,
        alignItems: "center",
        color: '#ffffff'


    },
    textInput: {
        borderBottomColor: '#2f3236',
        borderBottomWidth: 1,
    }
})

//Exportando nosso componente de Cadastro 
export default Register