# Professional Portfolio Website with Admin Dashboard

A modern, full-stack portfolio website built with Next.js, featuring a beautiful frontend and a powerful admin dashboard for content management. This project showcases a professional portfolio with dynamic content editing capabilities.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📋 Table of Contents

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

## 🎯 Overview

This is a comprehensive portfolio website solution that combines a stunning public-facing portfolio with a secure admin dashboard. The project enables professionals to showcase their work while maintaining full control over content through an intuitive content management system.

### Key Highlights

- **Modern Design**: Professional UI with glassmorphism effects, smooth animations, and gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Admin Dashboard**: Complete content management system with authentication
- **Dynamic Content**: All content is editable through the admin panel
- **File Upload**: Image and PDF upload functionality for projects and CV
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized performance

## ✨ Features

### Public Portfolio

#### 🏠 Hero Section
- Professional introduction with name, role, and description
- Animated gradient text effects
- Profile photo display with glassmorphic card design
- Social media links (GitHub, LinkedIn, Facebook, Email)
- Downloadable CV/Resume button
- "Hire Me" button with direct email mailto link

#### 👤 About Section
- Detailed personal bio and background
- Education and training showcase
- Professional statistics display
- Tilted profile image with modern styling

#### 💼 Services Section
- Service offerings with icons
- Modern card layout with hover effects
- Detailed service descriptions
- Icon integration (Web Dev, Mobile Dev, Video Editing, Software Dev)

#### 🚀 Projects Section
- Project showcase with images
- Technology stack tags for each project
- Demo and GitHub links
- Full-width image cards with overlay effects
- Hover animations and transitions

#### 📞 Contact Section
- Contact form with validation
- Direct contact information display
- Email integration (ready for EmailJS)
- Location and phone information
- Simulated form submission with feedback

#### 🔗 Footer
- Social media links
- Copyright information
- Scroll-to-top button with smooth animations

### Admin Dashboard Features

#### 🔐 Authentication System
- Secure login page with email/password
- Modern UI with animated background
- Password visibility toggle
- Loading states and error handling
- Session management with localStorage
- Professional gradient design with glassmorphism

#### 📊 Dashboard Interface
- **Modern Sidebar Navigation**: Color-coded sections with icons
- **Sticky Header**: Save button and logout always accessible
- **Responsive Layout**: Optimized for all screen sizes
- **Real-time Save Feedback**: Success/error notifications
- **Smooth Animations**: Page transitions with Framer Motion

#### ✏️ Content Management

##### Hero Section Editing
- Edit name, role, and description
- Manage social media links (GitHub, LinkedIn, Facebook, Email)
- Upload profile photo (JPG/PNG, min 500x500px)
- Upload CV/Resume (PDF format)

##### About Section Editing
- Edit personal description
- Manage education and training entries
  - Course name
  - Duration
  - Institute name
- Multiple training courses supported

##### Services Section Editing
- Edit service titles
- Modify service descriptions
- Four services with complete customization

##### Projects Section Management
- **Add New Projects**: One-click project addition
- **Delete Projects**: Remove unwanted projects
- **Edit Project Details**:
  - Project title
  - Description
  - Demo URL
  - GitHub repository URL
  - Project image upload
  - Technology stack (coming soon)
- Empty state with call-to-action
- Numbered project badges
- Drag-free inline editing

##### Contact Section Editing
- Update email address
- Modify phone number
- Change location/address

#### 📁 File Upload System
- **Profile Photo Upload**: Overwrites `/public/profile.jpg`
- **CV Upload**: Overwrites `/public/cv.pdf`
- **Project Images**: Upload to `/public/uploads/`
- Drag-and-drop support
- File type validation
- Upload progress indicators
- Automatic file naming with timestamps

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: UI component library
- **TypeScript**: Type-safe JavaScript

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Icons**: Icon library (Font Awesome icons)
- **Custom CSS**: Glassmorphism and gradient effects

### Backend & API
- **Next.js API Routes**: Serverless functions for backend logic
- **File System API**: For JSON data storage and file uploads
- **Node.js**: Runtime environment

### State Management
- **React Hooks**: useState, useEffect for local state
- **localStorage**: Session persistence for admin auth

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **PostCSS**: CSS processing with Tailwind

### Fonts & Assets
- **Google Fonts (Poppins)**: Custom web font
- **Custom Images**: AI-generated project images
- **SVG Icons**: Scalable vector graphics

## 📂 Project Structure

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
└── README.md                      # This file
```

## 🚀 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📖 Usage

### Public Portfolio

Navigate to `http://localhost:3000` to view the portfolio. All sections are accessible through the navbar:

