import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isCart }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("HOME_STACK")} style={styles.appIconContainer}>
        {isCart ? (
          <AntDesign name="arrowleft" size={24} color="#e96e6e" />
        ) : (
          <Image
            source={require('../assets/apps.png')}
            style={styles.appIcon}
          />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.cartStyle}>My Cart</Text>}
      <Image source={require('../assets/Ellipse2.png')} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  cartStyle: {
    fontSize: 28,
    color: 'black',
  },
  appIcon: {
    height: 28,
    width: 28,
  },
  appIconContainer: {
    backgroundColor: '#ffffff',
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
