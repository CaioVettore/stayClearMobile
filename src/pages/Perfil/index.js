import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg'
import profile from '../../assets/profile.jpg'

class Perfil extends React.Component {

    //estado da nossa apk
    state = {
        avatar: profile,
        name: "caio",
        age:"19",
        height:"1,76"
    }
    //alterando imagem de perfil
    handleChoseAvatar() {
        
        console.log(this.state)
    }

    render() {
        //pegando nosso avatar de dentro do state
        const { avatar,name,age,height } = this.state
        return (
            <ImageBackground source={background} style={styles.background} >
                {/* <Icon name="dehaze" color="#2F3236" style={styles.menu} ></Icon> */}
                
                <Text>(name,age)</Text>

                <TouchableOpacity onPress={() => this.handleChoseAvatar()}>
                    < Image source={profile} style={styles.conProfile} ></Image>
                </TouchableOpacity>


                <View>

                    <Text style={styles.font}>

                        Professional Profile

                </Text >
                    <View style={styles.portifolio} >
                        <TextInput textAlign="center" multiline={true} numberOfLines={8} placeholder='inform your portfolio' style={styles.textArea}></TextInput>
                        <Icon name="edit" color="#570985" style={styles.iconsStyle} ></Icon>
                    </View>

                    <TouchableOpacity style={styles.btn}>
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

