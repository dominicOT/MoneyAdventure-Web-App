// import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

const quizQuestions = [
    {
        question: 'What is the currency used in Nigeria?',
        options: ['Dollar', 'Naira', 'Euro', 'Pound'],
        correctAnswer: 'Naira'
    },
    {
        question: 'What is the highest denomination of Naira note?',
        options: ['N200', 'N1000', 'N5000', 'N10000'],
        correctAnswer: 'N10000'
    },
    {
        question: 'What is the name of the Nigerian central bank?',
        options: ['Bank of America', 'Central Bank of Nigeria', 'World Bank', 'First Bank'],
        correctAnswer: 'Central Bank of Nigeria'
    }
];

const MoneyQuizGame = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswerSelection = (selectedOption) => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Quiz game completed
            // Show the score
        }
    };

    const renderOptions = (options) => {
        return options.map((option) => {
            return (
                <TouchableOpacity
                    key={option}
                    style={styles.optionButton}
                    onPress={() => handleAnswerSelection(option)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            );
        });
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            {renderOptions(currentQuestion.options)}
            <Text style={styles.score}>{`Score: ${score}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    optionButton: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10
    },
    optionText: {
        fontSize: 18
    },
    score: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default MoneyQuizGame;
