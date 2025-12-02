# Spotify Music Mobile App

A modern React Native Expo music app with a beautiful purple gradient UI, inspired by the latest mobile design trends.

## Features

- **Onboarding Screen**: Welcome screen with gradient background and "Get Started" button
- **Discover/Home Screen**: 
  - User and friend avatars
  - Search bar for music discovery
  - "Made for you" personalized playlists
  - Discover Weekly feature
  - Today's hits carousel
- **Favorites Screen**: View all liked songs with duration
- **Library Screen**: Browse and manage playlists
- **Profile Screen**: User profile with menu navigation and logout

## Tech Stack

- **React Native** with Expo
- **React Navigation** (Stack + Bottom Tabs)
- **expo-linear-gradient** for purple gradient backgrounds
- **JavaScript** (no TypeScript)

## Project Structure

```
mobile/
├── App.js                    # Main app with navigation setup
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── screens/
│   ├── OnboardingScreen.js   # Onboarding/Welcome screen
│   ├── DiscoverScreen.js     # Home/Discover screen with recommendations
│   ├── FavoritesScreen.js    # Liked songs list
│   ├── LibraryScreen.js      # Playlists and user library
│   └── ProfileScreen.js      # User profile and settings
└── README.md
```

## Installation & Setup

1. Ensure you have Node.js and npm installed
2. Install Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```

3. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Scan the QR code with:
   - **iOS**: Camera app or Expo Go app
   - **Android**: Expo Go app

## Color Palette

- **Primary Gradient**: `#2d1b4e` → `#1f0a3a` → `#050016`
- **Accent Purple**: `#a855f7`
- **Accent Pink**: `#ec4899`
- **Text**: `#ffffff` and `rgba(255, 255, 255, 0.7)`

## Navigation Structure

```
App
├── Onboarding Screen
└── Main App (Bottom Tabs)
    ├── Discover (Home)
    ├── Favorites (Liked Songs)
    ├── Library (Playlists)
    └── Profile (Settings)
```

## Key Features Implementation

### Glassmorphism Effects
- Semi-transparent cards with `rgba(168, 85, 247, 0.08)` backgrounds
- Border colors with low opacity for depth
- Shadow effects on interactive elements

### Responsive Design
- SafeAreaView for safe insets
- ScrollView for overflow content
- FlatList for performance with large lists
- Proper padding and spacing for mobile screens

### Interactive Components
- Gradient buttons with LinearGradient
- Animated tab navigation
- Smooth transitions between screens
- TouchableOpacity with activeOpacity feedback

## Customization

All styles are defined in `StyleSheet` at the bottom of each screen component. You can customize:

- Colors in `LinearGradient` components
- Font sizes and weights
- Padding and margins
- Border radius values
- Shadow properties

## Dummy Data

The app uses hard-coded dummy data for demonstration:
- Friend avatars with initials
- Sample songs and playlists
- User profile information

To integrate with a real backend API, modify the data sources in each screen component and implement actual data fetching with async functions.

## Future Enhancements

- Connect to real music API
- Implement audio player functionality
- User authentication and profiles
- Playlist creation and management
- Search functionality
- Music streaming capabilities

## License

MIT
