# Referral System Frontend

A modern, responsive React application for managing course referrals with smooth animations and an intuitive user interface.

![image alt](https://github.com/Manav-Chudasama/Accredian-frontend-task/blob/7ccd0ff76a0cd7dc0efcecc2c94a4af04ae8068c/Screenshot%202025-02-14%20183540.png)

## 🚀 Features

- Modern UI with Framer Motion animations
- Responsive design using Tailwind CSS
- Smooth scrolling with Lenis
- Interactive components with hover effects
- Real-time statistics display
- Dynamic course carousel
- Testimonials showcase
- FAQ accordion
- Mobile-friendly navigation

## 🛠️ Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Swiper
- Lenis Smooth Scroll
- ESLint

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/Manav-Chudasama/Accredian-frontend-task.git
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
cp .env.sample .env
```

4. Update the `.env` file with your configuration:

```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📦 Project Structure

```
frontend/
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── fonts/          # Font files
├── src/
│   ├── components/     # React components
│   │   ├── animations/ # Animation utilities
│   │   └── ...        # Feature components
│   ├── services/       # API services
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── .env.sample        # Environment variables template
└── package.json       # Project dependencies
```

## 🎨 Components

### Core Components

- `Navbar`: Navigation bar with smooth scroll links
- `Hero`: Landing section with statistics
- `ReferralModal`: Form for referring friends
- `Footer`: Site footer with navigation and social links

### Feature Components

- `HowItWorks`: Step-by-step guide
- `Benefits`: Rewards and perks showcase
- `PopularCourses`: Course carousel
- `Testimonials`: User success stories
- `FAQ`: Frequently asked questions
- `CTA`: Call-to-action sections

### Animation Components

- `FadeIn`: Fade-in animation wrapper
- `ScaleIn`: Scale animation wrapper
- `Reveal`: Hover and tap animation wrapper

## 🔧 Configuration

### Environment Variables

| Variable     | Description     | Required |
| ------------ | --------------- | -------- |
| VITE_API_URL | Backend API URL | Yes      |

### Vite Configuration

The project uses Vite with the following plugins:

- `@vitejs/plugin-react`: React support
- `@tailwindcss/vite`: Tailwind CSS integration

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel Deployment

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details
