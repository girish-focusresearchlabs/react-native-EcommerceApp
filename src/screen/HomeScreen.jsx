import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', 'Men', 'Women'];
const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);

  const [selectedCategory, setSelectedCategory] = useState('Trending Now');
  const [isLiked, setIsLiked] = useState(false);
  const handleLiked = item => {
    const newProducts = products.map(prod => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
    };
//     When a match is found (prod.id === item.id), a new object is returned that copies all of the properties of prod (...prod), but with an additional or updated property isLiked: true.

// So, if the selected item has an id of 4 (as in your JSON example), the object will be updated like this:


// {
//   "id": 4,
//   "image": "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/smf81ubnfjennk9qbjm4.png",
//   "title": "Winter Coat",
//   "price": 99.99,
//   "isLiked": true  // New or updated property
// }
// For all other products where the id doesn't match, the product is returned unchanged (return prod;).
  return (
    <LinearGradient colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
      <Header />

      {/* product list */}

      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item, index}) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Fontisto name="search" size={26} color="#c0c0c0" />
              </View>
              <TextInput style={styles.textInput} placeholder="Search" />
            </View>
            {/* category section */}
            <FlatList
              data={categories}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item}
            />
            {/* <Category/> */}
          </>
        }
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 22,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  textInput: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    height: 48,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 20,
  },
});
