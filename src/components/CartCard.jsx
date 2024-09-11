import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartCard = ({item, handleDelete}) => {
    return (
    <View style={styles.card}>
      <Image source={require('../assets/girl2.png')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.textCircleContainer}>
          <View
            style={[
              styles.circle,
              {backgroundColor: item?.color || 'red'},
            ]}></View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <FontAwesome6 name="trash" color="#f68cb5" size={22} marginTop={10} />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  image: {
    height: 125,
    width: '30%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 18,
    color: '#797979',
    marginVertical: 7,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: '#FFFFFF',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '700',
  },
  textCircleContainer: {
    flexDirection: 'row',
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
});
