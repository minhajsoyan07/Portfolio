# Professional Portfolio Website with Admin Dashboard

A modern, full-stack portfolio website built with Next.js, featuring a clean frontend and an admin dashboard for content management. This project showcases a professional portfolio with dynamic content editing capabilities.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Dashboard](#admin-dashboard)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [License](#license)

## Overview

This is a comprehensive portfolio website solution that combines a public-facing portfolio with a secure admin dashboard. The project enables professionals to showcase their work while maintaining control over content through an intuitive content management system.

### Key Highlights

- **Modern Design**: Clean UI with subtle blur effects, smooth animations, and gradient accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop viewports
- **Admin Dashboard**: Content management system with email-based authentication
- **Dynamic Content**: All content is editable through the admin panel
- **File Upload**: Image and PDF upload functionality for projects and CV
- **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading performance

## Features

### Public Portfolio

#### Hero Section
- Introduction with name, role, and description
- Animated gradient typography
- Profile photo display with card design
- Social media links (GitHub, LinkedIn, Facebook, Email)
- Downloadable CV/Resume button
- Direct contact mailto link

#### About Section
- Personal bio and background
- Education and training showcase
- Professional statistics display
- Stylized profile image

#### Services Section
- Service offerings with icon indicators
- Grid card layout with hover effects
- Detailed service descriptions
- Integration for Web Dev, Mobile Dev, Video Editing, Software Dev

#### Projects Section
- Project showcase with preview cards
- Technology stack tags for each project
- Live demo and GitHub repository links
- Image cards with overlay effects
- Smooth hover animations and transitions

#### Contact Section
- Contact form with validation
- Direct contact information display
- Email integration ready
- Location and phone information
- User feedback on submission

#### Footer
- Social media links
- Copyright information
- Scroll-to-top button with smooth animations

### Admin Dashboard Features

#### Authentication System
- Login page with email and password
- Password visibility toggle
- Loading states and clear error handling
- Session persistence via localStorage
- Clean card layout with background styling

#### Dashboard Interface
- **Sidebar Navigation**: Dedicated section tabs
- **Sticky Header**: Save and logout controls always accessible
- **Responsive Layout**: Optimized for mobile and desktop screens
- **Save Feedback**: Visual success and error indicators
- **Page Transitions**: Smooth transitions with Framer Motion

#### Content Management

##### Hero Section Editing
- Edit name, role, and description
- Manage social media links (GitHub, LinkedIn, Facebook, Email)
- Upload profile photo (JPG/PNG)
- Upload CV/Resume (PDF format)

##### About Section Editing
- Edit personal description
- Manage education and training entries (course name, duration, institute)
- Multiple training courses supported

##### Services Section Editing
- Edit service titles
- Modify service descriptions
- Four service slots with full customization

##### Projects Section Management
- Add new project cards
- Delete unwanted projects
- Edit title, description, demo link, and GitHub repository URL
- Project image upload
- Technology stack badges

##### Contact Section Editing
- Update email address
- Modify phone number
- Update location address

#### File Upload System
- **Profile Photo Upload**: Overwrites `/public/profile.jpg`
- **CV Upload**: Overwrites `/public/cv.pdf`
- **Project Images**: Saves to `/public/uploads/`
- File type validation and progress states
- Automatic file naming with timestamps

## Technologies Used

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: UI component library
- **TypeScript**: Type-safe development

### Styling & UI
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth motion and entrance animations
- **React Icons**: Icon set
- **Custom CSS**: Accent gradients and glassmorphism

### Backend & API
- **Next.js API Routes**: Backend endpoints for content and upload handlers
- **File System API**: JSON data storage and local file handling
- **Node.js**: Runtime environment

### State Management
- **React Hooks**: Local component state
- **localStorage**: Session persistence for dashboard auth

### Development Tools
- **ESLint**: Code quality and linting
- **PostCSS**: CSS processing with Tailwind CSS
- **TypeScript**: Static typing

### Fonts & Assets
- **Google Fonts (Poppins)**: Custom typography
- **Project Images**: Optimized WebP and PNG assets

## Project Structure

```
my-portfolio/
├── app/
│   ├── admin/
│   │   ├── dashboard/
│   │   │   └── page.tsx          # Admin dashboard interface
│   │   └── login/
│   │       └── page.tsx           # Admin login page
│   ├── about/
│   │   └── page.tsx               # About page
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── projects/
│   │   └── page.tsx               # Projects page
│   ├── services/
│   │   └── page.tsx               # Services page
│   ├── api/
│   │   ├── content/
│   │   │   └── route.ts           # GET/POST content data
│   │   └── upload/
│   │       └── route.ts           # File upload handler
│   ├── layout.tsx                 # Root layout with Navbar & Footer
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── Navbar.tsx                 # Navigation component
│   └── Footer.tsx                 # Footer component
├── sections/
│   ├── Hero.tsx                   # Hero section
│   ├── About.tsx                  # About section
│   ├── Services.tsx               # Services section
│   ├── Projects.tsx               # Projects section
│   └── Contact.tsx                # Contact section
├── data/
│   └── content.json               # Dynamic content storage
├── public/
│   ├── uploads/                   # Uploaded project images
│   ├── profile.jpg                # Profile photo
│   ├── cv.pdf                     # Resume/CV file
│   ├── mobile_app_project.png    # Project image 1
│   ├── web_app_project.png       # Project image 2
│   └── university_mgt_project.png # Project image 3
├── tailwind.config.js             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
├── next.config.js                 # Next.js configuration
├── package.json                   # Dependencies
└── README.md                      # Documentation
```

## Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/minhajsoyan07/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Usage

### Public Portfolio

Navigate to `http://localhost:3000` to view the portfolio:

- **Home**: Hero section with introduction
- **About**: Background, skills, and education
- **Services**: Service offerings
- **Projects**: Completed and ongoing work
- **Contact**: Contact form and communication channels

### Admin Dashboard

#### Accessing the Dashboard

1. Navigate to `http://localhost:3000/admin/login`
2. Enter your admin credentials
3. Click "Sign In to Dashboard"

#### Using the Dashboard

1. **Select a Section**: Use the sidebar to switch between Hero, About, Services, Projects, and Contact
2. **Edit Content**: Modify text fields, update URLs, or upload files
3. **Save Changes**: Click the "Save" button in the top-right corner
4. **Upload Files**: Use the upload buttons in the Hero and Projects sections
5. **Manage Projects**: Add or remove project items

## API Routes

### 1. Content API (`/api/content`)

- **GET `/api/content`**: Returns all portfolio content from `content.json`
- **POST `/api/content`**: Updates portfolio content with JSON payload

### 2. Upload API (`/api/upload`)

- **POST `/api/upload`**: Handles image and PDF file uploads and returns the file path

## Customization

### Color Scheme

Custom colors are configured in `tailwind.config.js`:

```javascript
colors: {
  'dark-primary': '#0a0a0a',
  'dark-secondary': '#1a1a1a',
  'text-primary': '#2d2d2d',
  'text-secondary': '#6b7280',
  'accent-orange': '#ff6b35',
  'accent-cyan': '#4ecdc4', 
  'accent-purple': '#9b59b6',
  'accent-pink': '#e84393',
  'border': '#e5e7eb',
}
```

### Fonts

- Primary font: Poppins (Google Fonts configured in `app/layout.tsx`)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project into Vercel
3. Deploy automatically

### Build Command

```bash
npm run build
```

### Start Command

```bash
npm start
```

## Security Considerations

**Note**: For production deployments:
- Implement secure authentication (e.g., NextAuth.js or JWT)
- Store credentials in environment variables (`.env.local`)
- Implement CSRF protection and rate limiting
- Serve over HTTPS

## Content Data Structure

The `content.json` file schema:

```json
{
  "hero": {
    "name": "string",
    "role": "string",
    "description": "string",
    "socialLinks": {
      "github": "url",
      "linkedin": "url",
      "facebook": "url",
      "email": "mailto:"
    }
  },
  "about": {
    "description": "string",
    "training": [
      {
        "course": "string",
        "duration": "string",
        "institute": "string"
      }
    ]
  },
  "services": [
    {
      "id": number,
      "title": "string",
      "description": "string",
      "icon": "string"
    }
  ],
  "projects": [
    {
      "id": number,
      "title": "string",
      "description": "string",
      "tech": ["string"],
      "demo": "url",
      "github": "url",
      "image": "path"
    }
  ],
  "contact": {
    "email": "string",
    "phone": "string",
    "address": "string"
  }
}
```

## Contributing

Contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Minhajul Islam**
- GitHub: [@minhajsoyan07](https://github.com/minhajsoyan07)
- LinkedIn: [minhajul-islam07](https://linkedin.com/in/minhajul-islam07)

## Acknowledgments

- Next.js team for the framework
- Tailwind CSS for styling utilities
- Framer Motion for animation capabilities
- React Icons for icon components
- Vercel for platform support
