import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
    const handleGetStarted = () => {
        navigation.replace('MainApp');
    };

    return ( <
        SafeAreaView style = {
            { flex: 1 } } >
        <
        LinearGradient colors = {
            ['#2d1b4e', '#1f0a3a', '#050016'] }
        start = {
            { x: 0.5, y: 0 } }
        end = {
            { x: 0.5, y: 1 } }
        style = { styles.container } >
        { /* Illustration / Headphones Placeholder */ } <
        View style = { styles.illustrationContainer } >
        <
        LinearGradient colors = {
            ['#a855f7', '#ec4899', '#a855f7'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.illustrationCircle } >
        <
        Text style = { styles.illustrationIcon } > 🎧 < /Text> <
        /LinearGradient> <
        /View>

        { /* Text Section */ } <
        View style = { styles.textContainer } >
        <
        Text style = { styles.mainHeading } > enjoy your music, enjoy your life < /Text> <
        Text style = { styles.subtitle } >
        listen to your favorite music
        for free, anywhere. <
        /Text> <
        /View>

        { /* Get Started Button */ } <
        View style = { styles.buttonContainer } >
        <
        TouchableOpacity activeOpacity = { 0.8 }
        onPress = { handleGetStarted }
        style = { styles.getStartedButtonWrapper } >
        <
        LinearGradient colors = {
            ['#ec4899', '#a855f7'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.getStartedButton } >
        <
        Text style = { styles.getStartedText } > Get Started < /Text> <
        /LinearGradient> <
        /TouchableOpacity> <
        /View> <
        /LinearGradient> <
        /SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    illustrationContainer: {
        marginTop: 40,
        marginBottom: 20,
    },
    illustrationCircle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#a855f7',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    illustrationIcon: {
        fontSize: 80,
    },
    textContainer: {
        alignItems: 'center',
        marginVertical: 40,
        paddingHorizontal: 10,
    },
    mainHeading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 16,
        lineHeight: 44,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        lineHeight: 24,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 20,
    },
    getStartedButtonWrapper: {
        borderRadius: 9999,
        overflow: 'hidden',
    },
    getStartedButton: {
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getStartedText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});