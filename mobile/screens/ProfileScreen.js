import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Dummy data
const menuItems = [
    { id: 1, icon: '🏠', label: 'Home', active: false },
    { id: 2, icon: '🎤', label: 'Artist', active: false },
    { id: 3, icon: '❤️', label: 'Favorite', active: true },
    { id: 4, icon: '❓', label: 'Help', active: false },
    { id: 5, icon: '⚙️', label: 'Setting', active: false },
];

export default function ProfileScreen() {
    const [activeMenu, setActiveMenu] = useState(2);

    return ( <
        SafeAreaView style = { styles.container } >
        <
        LinearGradient colors = {
            ['#2d1b4e', '#1f0a3a', '#050016'] }
        start = {
            { x: 0.5, y: 0 } }
        end = {
            { x: 0.5, y: 1 } }
        style = { styles.gradient } >
        <
        ScrollView showsVerticalScrollIndicator = { false }
        contentContainerStyle = { styles.scrollContent } >
        { /* Profile Header Section */ } <
        View style = { styles.profileHeaderContainer } > { /* Avatar */ } <
        LinearGradient colors = {
            ['#a855f7', '#ec4899'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.profileAvatar } >
        <
        Text style = { styles.profileAvatarText } > RL < /Text> <
        /LinearGradient>

        { /* Greeting and Name */ } <
        View style = { styles.profileTextContainer } >
        <
        Text style = { styles.greetingText } > Hi! < /Text> <
        Text style = { styles.profileName } > Roman Leone < /Text> <
        /View> <
        /View>

        { /* Menu Items */ } <
        View style = { styles.menuContainer } > {
            menuItems.map((item) => ( <
                TouchableOpacity key = { item.id }
                style = {
                    [
                        styles.menuItem,
                        activeMenu === item.id && styles.menuItemActive,
                    ]
                }
                onPress = {
                    () => setActiveMenu(item.id) }
                activeOpacity = { 0.8 } >
                <
                Text style = { styles.menuIcon } > { item.icon } < /Text> <
                Text style = {
                    [
                        styles.menuLabel,
                        activeMenu === item.id && styles.menuLabelActive,
                    ]
                } >
                { item.label } <
                /Text> <
                /TouchableOpacity>
            ))
        } <
        /View>

        { /* Logout Button */ } <
        View style = { styles.logoutContainer } >
        <
        TouchableOpacity style = { styles.logoutButton }
        activeOpacity = { 0.7 } >
        <
        Text style = { styles.logoutText } > Logout < /Text> <
        /TouchableOpacity> <
        /View>

        { /* Extra spacing for bottom tabs */ } <
        View style = {
            { height: 30 } }
        /> <
        /ScrollView> <
        /LinearGradient> <
        /SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050016',
    },
    gradient: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    profileHeaderContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    profileAvatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#a855f7',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 8,
    },
    profileAvatarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileTextContainer: {
        alignItems: 'center',
    },
    greetingText: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: 4,
    },
    profileName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
    },
    menuContainer: {
        backgroundColor: 'rgba(168, 85, 247, 0.08)',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 40,
        borderWidth: 1,
        borderColor: 'rgba(168, 85, 247, 0.15)',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(168, 85, 247, 0.1)',
    },
    menuItemActive: {
        backgroundColor: 'rgba(168, 85, 247, 0.15)',
        borderLeftWidth: 4,
        borderLeftColor: '#a855f7',
    },
    menuIcon: {
        fontSize: 24,
        marginRight: 16,
    },
    menuLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.7)',
    },
    menuLabelActive: {
        color: '#a855f7',
        fontWeight: '600',
    },
    logoutContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    logoutButton: {
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ec4899',
    },
});