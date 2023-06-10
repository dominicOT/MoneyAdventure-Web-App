// import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const NeedsAndWantsScreen = () => {
  const [needsList, setNeedsList] = useState([]);
  const [wantsList, setWantsList] = useState([]);
  const [newNeed, setNewNeed] = useState('');
  const [newWant, setNewWant] = useState('');

  const addNeed = () => {
    setNeedsList([...needsList, newNeed]);
    setNewNeed('');
  };

  const addWant = () => {
    setWantsList([...wantsList, newWant]);
    setNewWant('');
  };

  const navigation = useNavigation();

  // const pressHandler1 = () => {
  //   navigation.navigate('Home');
  // }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Needs</Text>
        <TextInput
          style={styles.input}
          placeholder="I need"
          value={newNeed}
          onChangeText={setNewNeed}
        />
        <Button title="Add" onPress={addNeed} />
        {needsList.map((need, index) => (
          <Text key={index} style={styles.listItem}>
            {need}
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wants</Text>
        <TextInput
          style={styles.input}
          placeholder="I want"
          value={newWant}
          onChangeText={setNewWant}
        />
        <Button title="Add" onPress={addWant} />
        {wantsList.map((want, index) => (
          <Text key={index} style={styles.listItem}>
            {want}
          </Text>
        ))}
      </View>
    </View>

    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default NeedsAndWantsScreen;
