import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground} from 'react-native';

const MealItem = props => {
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                    <View style={styles.titleContaier}>
                        <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                    </View>
                </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
      </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        height: 200,
        width: '100%',
        padding: '2%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
    flexDirection: 'row'
  },
  mealHeader:{
    height: '85%'
  },
  mealDetail:{
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: '15%'
  },
  bgImage:{
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContaier:{
    backgroundColor: 'rgba(0,0,0,3)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title:{
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
  }

});

export default MealItem;
