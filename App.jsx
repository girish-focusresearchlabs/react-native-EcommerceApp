import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import {CartContext, CartProvider} from './src/context/CartContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="PRODUCT_DETAILS"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

function Reorder() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}
// npx react-native start
const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#e96e6e',
          }}>
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <Entypo name={'home'} size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={Reorder}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return (
                  <MaterialIcons name={'reorder'} size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({focused, size, color}) => {
                const {cartItems} = useContext(CartContext);
                if (focused) {
                  return (
                    <View style={{position: 'relative'}}>
                      <MaterialCommunityIcons
                        name="cart"
                        size={size}
                        color={color}
                      />

                      <View
                        style={{
                          position: 'absolute',
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: '#E96E6E',
                          borderRadius: 7,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{color: 'white', fontSize: 10}}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View style={{position: 'relative'}}>
                      <MaterialCommunityIcons
                        name="cart"
                        size={size}
                        color={'#C0C0C0'}
                      />

                      <View
                        style={{
                          position: 'absolute',
                          right: -3,
                          bottom: 22,
                          height: 14,
                          width: 14,
                          backgroundColor: '#C0C0C0',
                          borderRadius: 7,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={{color: 'white', fontSize: 10}}>
                          {cartItems.length}
                        </Text>
                      </View>
                    </View>
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={Reorder}
            options={{
              tabBarIcon: ({size, focused, color}) => {
                return <FontAwesome6 name={'user'} size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 80,
    marginVertical: 'auto',
  },
});
