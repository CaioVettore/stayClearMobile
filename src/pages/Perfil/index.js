import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg'
import profile from '../../assets/profile.jpg'
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
class Perfil extends React.Component {

    //estado da nossa apk

    state = {
        //photo, ele ira armazenar o caminho do nosso avatar no smartphone
        photo: '',
        description: '',
        telephone: '',
        id: '',
        token: '',
    }
    //alterando imagem de perfil

    //Nosso component DidMout
    //DidMout é executado após renderizar nosso componente
  async componentDidMount() {

        //pegando nosso user do local storage
        const user = await AsyncStorage.getItem('@user')
        console.log(user)

        //transformando nossa string em objeto
        const { userExists,token } = JSON.parse(user)

        //setando o id do nosso usuario no estado
        this.setState({ id: userExists.id, token: token })

    



    }

    handleChooseAvatar() {


        ImagePicker.showImagePicker(response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source =  response.uri;

                this.setState({
                    photo: source
                })

                console.log(source)
            }
        });
    }
    //Envia dados do usuario
    async handleSubmit() {

        //pegando o id do usuario do state
        const { id, token } = this.state



        //Enviado nossas propriedades do state para nossa rota de update
        const { data } = await Axios.put(`http://10.51.47.24:3334/users/${id}`, this.state, {
            headers: { Authorization: "Bearer " + token }

        })
    }

    render() {
        //pegando nosso avatar de dentro do state
        const { photo } = this.state
        return (
            <ImageBackground source={background} style={styles.background} >
                {/* <Icon name="dehaze" color="#2F3236" style={styles.menu} ></Icon> */}

                <TouchableOpacity onPress={() => this.handleChooseAvatar()}>
                    {
                        photo ?
                            <Image source={photo} style={styles.conProfile} />
                            :
                            < Image source={profile} style={styles.conProfile} ></Image>
                    }
                </TouchableOpacity>


                <View>

                    <Text style={styles.font}>

                        Professional Profile

                </Text >
                    <View style={styles.portifolio} >
                        <TextInput textAlign="center" multiline={true} numberOfLines={8} placeholder='inform your portfolio' style={styles.textArea} onChangeText={(text) => this.setState({ description: text })}></TextInput>
                        <Icon name="edit" color="#570985" style={styles.iconsStyle} ></Icon>
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={() => this.handleSubmit()}>
                        <Text style={styles.textBtn}>Add your friends</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground >
        )
    }
}


//Estilos
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    conProfile: {
        borderRadius: 200,
        width: 310,
        height: 310,
        marginTop: "7%",

    },
    font: {

        marginTop: "15%",
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: "center"

    },
    portifolio: {
        marginTop: 25,
        //borderRadius: 10,
        //borderBottomColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor: "#570985",
        width: '80%',
        alignItems: "center",



    },
    btn: {
        borderRadius: 10,
        marginTop: "16%",
        alignItems: 'center',
        backgroundColor: "#2F3236",
        textDecorationColor: "#ffff",
        padding: 15,

    },
    menu: {
        fontSize: 30,
        color: "#2F3236",
        left: 160,
        marginTop: 15,

    },
    textArea: {
        width: 300,
        height: 120,
        justifyContent: 'flex-start'
    },
    iconsStyle: {
        position: "relative",
        left: 140,
        fontSize: 28,
    },
    textBtn: {
        color: "#ffffff"
    }


})

export default Perfil

