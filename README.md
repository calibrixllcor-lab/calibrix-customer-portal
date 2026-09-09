# Calibrix Portal - Enterprise ADAS Calibration Customer Portal

A modern web application for managing ADAS (Advanced Driver Assistance Systems) calibration requests and recommendations with an integrated admin dashboard.

## Features

- **Customer Dashboard** - Track calibration requests and status
- **Admin Panel** - Manage requests, view system architecture, track recommendations
- **AI Chat Widget** - Integrated Gemini AI assistant for customer support
- **Real-time Updates** - Monitor work in progress and system status
- **Responsive Design** - Mobile-friendly interface using Tailwind CSS

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API
- **Routing**: Custom hash-based router

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory ready for deployment.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui.tsx       # Shared UI components
│   └── AIChatWidget.tsx  # Gemini AI chat integration
├── pages/           # Page components
│   ├── HomePage.tsx
│   └── admin/       # Admin dashboard pages
│       ├── AdminADASRecs.tsx
│       ├── AdminSystemArch.tsx
│       ├── AdminManageRequests.tsx
│       ├── AdminWorkInProgress.tsx
│       └── AdminPlaceholder.tsx
├── layouts/         # Layout wrappers
│   ├── PublicLayout.tsx
│   └── PortalLayout.tsx
├── context/         # React Context
│   └── AuthContext.tsx
├── hooks/           # Custom React hooks
│   └── useHashRouter.ts
├── lib/             # Utility libraries
│   └── gemini.ts    # Gemini API integration
├── data/            # Mock data
│   └── mock.ts
├── types.ts         # TypeScript type definitions
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your-api-key-here
```

## Development Workflow

1. **Local Development**: Run `npm run dev` for hot module reloading
2. **Build & Test**: Run `npm run build` to verify production build
3. **Deployment**: Deploy the `dist/` directory to your hosting platform

## Deployment

The `dist/` directory is ready to be deployed to any static hosting service:

- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any traditional web server

## Support

For issues or feature requests, please open an issue in the GitHub repository.

## License

Copyright © 2024 Calibrix. All rights reserved.
