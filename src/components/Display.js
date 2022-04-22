import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { reportLogBoxError } from 'react-native/Libraries/LogBox/Data/LogBoxData'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#221E23',
        alignItems: 'flex-end',
        borderWidth: 1,
        borderColor: '#888',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props => {
    return (
        <View style = {styles.display}>
            {/* <Image    source={require('../imagens/Laranja.png')}      /> */}
            <Text style= {styles.displayValue} numberOfLines = {1} >
                {props.value}
            </Text>
        </View>
    )
}
