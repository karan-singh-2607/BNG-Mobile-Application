import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, ButtonText }) => {
    return (
        <Pressable onPress={onPress} style={styles.Container}>
            <Text style={styles.Text}>{ButtonText}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#4398fe',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    Text: {
        fontWeight: '600',
        color: '#fff'
    }
})