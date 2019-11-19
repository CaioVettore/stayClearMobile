import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, FlatList, Image } from 'react-native'
import background from '../../assets/background.jpg'
import CardConversations from '../../components/Conversations'
class Coversations extends Component {
    render() {
        return (

            <ImageBackground source={background} style={styles.background}>

                <View style={styles.backgroundFundo}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <CardConversations avatar={item.avatar} name={item.name} msng={item.msng} />}
                        keyExtractor={item => item.id}
                    />
                </View>

            </ImageBackground>
        )
    }
}
const DATA = [
    {
        id: 1,
        avatar: 'https://yt3.ggpht.com/a/AGF-l79K8-Pshr3u5z-n34-zJpyP66BOFV_Z6l-4uw=s900-c-k-c0xffffffff-no-rj-mo',
        name: 'Caiozinho',
        msng: 'Olokinho meu!'
    },
    {
        id: 2,
        avatar: 'https://i.ytimg.com/vi/CHJOCVN74wU/maxresdefault.jpg',
        name: 'japinga',
        msng: 'SE é LOCO MEU!!!!!!'

    },
    {
        id: 3,
        avatar: 'https://i.pinimg.com/236x/66/91/92/66919268408c0510734819cf016cfe49.jpg',
        name: 'Ferdinando',
        msng: 'SE é LOCO MEU!!!!! rapa!!!!!!!!!!!!'

    },
    {
        id: 4,
        avatar: 'https://pbs.twimg.com/profile_images/1148273143800311808/lBsS4GpP_400x400.jpg',
        name: 'Andsun',
        msng: 'SE é LOCO MEU!!!!! rapa!!!!!!!!!!!!'

    }
];

const styles = StyleSheet.create({
    background: {
        flex: 1,
        

    },
    backgroundFundo: {
        backgroundColor: '#2D3237',
        margin:10,
        flex:1,
        borderRadius:20,
        opacity:0.95,
        marginTop:"10%"

    }


})
export default Coversations