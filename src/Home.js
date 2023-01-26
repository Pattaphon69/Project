import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../StyleSheet/styles';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../database/firebaseDB';
import { getFirestore } from "firebase/firestore";

export default function HomeScreen({ navigation }) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        console.log("Home");
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>Home</Text>

        </SafeAreaView >

    );
}

