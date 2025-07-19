# Riding App Frontend Documentation

## Overview

This is a React + Vite frontend for the Riding App, providing user and captain authentication, registration, and a home page. The app uses React Router for navigation and Context API for user state management.

---

## Project Structure

```
src/
  ├── App.jsx              # Main app component, sets up routes
  ├── main.jsx             # Entry point
  ├── context/
  │     └── UserContext.jsx  # Context for user state management
  ├── pages/
  │     ├── Home.jsx
  │     ├── UserLogin.jsx
  │     ├── UserSignup.jsx
  │     ├── CaptainLogin.jsx
  │     └── CaptainSignup.jsx
  ├── assets/              # Static assets (images, etc.)
  ├── App.css
  ├── index.css
```

---

## Routing

The app uses `react-router-dom` for client-side routing. The main routes are:

- `/` — Home page
- `/login` — User login
- `/signup` — User registration
- `/captain-login` — Captain login
- `/captain-signup` — Captain registration

All routes are defined in `App.jsx`.

---

## State Management

- **UserContext** (`src/context/UserContext.jsx`):  
  Provides global state for the logged-in user using React Context API.  
  Usage:
  ```jsx
  import { UserContext } from './context/UserContext';
  const { user, setUser } = React.useContext(UserContext);
  ```

---

## Pages

- **Home.jsx**: Landing page for the app.
- **UserLogin.jsx**: Login form for users.
- **UserSignup.jsx**: Registration form for users.
- **CaptainLogin.jsx**: Login form for captains.
- **CaptainSignup.jsx**: Registration form for captains.

Each page handles its own form state and API calls to the backend.

---

## Styling

- Uses Tailwind CSS for utility-first styling.
- Global styles in `index.css` and `App.css`.

---

## Development

- Start the app:  
  ```bash
  npm install
  npm run dev
  ```
- The app will be available at `http://localhost:5173` by default.

---
