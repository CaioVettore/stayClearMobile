
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

function CardConversation({ avatar, name, msng }) {
    return (


        <View style={styles.item}>
            <Image source={{ uri: avatar }} style={styles.avatar} />

            <View style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.msng}>{msng}</Text>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({

    item: {
        flex: 1,
        backgroundColor: '#080809',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 100,
        flexDirection: "row"


    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 50,

    },
    name: {
        color: '#fff',
        marginBottom: 15,
        fontSize: 25,

    },
    msng: {
        color: '#ffff'
    },
})


    export default CardConversation