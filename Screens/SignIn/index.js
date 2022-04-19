import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, useWindowDimensions } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
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
        <View style={Styles.container}>
            <StatusBar
                backgroundColor="#fff"
                barStyle="dark-content"
            />
            <View style={Styles.header}>
                <Text style={Styles.text_header}>Welcome!</Text>
                <Image source={Logo} style={Styles.Logo} resizeMode="contain" />
            </View>

            <View style={Styles.footer}>
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
        </View>
    );
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default SignInScreen;
