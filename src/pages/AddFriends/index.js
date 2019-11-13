import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'
import background from '../../assets/background.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconIcons from 'react-native-vector-icons/Ionicons'

class AddFriends extends Component {
    render() {
        return (

            <ImageBackground source={background} style={styles.background}>

                <View style={styles.userCard}>
                    <Image source={background} style={styles.userImage} />

                    <View style={styles.userCardText}>
                        <Text style={styles.textUserCardText}>Dolinho Seu Amiguinho</Text>
                    </View>

                </View>
                <View style={styles.containerIcon}>
                    <TouchableOpacity >
                        <Icon name='add-circle' color='#025223' style={styles.iconsStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='remove-circle' color='#520202' style={styles.iconsStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <IconIcons name='md-refresh-circle' color='#9e9c06' style={styles.iconsStyle} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>



        )

    }
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: '100%',
        height: 347,
    },
    userCard: {
        width: 387,
        height: 511,
        backgroundColor: '#2D3237',
        borderRadius: 15,
        opacity: 0.9,
    },
    userCardText: {
        width: 387,
        height: 164,
        backgroundColor: '#2F3236',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        opacity: 0.85,
        alignItems: 'center',


    },
    textUserCardText: {
        color: '#fff',
        fontSize: 23,
        marginTop: 10,

    },
    iconsStyle: {
        fontSize: 100,
        justifyContent: 'center',
        
    

    },
    containerIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        alignItems: 'center',
       
    },
    

})

export default AddFriends