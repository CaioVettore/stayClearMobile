import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

function Error(props) {
    return (
        <View style={styles.Error}>
            <Icon name={props.icon} style={styles.IconStyles} />
    <Text style={styles.textStyle} > {props.text} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Error: {
        backgroundColor: '#ff0d00',
        padding: 15,
        width: '70%',
        borderRadius: 4,
        flexDirection: 'row',
        marginTop: 35,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent:'center',
        


    },
    textStyle: {
        color: '#ffff',

    },
    IconStyles: {
        color: '#fff',
        marginRight: 10,
        fontSize: 20,
    },
})
export default Error