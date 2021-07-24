import React from 'react';
import { View, FlatList, StyleSheet, Platform, Text} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors.js'
import MealList from '../components/MealList.js'

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0);

  return (
    <MealList listData={displayedMeals} navigation={props.navigation}/>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) =>{
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find( cat => cat.id === catId )

  return{
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }

}

export default CategoryMealScreen;
