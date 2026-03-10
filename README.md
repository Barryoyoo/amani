# Amani Luxe Spa Website

A modern, elegant spa website built with **React** (Vite) and **Node.js** (Express). Complete with service listings, contact forms, and a responsive design.

## 📁 Project Structure

```
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/    # Navigation, Footer
│   │   ├── pages/         # Home, Services, About, Contact
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # Express.js backend
│   ├── index.js       # API server
│   └── package.json
└── package.json       # Root workspace scripts
```

## 🚀 Quick Start

### Installation

```bash
npm run install-all
```

### Development Mode

```bash
npm run dev
```

This will start both services:
- **Frontend** (React/Vite): http://localhost:3000
- **Backend** (Express): http://localhost:5000

### Production Build

```bash
npm run build
```

## 📋 Features

- ✨ Beautiful, responsive design with luxury spa theme
- 🏠 Home page with hero section and featured services
- 💆 Services page with pricing and descriptions
- ℹ️ About page with company mission and values
- 📧 Contact form with backend integration
- 📱 Mobile-friendly navigation
- 🎨 Golden & brown color scheme
- ⚡ Fast Vite development server

## 🛣️ Pages & Routes

- `/` - Home
- `/services` - All spa services
- `/about` - About Amani Luxe Spa
- `/contact` - Contact form

## 🔌 API Endpoints

- `GET /api/health` - Server health check
- `GET /api/services` - Get all services
- `POST /api/contact` - Submit contact form
- `GET /api/admin/messages` - View all contact messages (admin)

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run frontend + backend in watch mode |
| `npm run build` | Build frontend for production |
| `npm start` | Start backend server only |
| `npm run install-all` | Install dependencies in all folders |

## 📝 Notes

- The backend runs on port 5000
- The frontend development server runs on port 3000
- API requests from the frontend are proxied to the backend via Vite's proxy config
- Contact messages are stored in memory (replace with a database for production)

---

Made with ❤️ for Amani Luxe Spa
