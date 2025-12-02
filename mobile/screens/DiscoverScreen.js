import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Dummy data
const friendAvatars = [
    { id: 1, initial: 'J', color: '#a855f7' },
    { id: 2, initial: 'M', color: '#ec4899' },
    { id: 3, initial: 'S', color: '#06b6d4' },
    { id: 4, initial: 'A', color: '#8b5cf6' },
    { id: 5, initial: 'R', color: '#f472b6' },
];

const todayHits = [
    { id: 1, title: 'Song 1', artist: 'Artist' },
    { id: 2, title: 'Song 2', artist: 'Artist' },
    { id: 3, title: 'Song 3', artist: 'Artist' },
    { id: 4, title: 'Song 4', artist: 'Artist' },
];

export default function DiscoverScreen() {
    const [search, setSearch] = useState('');

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
        { /* Avatar Row */ } <
        View style = { styles.avatarRowContainer } > { /* User Avatar */ } <
        View style = { styles.userAvatarWrapper } >
        <
        LinearGradient colors = {
            ['#a855f7', '#ec4899'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.userAvatar } >
        <
        Text style = { styles.avatarText } > U < /Text> <
        /LinearGradient> <
        /View>

        { /* Friend Avatars Scroll */ } <
        ScrollView horizontal showsHorizontalScrollIndicator = { false }
        style = { styles.friendAvatarsScroll } >
        {
            friendAvatars.map((friend) => ( <
                LinearGradient key = { friend.id }
                colors = {
                    [friend.color, friend.color] }
                style = { styles.friendAvatar } >
                <
                Text style = { styles.avatarText } > { friend.initial } < /Text> <
                /LinearGradient>
            ))
        } <
        /ScrollView> <
        /View>

        { /* Search Bar */ } <
        View style = { styles.searchBarContainer } >
        <
        TextInput style = { styles.searchBar }
        placeholder = "Search music"
        placeholderTextColor = "rgba(255, 255, 255, 0.5)"
        value = { search }
        onChangeText = { setSearch }
        /> <
        Text style = { styles.searchIcon } > 🔍 < /Text> <
        /View>

        { /* Made for you */ } <
        View style = { styles.sectionContainer } >
        <
        Text style = { styles.sectionTitle } > Made
        for you < /Text>

        { /* Large Card */ } <
        LinearGradient colors = {
            ['rgba(168, 85, 247, 0.3)', 'rgba(236, 72, 153, 0.2)'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.largeCard } >
        <
        View style = { styles.cardContent } >
        <
        View style = { styles.cardImagePlaceholder } >
        <
        Text style = { styles.cardImageEmoji } > 🎵 < /Text> <
        /View> <
        Text style = { styles.largeCardTitle } > Long Ride < /Text> <
        Text style = { styles.cardSubtitle } > Perfect
        for long drives < /Text> <
        /View> <
        /LinearGradient>

        { /* Two Small Cards */ } <
        View style = { styles.twoCardsRow } >
        <
        LinearGradient colors = {
            ['rgba(236, 72, 153, 0.3)', 'rgba(168, 85, 247, 0.2)'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.smallCard } >
        <
        Text style = { styles.smallCardEmoji } > 💕 < /Text> <
        Text style = { styles.smallCardTitle } > Love < /Text> <
        /LinearGradient>

        <
        LinearGradient colors = {
            ['rgba(6, 182, 212, 0.3)', 'rgba(168, 85, 247, 0.2)'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.smallCard } >
        <
        Text style = { styles.smallCardEmoji } > 😎 < /Text> <
        Text style = { styles.smallCardTitle } > Chill < /Text> <
        /LinearGradient> <
        /View> <
        /View>

        { /* Discover Weekly */ } <
        View style = { styles.sectionContainer } >
        <
        LinearGradient colors = {
            ['rgba(168, 85, 247, 0.2)', 'rgba(236, 72, 153, 0.15)'] }
        start = {
            { x: 0, y: 0 } }
        end = {
            { x: 1, y: 1 } }
        style = { styles.discoverWeeklyCard } >
        <
        View style = { styles.discoverWeeklyContent } >
        <
        View >
        <
        Text style = { styles.discoverWeeklyEmoji } > 📻 < /Text> <
        /View> <
        View style = { styles.discoverWeeklyText } >
        <
        Text style = { styles.discoverWeeklyTitle } > Discover Weekly < /Text> <
        Text style = { styles.discoverWeeklySubtitle } > your weekly mix < /Text> <
        /View> <
        Text style = { styles.discoverWeeklyArrow } > → < /Text> <
        /View> <
        /LinearGradient> <
        /View>

        { /* Today Hits */ } <
        View style = { styles.sectionContainer } >
        <
        View style = { styles.sectionHeader } >
        <
        Text style = { styles.sectionTitle } > Today hits < /Text> <
        TouchableOpacity >
        <
        Text style = { styles.seeAllText } > see all < /Text> <
        /TouchableOpacity> <
        /View>

        <
        FlatList data = { todayHits }
        horizontal showsHorizontalScrollIndicator = { false }
        contentContainerStyle = { styles.hitsList }
        keyExtractor = {
            (item) => item.id.toString() }
        renderItem = {
            ({ item }) => ( <
                TouchableOpacity style = { styles.hitCard }
                activeOpacity = { 0.8 } >
                <
                LinearGradient colors = {
                    ['#a855f7', '#ec4899'] }
                start = {
                    { x: 0, y: 0 } }
                end = {
                    { x: 1, y: 1 } }
                style = { styles.hitCardImage } >
                <
                Text style = { styles.hitCardEmoji } > 🎧 < /Text> <
                /LinearGradient> <
                Text style = { styles.hitCardTitle }
                numberOfLines = { 2 } > { item.title } <
                /Text> <
                Text style = { styles.hitCardArtist } > { item.artist } < /Text> <
                /TouchableOpacity>
            )
        }
        /> <
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
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    avatarRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        gap: 12,
    },
    userAvatarWrapper: {
        shadowColor: '#a855f7',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    friendAvatarsScroll: {
        flex: 1,
    },
    friendAvatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
        position: 'relative',
    },
    searchBar: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 9999,
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: '#fff',
        fontSize: 16,
        paddingRight: 40,
    },
    searchIcon: {
        position: 'absolute',
        right: 16,
        fontSize: 18,
    },
    sectionContainer: {
        marginBottom: 28,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    seeAllText: {
        fontSize: 14,
        color: '#a855f7',
        fontWeight: '600',
    },
    largeCard: {
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        overflow: 'hidden',
    },
    cardContent: {
        alignItems: 'center',
    },
    cardImagePlaceholder: {
        width: 120,
        height: 120,
        borderRadius: 12,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardImageEmoji: {
        fontSize: 50,
    },
    largeCardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    twoCardsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    smallCard: {
        flex: 1,
        borderRadius: 12,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 120,
    },
    smallCardEmoji: {
        fontSize: 40,
        marginBottom: 8,
    },
    smallCardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    discoverWeeklyCard: {
        borderRadius: 16,
        padding: 16,
        overflow: 'hidden',
    },
    discoverWeeklyContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    discoverWeeklyEmoji: {
        fontSize: 40,
    },
    discoverWeeklyText: {
        flex: 1,
    },
    discoverWeeklyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    discoverWeeklySubtitle: {
        fontSize: 13,
        color: 'rgba(255, 255, 255, 0.6)',
        marginTop: 2,
    },
    discoverWeeklyArrow: {
        fontSize: 20,
        color: '#a855f7',
    },
    hitsList: {
        gap: 12,
    },
    hitCard: {
        alignItems: 'center',
        width: 110,
    },
    hitCardImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    hitCardEmoji: {
        fontSize: 40,
    },
    hitCardTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 4,
    },
    hitCardArtist: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
    },
});