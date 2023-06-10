// import React from 'react';
import { StrictMode } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import NeedsAndWantsScreen from './NeedsAndWantsScreen';
import ExpenseForm from './ExpenseForm';
import SavingGoalScreen from './SavingGoalScreen';
import MoneyQuizScreen from './MoneyQuizScreen';
import MoneyTermsScreen from './MoneyTermsScreen';


const Stack = createStackNavigator();


// const pressHandler1 = () => {
//   navigation.navigate('NeedsAndWantsScreen');
// }
// const pressHandler2 = () => {
//   navigation.navigate('ExpenseForm');
// }
// const pressHandler3 = () => {
//   navigation.navigate('SavingGoalScreen');
// }
// const pressHandler4 = () => {
//   navigation.navigate('MoneyQuizScreen');
// }
// const pressHandler5 = () => {
//   navigation.navigate('MoneyTermsScreen');
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Get Started"}}
        />
        <Stack.Screen
          name="NeedsAndWants"
          component={NeedsAndWantsScreen}
          options={{title: "Need and Wants"}}
        />
        <Stack.Screen
          name="Expense"
          component={ExpenseForm}
          options={{title: "Expense Form"}}
        />
        <Stack.Screen
          name="SavingGoal"
          component={SavingGoalScreen}
          options={{title: "Saving Goal"}}
        />
        <Stack.Screen
          name="MoneyQuiz"
          component={MoneyQuizScreen}
          options={{title: "Money Quiz"}}
        />
        <Stack.Screen
          name="MoneyTerms"
          component={MoneyTermsScreen}
          options={{title: "Money Terms"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

