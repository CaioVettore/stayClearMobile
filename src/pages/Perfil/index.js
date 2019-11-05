import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import background from '../../assets/background.jpg'
import profile from '../../assets/profile.jpg'

function Perfil() {
    return (
        <ImageBackground source={background} style={styles.background}>

            <Icon name="dehaze" color="#2F3236" style={styles.menu} ></Icon>

            <Image source={profile} style={styles.conProfile}></Image>


            <View>



                <Text style={styles.font}>

                    Professional Profile

                </Text >
                <View style={styles.portifolio} >
                    <TextInput placeholder='inform your portfolio' style={styles.textArea}></TextInput>
                </View>


            <TouchableOpacity style={styles.btn}>
                <Text>Add your friends</Text>
            </TouchableOpacity>


            </View>
        </ImageBackground >
    )

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
        width: 290,
        height: 290,
        marginTop: 0,

    },
    font: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 20

    },
    portifolio: {
        marginTop: 25,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#570985",
        width: '80%',

    },
    btn: {
        marginTop: 130,

    },
    menu: {
        fontSize: 30,
        color: "#2F3236",
        left: 160,
        marginTop: 15,

    },
    textArea:{
        height:120,
        justifyContent:'flex-start'
    }


})

export default Perfil

