import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TextInput, TouchableOpacity, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DATA = [

    {
        id: 1,
        idUser: 2,
        msng: 'Oi eu sou a Carla'
    },
    {
        id: 2,
        idUser: 1,
        msng: 'oi sou o Lucio'
    }
]

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.backgroundView}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <React.Fragment>
                                {
                                    item.idUser === 1 ? (
                                        <View style={styles.fried}>
                                            <Text style={styles.colorText}>(item.msng)</Text>
                                        </View>
                                    ) : (
                                            <View style={styles.my}>
                                                <Text style={styles.colorText}>(item.msng)</Text>
                                            </View>
                                        )


                                }
                            </React.Fragment>
                        }
                    />
                </View>

                <View style={styles.viewMessage}>

                    <TextInput style={styles.message}></TextInput>

                    <TouchableOpacity>
                        <Icon name="send" style={styles.iconsStyle} ></Icon>
                    </TouchableOpacity>
                </View>
            </React.Fragment>

        )
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        flex: 1,
        backgroundColor: '#171616',
        padding: 20,
        
    },
    fried: {
        padding: 20,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#852442',
        margin: 10,
        right: '2%'
    },
    my: {
        padding: 20,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#3c175e',
        margin: 10,
        left: '55%'

    },
    colorText: {
        color: '#fff'
    },
    iconsStyle: {
        marginTop:5,
        fontSize: 45,
        color:'#9137E6',       

    },
    message:{
        width:'85%',
        backgroundColor:'#fff',
        borderRadius:100,
        fontSize:25,       
    },
    viewMessage:{

        height:60,
        justifyContent: 'space-around',
        flexDirection:'row',
        backgroundColor:'#171616',
        paddingBottom: 10,
        
        
    },
    
})
export default Chat