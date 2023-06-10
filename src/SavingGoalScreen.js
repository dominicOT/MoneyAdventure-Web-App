import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function SavingGoalScreen() {
    const [goalAmount, setGoalAmount] = useState("");
    const [currentAmount, setCurrentAmount] = useState("");
    const [savedAmount, setSavedAmount] = useState("");

    const calculateSavedAmount = () => {
        const saved = currentAmount - goalAmount;
        setSavedAmount(saved);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Set a Saving Goal</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your goal amount"
                    keyboardType="numeric"
                    value={goalAmount}
                    onChangeText={setGoalAmount}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your current amount"
                    keyboardType="numeric"
                    value={currentAmount}
                    onChangeText={setCurrentAmount}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={calculateSavedAmount}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Amount saved: {savedAmount}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    inputContainer: {
        width: "80%",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    resultContainer: {
        backgroundColor: "#f0f0f0",
        padding: 20,
        borderRadius: 10,
    },
    resultText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
