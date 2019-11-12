import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import background from '../../assets/background.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
                    <Icon name='replay' color='#000' style={styles.iconsStyle} />
                    <Icon name='replay' color='#000' style={styles.iconsStyle} />
                    <Icon name='replay' color='#000' style={styles.iconsStyle} />

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
        backgroundColor: '#8754C9',
        borderRadius: 15,
        opacity: 0.95,
    },
    userCardText: {
        width: 387,
        height: 164,
        backgroundColor: '#505B77',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        opacity: 0.85,
        alignItems: 'center',

    },
    textUserCardText: {
        color: '#fff',
        fontSize: 20
    },
    iconsStyle: {
        right: 0,
        width: 99,
        fontSize: 80,
        justifyContent: 'center'

    },
    containerIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:80,
        alignItems:'center'
       
    }
})

export default AddFriends