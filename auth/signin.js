import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../StyleSheet/styles';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from '../database/firebaseDB';
import { getFirestore } from "firebase/firestore";

export default function SignInScreen({ navigation }) {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        console.log("SignUp");
    }, [])
    const handleSingUp = () => {
        console.log("SingUp");
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log("Signed in ", user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("errorCode", errorMessage);
                Alert.alert('Error', errorCode, [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
            });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        {/* <StatusBar style="light" /> */}
                        <Text style={[styles.h1, {}]}>Sign In</Text>

                        <View style={{ backgroundColor: 'red' }}>
                            <TextInput
                                placeholder='Email'
                                style={{ borderColor: 'black', borderWidth: 1, }}
                                onChangeText={(Text) => setEmail(Text)}
                            />
                            <TextInput
                                placeholder='password'
                                style={{ borderColor: 'black', borderWidth: 1, }}
                                onChangeText={(Text) => setPassword(Text)}
                            />
                            <TouchableOpacity onPress={() => handleSingUp()} style={{ alignSelf: 'center' }}>
                                <Text style={styles.h1}>Sign In</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView >

    );
}

