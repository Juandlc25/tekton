# Authentication and Items List Application

This React TypeScript application implements a fake authentication system and displays a list of 2000 items from a public API.

## 🚀 Features

- **Login Screen**: Authentication form with email and password
- **Fake Login**: Simulates a successful authentication process with fake token
- **Home Screen**: Displays a list of 2000 items with pagination
- **Search**: Real-time search functionality
- **Responsive**: Design adaptable for web and mobile
- **Authentication**: Protected routes system
- **Logout**: Button to sign out and clear session

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **React Router DOM** for navigation
- **Axios** for HTTP requests
- **Tailwind CSS** for styling
- **Vite** as bundler

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tekton
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 🏗️ Project Architecture

```
src/
├── components/          # Reusable components
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   └── AuthenticationContext.tsx
├── pages/              # Main pages
│   ├── LoginPage.tsx
│   └── HomePage.tsx
├── services/           # API services
│   └── api.ts
├── types/              # TypeScript definitions
│   └── index.ts
└── utils/              # Utilities
```

## 🔐 Authentication System

### Public vs Private Context

The application implements an architecture that clearly separates public and private contexts:

- **Public Context**: Pages accessible without authentication (login)
- **Private Context**: Pages that require authentication (home)

### Token Storage

The fake token is stored in memory using React Context, which provides:

- Persistence during the session
- Automatic cleanup when logging out
- Security by not persisting in localStorage

### Logout Strategy

The implemented logout strategy:

1. Clears the token from the authentication context
2. Redirects the user to the login screen
3. Prevents access to protected routes

## 📱 Responsive Design

The application uses Tailwind CSS for a completely responsive design:

- **Mobile First**: Design optimized for mobile devices
- **Adaptive Grid**: Items list that adapts to screen size
- **Flexible Components**: Forms and navigation that work on all devices

## 🔍 List Features

### Pagination

- 20 items per page
- Navigation between pages
- Current page indicators

### Search

- Real-time search
- Filtering by title and content
- Automatic results update

### Performance Optimization

- Initial data loading
- Client-side filtering
- Pagination for handling large data volumes

## 🌐 External API

The application uses the JSONPlaceholder public API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/posts`
- **Data**: 100 original posts expanded to 2000 items
- **Configuration**: Axios with interceptors for token handling

## 🚀 Proposed Theoretical Improvements

### 1. Backend Call Efficiency

**Current Problem**: All 2000 items are loaded at once.

**Proposed Improvements**:

- **Server Pagination**: Implement real pagination on the backend
- **Lazy Loading**: Load items as needed
- **Cache**: Implement Redis or similar to cache responses
- **Compression**: Use gzip to reduce response size

### 2. Interface Optimization

**Proposed Improvements**:

- **Virtualization**: Use react-window to render only visible items
- **Debounce**: Implement debounce in search
- **Skeleton Loading**: Show placeholders during loading
- **Infinite Scroll**: Alternative to traditional pagination

### 3. Security

**Proposed Improvements**:

- **Real JWT**: Implement JWT tokens with expiration
- **Refresh Tokens**: Automatic renewal system
- **HTTPS**: Force secure connections
- **Rate Limiting**: Limit login attempts

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build application for production
npm run preview  # Preview production build
npm run lint     # Run linter
```

## 🎯 Evaluation Criteria Met

✅ **React with TypeScript**: Complete implementation with defined types
✅ **Responsive**: Design adaptable for web and mobile
✅ **Styling**: Tailwind CSS for modern interface
✅ **Documentation**: Complete README with instructions
✅ **Token in Memory**: Secure storage using React Context
✅ **Architecture**: Clear separation between public and private contexts
✅ **Axios**: Configuration with interceptors for tokens
✅ **2000 Items**: Complete list with pagination and search
✅ **Logout**: Complete logout functionality

## 🎨 Component Library

The application includes a comprehensive set of reusable components:

### LoadingSpinner

A flexible loading component with multiple variants:

```tsx
// Fullscreen loading (default)
<LoadingSpinner message="Loading items..." />

// Inline loading
<LoadingSpinner variant="inline" size="sm" />

// Button loading
<LoadingSpinner variant="button" />
```

### Other Components

- **ItemCard**: Displays individual items with consistent styling
- **SearchBar**: Reusable search input with proper accessibility
- **EmptyState**: Handles no-results scenarios with clear messaging
- **Pagination**: Smart pagination with ellipsis for large datasets
- **ErrorState**: Consistent error display with retry functionality

## 🔮 Extensibility

The architecture allows easy extension for new modules:

### Public Modules (No Authentication)

- Password recovery
- User registration
- Informational pages

### Private Modules (With Authentication)

- User profile
- Settings
- Custom dashboard
- Data management

## 📄 License

This project is part of a technical challenge and is available for educational purposes.
