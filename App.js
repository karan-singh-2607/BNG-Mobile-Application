/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useLayoutEffect } from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainScreen from './Screens/MainScreen';
import SignInScreen from './Screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './Components/Drawer_Content';
import AssignmentIN from './Screens/Assignment IN';
import RootStackScreen from './Screens/Root Stack Screen';

const MainScreenStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreenStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="MainScreenStack"
      component={MainScreen}
      options={{
        headerRight: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#008497"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </MainScreenStack.Navigator>
);
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useLayoutEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{ headerShown: false, drawerPosition: 'right' }}
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="LoginScreen" component={SignInScreen} />
          <Drawer.Screen name="MainScreen" component={MainScreenStackScreen} />
          <Drawer.Screen name="Assignment IN" component={AssignmentIN} />
        </Drawer.Navigator> */}
      </NavigationContainer>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
