import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Axios from 'axios'

import {
    View,
    Image,
    TextInput,
    ImageBackground,
    StyleSheet,
    Picker,
    TouchableOpacity,
    Text,
    ScrollView,
    Alert
} from 'react-native'

import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'


class Register extends Component {

    state = {

        name: '',
        email: '',
        password: '',
        category: ''
    }
    //logica do btn
    handleSubmit = async () => {
        const testeAxios = await Axios.post('http://10.51.47.66:3334/users',this.state)
        console.log(testeAxios)
    }

    render() {

        return (
            <ScrollView>
                <ImageBackground source={background} style={styles.background} >
                    <View style={styles.viewReturn}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name='arrow-back' size={40} color='#570985' ></Icon>
                        </TouchableOpacity>
                    </View>


                    <Image source={logo} />

                    <View style={styles.viewRegister}>

                        <TextInput style={styles.textInput} placeholder="Digite seu nome" onChangeText={(text) => this.setState({ name: text })} />
                        <TextInput style={styles.textInput} placeholder="Digite seu e-mail" onChangeText={(text) => this.setState({ email: text })} />
                        <TextInput style={styles.textInput} placeholder="DIgite sua senha" onChangeText={(text) => this.setState({ password: text })} secureTextEntry ={true}/>

                        <View style={styles.picker}>

                            <Picker selectedValue={this.state.category} onValueChange={(value) => this.setState({ category: value })} >
                                <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
                                <Picker.Item label="Estudante" value="Estudante" />
                                <Picker.Item label="Professor" value="Professor" />
                                <Picker.Item label="Fisico" value="Fisico" />
                            </Picker>

                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit()}>
                            <Text style={styles.textBtn}>
                                Cadastrar
                    </Text>
                        </TouchableOpacity>



                    </View>



                </ImageBackground>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    background: {

        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: 'center',

    },
    viewRegister: {
        width: "70%",



    },
    textInput: {
        borderBottomColor: '#2f3236',
        borderBottomWidth: 1,
        textAlign: 'center'

    },
    btn: {
        backgroundColor: '#2f3236',
        padding: 15,
        borderRadius: 10,
        marginTop: 12,
        textAlign: 'center',

    },
    textBtn: {
        color: '#ffffff',
        textAlign: 'center'
    },
    picker: {
        marginTop: 40,
        borderColor: '#570985',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderRadius: 10

    },
    iconsStyle: {
        position: "absolute",
        right: 0,
        fontSize: 20,
    },
    viewReturn: {
        paddingRight: '85%'
    }


})

//Exportando nosso componente de Cadastro 
export default Register