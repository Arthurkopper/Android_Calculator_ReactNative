import React from 'react'
import { Text, Image, Dimensions, StyleSheet, TouchableHighlight, Button } from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,      
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        color: '#fff',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#000000',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight underlayColor={'rgba(52, 52, 52, 0.8)'} onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}