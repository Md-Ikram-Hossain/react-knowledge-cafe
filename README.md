# ☕ Knowledge Cafe (React Application)

A modern, interactive React web application designed for reading articles, saving favorite blogs, and tracking reading time in real-time. Built with **React**, **Vite**, and styled with **Tailwind CSS**.

---

## 🚀 Live Demo & Repository

- **Repository**: [github.com/Md-Ikram-Hossain/react-knowledge-cafe](https://github.com/Md-Ikram-Hossain/react-knowledge-cafe.git)

---

## ✨ Features

- 📖 **Dynamic Blog Feed**: Fetch and display tech and programming articles from dynamic JSON data.
- 🔖 **Bookmark System**: Easily bookmark articles to read later and view total bookmark count.
- ⏱️ **Reading Time Tracker**: Accumulate total reading time when marking articles as read.
- ⚡ **Fast Performance**: Powered by Vite for instant Hot Module Replacement (HMR).
- 📱 **Responsive Design**: Clean, modern UI adapted for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack & Tools

- **Frontend**: React.js (Hooks, Functional Components)
- **Styling**: Tailwind CSS / CSS Modules
- **Icons**: FontAwesome / Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

---

## 📁 Project Structure

```text
react-knowledge-cafe/
├── public/
│   └── blogs.json           # Mock data file containing blog posts
├── src/
│   ├── components/
│   │   ├── Header/          # Application navigation header & profile
│   │   ├── Blogs/           # Main component fetching blog posts
│   │   ├── Blog/            # Individual blog card item
│   │   ├── Bookmarks/       # Sidebar container for bookmarks & reading time
│   │   └── Bookmark/        # Single bookmarked article title display
│   ├── App.jsx              # Main App component managing top-level state
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
