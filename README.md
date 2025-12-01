# Spotify Clone

A full-stack web application that mimics Spotify's core functionality, built with Django REST Framework for the backend and React with Vite for the frontend.

## Project Structure

```
spotify/
├── accounts/              # User authentication and management
├── music/                 # Music-related models and APIs
├── core/                  # Django project settings and configuration
├── frontend/              # React + Vite frontend application
├── media/                 # User-uploaded media files
└── db.sqlite3            # SQLite database
```

## Backend (Django)

### Setup

1. Navigate to the project root:
```bash
cd spotify
```

2. Create a virtual environment:
```bash
python -m venv env
env\Scripts\activate  # On Windows
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Start the development server:
```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`

### Apps

- **accounts**: Handles user registration, login, and profile management
- **music**: Manages songs, albums, playlists, and music-related operations

## Frontend (React + Vite)

### Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Features

- User authentication (login/register)
- Song list display
- Player controls and playback
- Playlist management
- Responsive design with Tailwind CSS

### Components

- **Navbar**: Navigation header
- **PlayerBar**: Music player controls
- **SongList**: Displays available songs
- **PlayerContext**: Global player state management

## Technologies Used

### Backend
- Django
- Django REST Framework
- SQLite

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Music
- `GET /api/music/songs/` - List all songs
- `GET /api/music/songs/<id>/` - Get song details
- `POST /api/music/playlists/` - Create playlist
- `GET /api/music/playlists/` - List user playlists

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Parth Shinge
