import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Define the list of terms with their meanings and images
const moneyTerms = [
    {
        term: 'Allowance',
        meaning: 'An amount of money given to you from your parent / guardian on a termly basis.',
        // image: require('./images/allowance.jpg'),
    },
    {
        term: 'Budget',
        meaning: 'A plan for spending and saving money.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    {
        term: 'Credit',
        meaning: 'The ability to borrow money with the promise to pay it back later.',
        // image: require(''),
    },
    
];


const MoneyTermsScreen = () => {
    const [selectedTerm, setSelectedTerm] = useState(null);
    
    const handleTermPress = (term) => {
        setSelectedTerm(term);
    };
    
    const handleCloseModal = () => {
        setSelectedTerm(null);
    };
    
    
    const navigation = useNavigation();

    
    return (
        <View style={styles.container}>
            <ScrollView style={styles.list}>
                {moneyTerms.map((term) => (
                    <TouchableOpacity key={term.term} onPress={() => handleTermPress(term)}>
                        <View style={styles.listItem}>
                            <Text style={styles.term}>{term.term}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedTerm && (
                <Modal visible={Boolean(selectedTerm)} animationType="slide">
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>

                        <View style={styles.modalContent}>
                            <Image source={selectedTerm.image} style={styles.termImage} />
                            <Text style={styles.termMeaning}>{selectedTerm.meaning}</Text>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    list: {
        flex: 1,
    },
    listItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    term: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    closeButton: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    closeButtonText: {
        fontSize: 16,
    },
    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    termImage: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    termMeaning: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default MoneyTermsScreen;




// This implementation uses a ScrollView to display the list of terms and a Modal to display the details of a selected term. The term list is generated dynamically from the moneyTerms array, and each term is wrapped in a TouchableOpacity that triggers the handleTermPress function when pressed. The handleTermPress function sets the selected term in state, which causes the Modal to appear. The Modal contains an image and a text element that display the meaning and image of the selected term, and a close button that triggers the handleCloseModal function when pressed.