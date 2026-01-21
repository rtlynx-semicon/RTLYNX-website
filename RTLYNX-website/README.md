# RTLYNX React Website

A modern React application for RTLYNX SEMICON, converted from the original HTML website with enhanced features.

## Features

- ✅ React with Vite for fast development
- ✅ Tailwind CSS for styling (matching original design)
- ✅ React Router for navigation
- ✅ Enhanced logo background effect
- ✅ Responsive design (mobile-friendly)
- ✅ All original pages and content preserved

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd rtlynx-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
rtlynx-react/
├── public/
│   └── assets/          # Images, CSS, JS from original site
├── src/
│   ├── components/      # Shared components (Header, Footer)
│   ├── pages/           # Page components
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
└── package.json
```

## Pages

- `/` - Home
- `/about` - About RTLYNX
- `/contact` - Contact page with form
- `/services/chip` - Chip & Silicon Engineering
- `/services/hardware` - Hardware Platform Engineering
- `/services/embedded` - Systems & Embedded Engineering
- `/services/connected` - Secured & Connected Ecosystems
- `/services/ai` - Agentic AI Systems
- `/board` - Board of Directors
- `/careers` - Careers
- `/blogs` - Blogs & Insights

## Technologies Used

- React 19
- React Router DOM
- Tailwind CSS
- Vite

## Notes

- The logo is displayed as a subtle background on all pages
- All styling matches the original HTML website
- Mobile menu is functional
- All assets are preserved from the original site
