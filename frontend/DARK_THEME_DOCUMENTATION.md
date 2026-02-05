# Dark Theme Feature Documentation

## Overview
The app now includes a light/dark theme toggle feature that allows users to switch between light and dark modes. The theme preference is saved to localStorage and persists across sessions.

## Components

### 1. ThemeContext (`src/context/ThemeContext.jsx`)
- **Purpose**: Provides theme state management and toggle functionality
- **Features**:
  - Detects user's system preference (prefers-color-scheme)
  - Stores theme preference in localStorage
  - Provides `useTheme()` hook for accessing theme state

**Usage**:
```jsx
import { useTheme } from '../context/ThemeContext'

export function MyComponent() {
  const { isDark, toggleTheme } = useTheme()
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
```

### 2. ThemeProvider
- Wraps the entire app in `App.jsx`
- Automatically applies the `dark` class to the `<html>` element
- Manages theme state globally

## How It Works

1. **Initial Load**:
   - Checks localStorage for saved theme preference
   - Falls back to system preference (prefers-color-scheme: dark)
   - Falls back to light theme if no preference found

2. **Toggle**:
   - User clicks the theme toggle button (sun/moon icon)
   - `toggleTheme()` updates the state
   - `dark` class is added/removed from `<html>` element
   - Theme preference is saved to localStorage

3. **Styling**:
   - Uses Tailwind's `dark:` prefix for dark mode styles
   - Custom CSS with `.dark` selector for additional styles
   - Smooth transitions (300ms) between themes

## Implementation Details

### Dark Mode Styles
- **Navigation**: Inverted colors with proper contrast
- **Text**: Light text on dark backgrounds
- **Backgrounds**: Dark backgrounds with adjusted tones
- **Buttons**: Updated colors for dark mode
- **Scrollbar**: Adjusted for dark theme

### Tailwind Configuration
- `darkMode: 'class'` enabled in `tailwind.config.js`
- Allows Tailwind's `dark:` prefix to work throughout the app

### CSS Custom Styles
Dark mode styles are applied to:
- Body and app container backgrounds
- Headings
- Buttons
- Scrollbar
- Sections and other elements

## Files Modified

1. **src/context/ThemeContext.jsx** (NEW)
   - Theme context and provider setup

2. **src/App.jsx**
   - Added ThemeProvider wrapper
   - Imported ThemeContext

3. **src/components/Navigation.jsx**
   - Added theme toggle button with sun/moon icons
   - Updated styles with `dark:` prefix
   - Added useTheme hook

4. **src/index.css**
   - Added dark mode styles
   - Added transitions for smooth theme switching
   - Updated button and heading styles for dark mode

5. **tailwind.config.js**
   - Added `darkMode: 'class'` configuration

## Feature Benefits

✅ **User Preference**: Respects system dark mode preference
✅ **Persistence**: Saves preference to localStorage
✅ **Smooth Transitions**: 300ms CSS transitions between themes
✅ **Accessibility**: Proper contrast ratios in both themes
✅ **Easy Integration**: Simple `useTheme()` hook for any component
✅ **Extensible**: Easy to add dark mode styles to any new component

## Adding Dark Mode Styles to New Components

### Using Tailwind Dark Prefix:
```jsx
<div className="bg-white dark:bg-dark-900 text-dark-900 dark:text-cream-50">
  Content here
</div>
```

### Using CSS:
```css
.my-element {
  background: #ffffff;
  color: #2d2d2d;
  transition: background-color 0.3s ease, color 0.3s ease;
}

html.dark .my-element {
  background: #1a1a1a;
  color: #f0f0f0;
}
```

## Testing the Feature

1. Click the sun/moon icon in the navigation bar
2. Verify the theme switches smoothly
3. Reload the page - the theme should persist
4. Check your system preferences - the theme should match on first visit
5. Test on both desktop and mobile views
