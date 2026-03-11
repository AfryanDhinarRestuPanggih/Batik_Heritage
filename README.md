# 🌺 Batik Heritage

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Batik Heritage is a beautifully designed, modern, culturally inspired landing page built to showcase traditional Indonesian batik craftsmanship. The project balances authentic Indonesian aesthetics with a clean, responsive, and professional user interface suitable for a premium boutique.

---

## ✨ Features

- **Culturally Inspired Design**: A warm, earthy color palette featuring browns, creams, golds, and beiges.
- **Custom Batik Theming**: Integrated CSS-based subtle batik patterns across the application.
- **Premium Asset Generation**: High-resolution, custom-generated imagery of iconic motifs like *Kawung*, *Parang*, *Mega Mendung*, *Truntum*, and *Sogan*.
- **Responsive Architecture**: Fully responsive grid layouts and mobile-ready navigation menus.
- **Smooth Interactions**: Hover animations (`hover-lift`), smooth scroll navigation, and elegant transitions.
- **Modern Tech Stack**: Scaffolded with Vite, utilizing React components and Tailwind CSS v4 styling.

---

## 🏗️ Project Structure

The project has been organized into modular React components for optimal maintainability:

```
src/
├── assets/
│   └── images/              # Custom AI generated premium batik imagery
├── components/
│   ├── AboutBatik.jsx       # Storytelling section about UNESCO heritage
│   ├── ContactSection.jsx   # Contact form and store information
│   ├── FeaturedCollection.jsx # Highlighting premium collections
│   ├── Footer.jsx           # Clean footer navigation
│   ├── Hero.jsx             # Aesthetic banner with dark gradient overlay
│   ├── Navbar.jsx           # Responsive dynamic navigation bar
│   ├── ProductGrid.jsx      # Gallery displaying various specific batik motifs
│   └── Testimonials.jsx     # Elegant customer reviews section
├── pages/
│   └── Home.jsx             # Main composition page
├── App.jsx                  # Root App
├── index.css                # Global CSS containing Tailwind injections and theming
└── main.jsx                 # Entry point
```

---

## 🚀 Getting Started

To run the project locally, simply follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/AfryanDhinarRestuPanggih/Batik_Heritage.git
   ```
2. Navigate into the project directory:
   ```bash
   cd Batik_Heritage
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

---

## 🎨 Theme Configuration

The project utilizes native CSS variable theming injected alongside TailwindCSS v4 inside `index.css`:

```css
@theme {
  --color-batik-brown: #5d4037;
  --color-batik-dark: #3e2723;
  --color-batik-gold: #c6a15b;
  --color-batik-cream: #f5f0e6;
  --color-batik-beige: #e8dcc4;
}
```

---

## 📝 License
This project was built as a showcase for a Batik E-commerce Landing Page and is open to modification and non-commercial educational use.

**Created with ❤️ to preserve Indonesian Culture.**
