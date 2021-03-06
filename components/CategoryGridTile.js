import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
    let TochableCmp = TouchableOpacity;

    if(Platform.OS === 'andoid' && Platform.Version >= 21){
        TochableCmp = TouchableNativeFeedback;
    }

  return (
    <View style={styles.gridItem}>
    <TochableCmp 
      style={{flex:1}}
      onPress={props.onSelect}>
      <View style={{ ...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      </TochableCmp>
      </View>
  );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
      },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title:{
        fontSize: 22
    }
});

export default CategoryGridTile;
