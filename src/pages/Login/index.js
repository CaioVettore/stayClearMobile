import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg' //Imagem de fundo
import logo from '../../assets/logo.png'

function Login() {
    return (
        <ImageBackground source={background} style={styles.background}>
            <Image source={logo} />

            <View style={styles.viewLogin}>
                <View style={styles.sectionStyle}>
                    <Icon name="email" color="#ffffff" style={styles.iconsStyle} ></Icon>
                    <TextInput placeholder='Digite seu e-mail' placeholderTe0xtColor='#fff' style={styles.input} />
                </View>
                <View>
                    <Icon name="lock" color="#ffffff" ></Icon>
                    <TextInput placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

//Nossos estilos de páginas
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewLogin: {
        backgroundColor: '#2F3236',
        width: '90%',
        padding: 15,
        marginTop: 40
    },
    input: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 5,
        alignItems: 'center'
    },
    sectionStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconsStyle: {
        position: "absolute",
        paddingRight: 280,
        resizeMode: 'stretch',
        fontSize: 30
    }
})

export default Login