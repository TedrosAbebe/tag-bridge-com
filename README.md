# Tedros Media Hub - Personal Brand Website

A modern, responsive one-page website built with Next.js and Tailwind CSS for personal branding and product sales.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Static site generation for optimal loading speeds
- **Social Integration**: Links to TikTok, YouTube, Instagram, and Facebook
- **Direct Communication**: Phone and WhatsApp contact integration
- **Video Showcase**: Embedded TikTok and YouTube videos
- **Product Display**: Grid layout for books and digital products
- **No Backend Required**: Pure static site with no database or authentication

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Emoji
- **Deployment**: Vercel (optimized)
- **Type Safety**: TypeScript

## 📱 Sections

1. **Header/Navigation**: Sticky header with smooth scroll navigation
2. **Hero Section**: Brand introduction with profile image and social links
3. **Video Content**: Embedded TikTok and YouTube videos
4. **Products & Books**: Grid layout with call-to-action buttons
5. **Contact**: Direct phone and WhatsApp communication
6. **Footer**: Additional links and contact information

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized static build in the `out` directory.

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Method 2: GitHub Integration

1. **Push your code to GitHub**
2. **Connect your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure the build

### Method 3: Manual Upload

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to Vercel or any static hosting service

## ⚙️ Customization

### Update Contact Information

Edit the phone number and WhatsApp links in:
- `app/components/Hero.tsx`
- `app/components/VideoSection.tsx`
- `app/components/ProductsSection.tsx`
- `app/components/ContactSection.tsx`
- `app/components/Footer.tsx`

Replace `+251991856292` with your actual phone number.

### Update Social Media Links

Edit the social media URLs in `app/components/SocialIcons.tsx`:
```typescript
const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@yourusername', // Update this
    icon: '🎵',
    color: 'hover:bg-black'
  },
  // ... update other links
]
```

### Add Real Videos

In `app/components/VideoSection.tsx`, replace the placeholder embed URLs with your actual video URLs:
- For YouTube: `https://www.youtube.com/embed/YOUR_VIDEO_ID`
- For TikTok: Use TikTok's embed code or link to the video

### Update Products

Edit the products array in `app/components/ProductsSection.tsx` to add your actual products, books, and services.

### Customize Branding

- Update the brand name in `app/components/Header.tsx` and `app/layout.tsx`
- Change colors in `tailwind.config.js`
- Update the profile image placeholder in `app/components/Hero.tsx`

## 📊 SEO Configuration

The site includes comprehensive SEO setup in `app/layout.tsx`:
- Meta title and description
- Open Graph tags for social sharing
- Twitter Card support
- Structured data ready

Update the metadata to match your brand and content.

## 🎨 Design Features

- **Smooth Animations**: CSS animations for enhanced user experience
- **Hover Effects**: Interactive elements with visual feedback
- **Responsive Grid**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts
- **Color Scheme**: Professional blue and purple gradient theme
- **Shadow Effects**: Subtle depth and dimension

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly buttons and links
- Optimized images and loading
- Fast performance on mobile networks

## 🔧 Configuration Files

- `next.config.js`: Next.js configuration for static export
- `tailwind.config.js`: Tailwind CSS customization
- `package.json`: Dependencies and scripts
- `tsconfig.json`: TypeScript configuration

## 📞 Contact Integration

The site uses direct communication methods:
- **Phone calls**: `tel:` links for immediate calling
- **WhatsApp**: Direct links to WhatsApp chat
- **No forms**: Eliminates spam and ensures direct contact

## 🚀 Performance Features

- Static site generation (SSG)
- Optimized images
- Minimal JavaScript bundle
- Fast loading times
- SEO-friendly URLs

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support:
- 📞 Call: +251 99 185 6292
- 💬 WhatsApp: https://wa.me/251991856292

---

**Built with ❤️ using Next.js and Tailwind CSS**