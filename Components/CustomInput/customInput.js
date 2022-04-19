import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.Container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.Input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    Input: {},
});
