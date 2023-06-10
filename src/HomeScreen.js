import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const image = require('./bg.svg')


const HomeScreen = () => {

  const navigation = useNavigation();

const pressHandler1 = () => {
  navigation.navigate('NeedsAndWants');
}
const pressHandler2 = () => {
  navigation.navigate('Expense');
}
const pressHandler3 = () => {
  navigation.navigate('SavingGoal');
}
const pressHandler4 = () => {
  navigation.navigate('MoneyQuiz');
}
const pressHandler5 = () => {
  navigation.navigate('MoneyTerms');
}


  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Kolo Banks Money Adventure!</Text>
        <Text style={styles.subtitle}>A fun and interactive way to learn about money</Text>
      </View>
      <View style={styles.body}>

        <TouchableOpacity
          style={styles.button}
          onPress={pressHandler1}
        >
          <Text style={styles.buttonText}>Needs and Wants</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pressHandler2}
        >
          <Text style={styles.buttonText}>Expenses</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pressHandler3}
        >
          <Text style={styles.buttonText}>Savings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pressHandler4}
        >
          <Text style={styles.buttonText}>Money Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={pressHandler5}
        >
          <Text style={styles.buttonText}>Money Terms</Text>
        </TouchableOpacity>
      </View>
      
    </View>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3D6DCC',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default HomeScreen;
