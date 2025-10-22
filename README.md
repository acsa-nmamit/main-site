# ACSA Site

A modern web application for the ACSA (Association of Computer Science and Applications) organization.
- made by iotserver24

## Overview

This is a Next.js-based web application featuring:
- Event management and registration system
- Faculty information display
- Team member showcase
- Admin panel for event management
- Modern UI with responsive design

## Features

- **Event Management**: Browse and register for upcoming events
- **Faculty Directory**: View faculty information and profiles
- **Team Showcase**: Meet the team behind ACSA
- **Admin Panel**: Manage events and registrations
- **Responsive Design**: Works seamlessly on all devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom UI components with shadcn/ui
- **Database**: File-based database system
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd acsa-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
acsa-site/
├── app/                 # Next.js app directory
│   ├── admin/          # Admin panel pages
│   ├── api/            # API routes
│   ├── events/         # Event pages
│   ├── faculties/      # Faculty pages
│   └── team/           # Team pages
├── components/         # Reusable components
├── lib/               # Utility functions and database
├── public/            # Static assets
└── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
