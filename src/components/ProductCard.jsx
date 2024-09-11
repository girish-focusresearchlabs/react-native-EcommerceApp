import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({item, handleLiked}) => {
  //   const [isLiked, setIsLiked] = useState(false);
  // we cant call usestate inside child component
  //   const isLiked = false;
  //   console.log(item.image);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PRODUCT_DETAILS', {item});
      }}
      style={styles.container}>
      <Image
        source={require('../assets/girl1.png')}
        style={styles.coverImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          handleLiked(item);
        }}
        style={styles.likeContainer}>
        {item?.isLiked ? (
          //   optional chaining operator
          <AntDesign name="heart" size={20} color="#e55b5b" />
        ) : (
          <AntDesign name="hearto" size={20} color="#e55b5b" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  coverImage: {
    height: 256,
    width: '90%',
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,

    // position: 'relative',
  },
  container: {
    flex: 1,
    // marginHorizontal: 10,
    marginVertical: 10,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    // fontFamily: fonts.regular,
    fontWeight: '700',
    color: '#444444',
  },
  price: {
    fontSize: 18,
    // fontFamily: fonts.medium,
  },
  likeContainer: {
    position: 'absolute',
    height: 34,
    width: 34,
    // padding: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    right: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faviorate: {
    height: 20,
    width: 20,
  },
  content: {
    paddingLeft: 15,
  },
});
