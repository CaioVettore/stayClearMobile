import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg' //Imagem de fundo
import logo from '../../assets/logo.png'

function Login(props) {
    
    return (
        <ImageBackground source={background} style={styles.background}>
            <Image source={logo} />

            <View style={styles.viewLogin}>


                <View>
                    <Icon name="email" color="#ffffff" style={styles.iconsStyle} ></Icon>
                    <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.input} />
                </View>

                <View style={styles.viewPassword}>
                    <Icon name="lock" color="#ffffff" style={styles.iconsStyle} ></Icon>
                    <TextInput placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
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
        width: '100%',
        padding: 0,
        paddingLeft: 30,
        color: '#ffffff',
        margin: 0,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    button: {
        backgroundColor: '#fff',
        marginTop: 15,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    iconsStyle: {
        position: "absolute",
        right: 0,
        fontSize: 20,
    },
    viewPassword: {
        marginTop: 20,
    }
})

export default Login