- **Home**: Hero section with introduction
- **About**: Personal background and education
- **Services**: Service offerings
- **Projects**: Portfolio projects
- **Contact**: Contact form and information

### Admin Dashboard

#### Accessing the Dashboard

1. Navigate to `http://localhost:3000/admin/login`
2. Enter your admin credentials:
   - **Email**: `your-email@example.com`
   - **Password**: `your-password`
3. Click "Sign In to Dashboard"

#### Using the Dashboard

1. **Select a Section**: Click on the sidebar tabs (Hero, About, Services, Projects, Contact)
2. **Edit Content**: Modify text fields, update URLs, or upload files
3. **Save Changes**: Click the "Save" button in the top-right corner
4. **Upload Files**: Use the upload buttons in Hero and Projects sections
5. **Manage Projects**: Use "Add Project" or delete icons to manage projects

#### Content Editing Tips

- **Text Fields**: Click and type to edit
- **Images**: Use the upload button, select file, wait for confirmation
- **URLs**: Ensure full URLs (include `https://`)
- **Save Often**: Click save after making changes

## 🔐 Admin Dashboard

### Authentication

- **Login Page**: Professional gradient design with glassmorphism
- **Email-based Auth**: Uses email instead of username
- **Password Toggle**: Show/hide password feature
- **Loading States**: Animated spinner during login
- **Error Handling**: Clear error messages for invalid credentials
- **Session Management**: localStorage-based authentication

### Dashboard Features

#### Navigation
- **Sidebar**: Color-coded sections with icons
- **Active States**: Visual indication of current section
- **Responsive**: Collapses to mobile menu on small screens

#### Content Sections

1. **Hero Management**
   - Personal info editing
   - Social links management
   - **File Uploads**:
     - Profile photo (image files)
     - CV/Resume (PDF)
   - Placeholder guidance

2. **About Management**
   - Bio editing
   - Training courses:
     - Course name
     - Duration
     - Institute
   - Multiple entries supported

3. **Services Management**
   - Service title editing
   - Description updates
   - Four service slots

4. **Projects Management**
   - **Add Projects**: Create new project cards
   - **Delete Projects**: Remove with confirmation
   - **Edit Details**:
     - Title
     - Description
     - Demo link
     - GitHub link
     - Image upload
   - Empty state with CTA

5. **Contact Management**
   - Email editing
   - Phone number
   - Location/address

#### Save System
- **Visual Feedback**: Button changes color on success
- **Auto-hide**: Success message disappears after 3 seconds
- **Error Handling**: Alerts user if save fails

## 🌐 API Routes

### 1. Content API (`/api/content`)

**GET** `/api/content`
- Returns all portfolio content from `content.json`
- No authentication required

**POST** `/api/content`
- Updates portfolio content
- Accepts JSON body with full content structure
- Returns success/failure status

### 2. Upload API (`/api/upload`)

**POST** `/api/upload`
- Handles file uploads
- Query params:
  - `filename`: Optional custom filename (e.g., `profile.jpg`)
- Accepts FormData with file
- Returns:
  ```json
  {
    "success": true,
    "url": "/uploads/filename.ext"
  }
  ```
- Saves to `/public/` or `/public/uploads/`

## 🎨 Customization

### Color Scheme

The project uses a custom color palette defined in `tailwind.config.js`:

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

- **Primary**: Poppins (Google Fonts)
- Configured in `app/layout.tsx`

### Animations

- Powered by Framer Motion
- Customize timing in component files
- Key animations:
  - Fade in/out
  - Slide up/down
  - Scale effects
  - Gradient animations

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Drag and drop or connect GitHub
- **AWS Amplify**: Connect repository
- **Railway**: One-click deploy

### Build Command

```bash
npm run build
```

### Start Command

```bash
npm start
```

## 🔒 Security Considerations

⚠️ **Important**: This project uses basic authentication for demonstration purposes.

For production:
- Implement proper backend authentication (NextAuth.js, JWT)
- Use environment variables for credentials
- Add CSRF protection
- Implement rate limiting
- Use secure session management
- Enable HTTPS

## 📝 Content Data Structure

The `content.json` file structure:

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

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Minhajul Islam**
- GitHub: [@minhajul-islam07](https://github.com/minhajul-islam07)
- LinkedIn: [minhajul-islam07](https://linkedin.com/in/minhajul-islam07)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- React Icons for comprehensive icon library
- Vercel for hosting and deployment

---

**Made with ❤️ by Minhajul Islam**
