import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Category = ({item, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <View>
        <Text
          style={[
            styles.cateogoryText,
            selectedCategory === item && {
              color: '#ffffff',
              backgroundColor: '#e96e6e',
            },
          ]}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  cateogoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#938f8f',
    backgroundColor: '#dfdcdc',
    textAlign: 'center',
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
