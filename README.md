# Orji Michael - UI/UX Designer Portfolio

A premium, professional, and fully responsive portfolio website for UI/UX Designer Orji Michael.

## Features

- **Fully Responsive**: Works seamlessly on TV, desktop, laptop, tablet, and mobile devices
- **Smooth Animations**: Professional fade, slide, scale, tilt, and flip card effects
- **Dynamic Layout**: JavaScript automatically calculates and adjusts portfolio grid based on image sizes
- **Interactive Sections**:
  - Hero section with floating geometric shapes
  - About section with detailed background
  - Portfolio with personal and client projects
  - Complete resume/CV with modal preview
  - Testimonials with flip card effects
  - Blog section (placeholder)
  - Contact form with WhatsApp integration

## Sections

1. **Navigation**: Sticky navbar with smooth scroll and active section highlighting
2. **Hero**: Full-width introduction with floating shapes and CTA button
3. **About**: Professional background with experience highlights
4. **Portfolio**: 
   - Personal projects in masonry grid with flip cards
   - Client projects with embedded previews
5. **Resume**: Complete CV with experience, education, certifications, and skills
6. **Testimonials**: Client feedback with interactive flip cards
7. **Blog**: Placeholder articles with flip card previews
8. **Contact**: Form with WhatsApp integration and contact information

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)

## Setup Instructions

1. Open `index.html` in a modern web browser
2. No build process or dependencies required
3. All assets are loaded via CDN

## Customization

### Adding Portfolio Projects

Edit the `personalProjects` array in `script.js`:

```javascript
const personalProjects = [
    {
        title: 'Your Project Title',
        image: 'path/to/your/image.jpg',
        figmaLink: 'https://figma.com/your-project'
    }
];
```

### Adding Client Projects

Edit the `clientProjects` array in `script.js`:

```javascript
const clientProjects = [
    {
        title: 'Project Title',
        description: 'Project description',
        liveLink: 'https://your-live-site.com'
    }
];
```

### Updating Contact Information

- Email: Orjiezechisom82@gmail.com
- Phone: 07061646747
- Location: Fadeyi, Yaba, Lagos State
- WhatsApp: 07061646747

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations for smooth 60fps performance
- Lazy loading for images
- Efficient scroll event handling
- Minimal JavaScript footprint

## License

© 2026 Orji Michael. All rights reserved.
