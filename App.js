/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainScreen from './Screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerContent from './Components/Drawer_Content';
import AssignmentIN from './Screens/Assignment IN';
import RootStackScreen from './Screens/Root Stack Screen';
import { AuthContext } from './Components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snoozed from './Screens/Snoozed';
import OpenProjects from './Screens/Open Projects';
import AddAssignment from './Screens/Add Assignment';
import AddProject from './Screens/Add Project';
import AddClient from './Screens/Add Client';

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
      name="Home"
      component={MainScreen}
      options={{
        headerTintColor: '#fff',
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

const AssignmentINStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Assignment IN"
      component={AssignmentIN}
      options={{
        headerTintColor: '#fff',
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
const SnoozedStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Snoozed"
      component={Snoozed}
      options={{
        headerTintColor: '#fff',
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

const OpenProjectsStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Open Projects"
      component={OpenProjects}
      options={{
        headerTintColor: '#fff',
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

const AddAssignmentStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Add Assignment"
      component={AddAssignment}
      options={{
        headerTintColor: '#fff',
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
const AddProjectStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Add Project"
      component={AddProject}
      options={{
        headerTintColor: '#fff',
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
const AddClientStackScreen = ({ navigation }) => (
  <MainScreenStack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#008497',
      },
    }}>
    <MainScreenStack.Screen
      name="Add client"
      component={AddClient}
      options={{
        headerTintColor: '#fff',
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

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };

    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const email = foundUser[0].email;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: email, token: userToken });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },

  }), []);

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken !== null ? (
            <Drawer.Navigator
              initialRouteName="LoginScreen"
              screenOptions={{ headerShown: false, drawerPosition: 'right' }}
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="MainScreen" component={MainScreenStackScreen} />
              <Drawer.Screen name="Assignment IN" component={AssignmentINStackScreen} />
              <Drawer.Screen name="Snoozed" component={SnoozedStackScreen} />
              <Drawer.Screen name="Open Projects" component={OpenProjectsStackScreen} />
              <Drawer.Screen name="Add Assignment" component={AddAssignmentStackScreen} />
              <Drawer.Screen name="Add Project" component={AddProjectStackScreen} />
              <Drawer.Screen name="Add Client" component={AddClientStackScreen} />
            </Drawer.Navigator>
          ) : <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
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
