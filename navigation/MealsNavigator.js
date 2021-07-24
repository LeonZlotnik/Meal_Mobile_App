import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import { Colors } from "react-native/Libraries/NewAppScreen";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
});

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
const FavNaigator = createStackNavigator({
  Favorites: FavoriteScreen,
  MealDetail: MealDetailScreen
})

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
      }
    }
  },
  Favorites: {
    screen: FavNaigator ,
    navigationOptions:{
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
      }
    }
  }
}, {
  tabBarOptions:{
    activeTintColor: Colors.accentColor
  }
})

const FilterNavigator = createStackNavigator({
  Filters: FilterScreen 
})

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
const MainNavigator = createDrawerNavigator({
  MealsFavs:{
    screen: MealsFavTabNavigator,
    navigationOptions:{
      drawerLabel: 'Meals'
    }},
  FiltersScreen: {
    screen: FilterNavigator,
    navigationOptions:{
      drawerLabel: 'Filter'
    }
  }
}, {
  contentOptions:{
    activeTintColor: Colors.accentColor
  }
})

export default createAppContainer(MainNavigator);
