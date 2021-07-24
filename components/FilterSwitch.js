import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import Colors from '../constants/Colors';

const FiltersSwitch = props => {

  

  return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch thumbColor={Platform.OS === 'android' ? Colors.primaryColor : '' } trackColor={{true: Colors.primaryColor}} value={props.state} onValueChange={props.onChange}/>
      </View>
  );
};


const styles = StyleSheet.create({ 
  filterContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom:'5%'
  },
});

export default FiltersSwitch;
