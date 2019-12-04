import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg' //Imagem de fundo
import logo from '../../assets/logo.png'

import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import Error from '../../components/Error'

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: false,
        erroText: '',
    }

    //Func Responsalvel pelo login
    handleSubmit = async () => {
        //Enviando dados de usuario para rota de autenticação
        const { data } = await Axios.post('http://10.51.47.24:3334/auth', { 
            email: this.state.email, 
            password: this.state.password
         })

        //passando dados do usuário para armazenar no local storage
        if (data.token) {
            this.setStorage(data)
            this.props.navigation.navigate('Perfil')

        }
        //Vericar se foi retornado um erro do nosso backend
        if (data.error) {
            this.setState({ error: true, errorText: data.erro })
        }
    }

    //armazenar dados do usuario no Storage
    setStorage = async (data) => {
        //armazena nossos dados dentro da key @user
        await AsyncStorage.setItem('@user', data)
    }


    render() {
        const { error, errorText } = this.state


        return (
            <ImageBackground source={background} style={styles.background} >
                <Image source={logo} />


                {
                    error &&

                    <Error icon='warning' text={errorText} />
                }


                <View style={styles.viewLogin}>



                    <View>
                        <Icon name="email" color="#ffffff" style={styles.iconsStyle} ></Icon>
                        <TextInput placeholder='Digite seu e-mail' placeholderTextColor='#fff' style={styles.input} onChangeText={(text) => this.setState({ email: text })} />
                    </View>

                    <View style={styles.viewPassword}>
                        <Icon name="lock" color="#ffffff" style={styles.iconsStyle} ></Icon>
                        <TextInput placeholder='Digite sua senha' placeholderTextColor='#fff' style={styles.input} onChangeText={(text) => this.setState({ password: text })} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()} >
                        <Text>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>



                </View>
            </ImageBackground>
        )
    }
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