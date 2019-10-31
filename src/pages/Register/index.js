import React from 'react'
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
} from 'react-native'
import background from '../../assets/background.jpg'
import logo from '../../assets/logo.png'
function Register() {
    return (
        <ScrollView>
        <ImageBackground source={background} style={styles.background} >


            <Image source={logo} />

            <View style={styles.viewRegister}>

                <TextInput style={styles.textInput} placeholder="Digite seu nome" />
                <TextInput style={styles.textInput} placeholder="Digite seu e-mail" />
                <TextInput style={styles.textInput} placeholder="DIgite sua senha" />

                <View style={styles.picker}>

                    <Picker >
                        <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
                        <Picker.Item label="Estudante" value="Estudante" />
                        <Picker.Item label="Professor" value="Professor" />
                        <Picker.Item label="Fisico" value="Fisico" />
                    </Picker>

                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>

            </View>



        </ImageBackground>
        </ScrollView>

    )
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
        width: "80%",



    },
    textInput: {
        marginTop: 20,
        borderBottomColor: '#2f3236',
        borderBottomWidth: 1,
        textAlign: 'center'

    },
    btn: {
        backgroundColor: '#2f3236',
        padding: 15,
        borderRadius: 10,
        marginTop: 40,
        textAlign: 'center',

    },
    textBtn: {
        color: '#ffffff',
        textAlign: 'center'
    },
    picker: {
        marginTop: 40,
        borderColor:'#570985',
        borderWidth:2,
        backgroundColor:'#ffffff',
        borderRadius:10

    }



})

//Exportando nosso componente de Cadastro 
export default Register