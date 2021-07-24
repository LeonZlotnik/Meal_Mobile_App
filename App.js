import React from 'react';
import {enableScreens} from 'react-native-screens';

enableScreens();

import MealsNavigator from './navigation/MealsNavigator';

export default function App() {

  return <MealsNavigator />;
}
