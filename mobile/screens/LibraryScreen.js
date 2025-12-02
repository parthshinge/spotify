import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Dummy data
const playlists = [
    { id: 1, title: 'My Workout Mix', count: 24 },
    { id: 2, title: 'Chill Evening', count: 18 },
    { id: 3, title: 'Party Hits', count: 42 },
    { id: 4, title: 'Focus & Productivity', count: 31 },
    { id: 5, title: 'Road Trip', count: 56 },
];

export default function LibraryScreen() {
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
        { /* Header */ } <
        View style = { styles.headerContainer } >
        <
        Text style = { styles.headerTitle } > Your Library < /Text> <
        Text style = { styles.headerSubtitle } > { playlists.length }
        Playlists < /Text> <
        /View>

        { /* Create Playlist Button */ } <
        View style = { styles.createButtonContainer } >
        <
        TouchableOpacity style = { styles.createButtonWrapper }
        activeOpacity = { 0.8 } >
        <
        LinearGradient colors = {
            ['#a855f7', '#ec4899'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.createButton } >
        <
        Text style = { styles.createButtonIcon } > ➕ < /Text> <
        Text style = { styles.createButtonText } > Create Playlist < /Text> <
        /LinearGradient> <
        /TouchableOpacity> <
        /View>

        { /* Playlists Grid */ } <
        FlatList data = { playlists }
        contentContainerStyle = { styles.listContent }
        keyExtractor = {
            (item) => item.id.toString() }
        showsVerticalScrollIndicator = { false }
        numColumns = { 2 }
        columnWrapperStyle = { styles.columnWrapper }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity style = { styles.playlistCard }
                activeOpacity = { 0.7 } >
                <
                LinearGradient colors = {
                    [
                        `rgba(168, 85, 247, ${0.2 + item.id * 0.05})`,
                        `rgba(236, 72, 153, ${0.15 + item.id * 0.03})`,
                    ]
                }
                start = {
                    { x: 0, y: 0 } }
                end = {
                    { x: 1, y: 1 } }
                style = { styles.playlistGradient } >
                <
                View style = { styles.playlistIconContainer } >
                <
                Text style = { styles.playlistIcon } > 🎵 < /Text> <
                /View> <
                Text style = { styles.playlistTitle }
                numberOfLines = { 2 } > { item.title } <
                /Text> <
                Text style = { styles.playlistCount } > { item.count }
                songs < /Text> <
                /LinearGradient> <
                /TouchableOpacity>
            )
        }
        /> <
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
    headerContainer: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    createButtonContainer: {
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    createButtonWrapper: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    createButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 8,
    },
    createButtonIcon: {
        fontSize: 18,
    },
    createButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },
    columnWrapper: {
        gap: 12,
    },
    playlistCard: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        aspectRatio: 1,
    },
    playlistGradient: {
        flex: 1,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(168, 85, 247, 0.2)',
        justifyContent: 'space-between',
    },
    playlistIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playlistIcon: {
        fontSize: 24,
    },
    playlistTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    playlistCount: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.5)',
    },
});