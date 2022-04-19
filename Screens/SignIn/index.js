import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, useWindowDimensions } from 'react-native';
import Logo from '../../Assets/Images/BNG-logo.png';
import CustomButton from '../../Components/CustomButton/customButton';
import CustomInput from '../../Components/CustomInput/customInput';
const SignInScreen = ({ navigation }) => {
    const { Height } = useWindowDimensions()
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const onSigninPressed = () => {
        console.warn('press');
    };
    return (
        <View style={[Styles.Container, { height: Height }]}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <Image source={Logo} style={Styles.Logo} resizeMode="contain" />

            <Text style={Styles.Heading}>Glad to see you</Text>
            <CustomInput
                placeholder="Username"
                value={Username}
                setValue={setUsername}
            />
            <CustomInput
                placeholder="Password"
                value={Password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton ButtonText="Login" onPress={() => navigation.navigate("MainScreen")} />
        </View>
    );
};
const Styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        flex: 1,
        padding: 20,
    },
    Heading: {
        fontWeight: '600',
        fontSize: 20,
        marginTop: 30,
    },
    Logo: {
        width: '60%',
        height: 70,
        maxWidth: 350,
        marginBottom: 20,
        marginTop: 35
    },
});

export default SignInScreen;
