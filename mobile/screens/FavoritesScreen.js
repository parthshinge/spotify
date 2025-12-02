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
const likedSongs = [
    { id: 1, title: 'Liked Song 1', artist: 'Artist Name', duration: '3:45' },
    { id: 2, title: 'Liked Song 2', artist: 'Artist Name', duration: '4:12' },
    { id: 3, title: 'Liked Song 3', artist: 'Artist Name', duration: '3:28' },
    { id: 4, title: 'Liked Song 4', artist: 'Artist Name', duration: '3:56' },
    { id: 5, title: 'Liked Song 5', artist: 'Artist Name', duration: '4:05' },
];

export default function FavoritesScreen() {
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
        Text style = { styles.headerTitle } > Liked Songs < /Text> <
        Text style = { styles.headerCount } > { likedSongs.length }
        songs < /Text> <
        /View>

        { /* Songs List */ } <
        FlatList data = { likedSongs }
        contentContainerStyle = { styles.listContent }
        keyExtractor = {
            (item) => item.id.toString() }
        showsVerticalScrollIndicator = { false }
        renderItem = {
            ({ item, index }) => ( <
                TouchableOpacity style = { styles.songItem }
                activeOpacity = { 0.7 } >
                <
                View style = { styles.songIndexContainer } >
                <
                Text style = { styles.songIndex } > { index + 1 } < /Text> <
                /View>

                <
                View style = { styles.songInfoContainer } >
                <
                Text style = { styles.songTitle }
                numberOfLines = { 1 } > { item.title } <
                /Text> <
                Text style = { styles.songArtist }
                numberOfLines = { 1 } > { item.artist } <
                /Text> <
                /View>

                <
                Text style = { styles.songDuration } > { item.duration } < /Text> <
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
    headerCount: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    listContent: {
        paddingHorizontal: 16,
        paddingBottom: 30,
    },
    songItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(168, 85, 247, 0.08)',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(168, 85, 247, 0.1)',
    },
    songIndexContainer: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    songIndex: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#a855f7',
    },
    songInfoContainer: {
        flex: 1,
    },
    songTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    songArtist: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.6)',
    },
    songDuration: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.5)',
        marginLeft: 12,
    },
});