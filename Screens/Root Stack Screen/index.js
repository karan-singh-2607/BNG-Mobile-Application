import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../SignIn';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode="none" screenOptions={{
        headerShown: false
    }}>
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    </RootStack.Navigator>
);
export default RootStackScreen;
