import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';

const FiltersScreen = props => {

  const {navigation} = props

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback( () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() =>{
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/ Restiction</Text>
      <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
      <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
      <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return{
  headerTitle: 'Filter Meals',
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
    <Item title="Menu" iconName="ios-menu" onPress={() => {navData.navigation.toggleDrawer()}}/>
  </HeaderButtons>,
  headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton} >
  <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam('save')}/>
</HeaderButtons>
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  }, 
  title:{
    fontSize: 22,
    margin:20,
    textAlign: 'center' 
  }
});

export default FiltersScreen;
