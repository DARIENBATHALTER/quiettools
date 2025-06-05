# QuietTools Landing Page

A premium, conversion-focused landing page for QuietTools - custom tool-building services that turn messy data into meaning.

## 🎯 Features

- **Premium Design**: Clean, quiet aesthetic with warm grays and muted colors
- **Horizontally Scrolling Galleries**: Showcase tool screenshots with smooth scrolling
- **Video Embed Support**: MP4 and YouTube integration ready
- **Mobile Responsive**: Optimized for all devices
- **Smooth Navigation**: Anchored sections with smooth scrolling
- **Performance Optimized**: Fast loading with minimal dependencies
- **Deployment Ready**: Configured for Vercel, Netlify, and other platforms

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Serve locally** using any method:

   ```bash
   # Python (recommended)
   python3 -m http.server 3000
   
   # Node.js (if you have live-server installed)
   npx live-server --port=3000
   
   # Or simply open index.html in your browser
   ```

3. **Visit** `http://localhost:3000`

### File Structure

```
quiettools-landing/
├── index.html          # Main landing page
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
├── favicon.svg         # Site favicon
├── package.json        # Project configuration
├── README.md           # This file
└── assets/            # Create this folder for your content
    ├── screenshots/   # Tool screenshots
    ├── videos/        # Demo videos
    └── images/        # Other images
```

## 📝 Customization Guide

### 1. Adding Screenshots

Replace the placeholder screenshots with your actual tool images:

```javascript
// Add via JavaScript
QuietTools.addScreenshotToGallery('wasabi', 'assets/screenshots/wasabi-dashboard.png', 'WASABI Dashboard');

// Or replace HTML placeholders directly
<div class="screenshot-placeholder">Your Screenshot Here</div>
// becomes:
<img src="assets/screenshots/your-image.png" alt="Tool Screenshot" class="screenshot">
```

### 2. Adding Videos

For YouTube videos:
```javascript
QuietTools.addVideoToTool('wasabi', 'https://www.youtube.com/embed/YOUR_VIDEO_ID', 'youtube');
```

For MP4 videos:
```javascript
QuietTools.addVideoToTool('inventory', 'assets/videos/inventory-demo.mp4', 'mp4');
```

### 3. Updating Contact Information

1. **Email**: Replace `hello@quiettools.dev` in the contact section
2. **Calendly**: Add your Calendly embed URL:
   ```javascript
   QuietTools.initializeCalendly('https://calendly.com/yourusername/discovery-call');
   ```

### 4. Customizing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #2c3e50;    /* Main brand color */
    --color-secondary: #5e7a7a;  /* Secondary brand color */
    --color-accent: #f4c430;     /* Accent color (golden yellow) */
    /* ... other colors */
}
```

### 5. Updating Content

- **Tool descriptions**: Edit the text in each `.tool` section
- **Services & pricing**: Update the `.service` sections
- **About text**: Modify the "Who I Help" section
- **Contact copy**: Customize the contact section messaging

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**: `npm i -g vercel`
2. **Deploy**: `vercel --prod`
3. **Domain**: Connect your `quiettools.dev` domain in Vercel dashboard

### Netlify

1. **Drag and drop** the project folder to Netlify
2. **Or connect** your Git repository
3. **Domain**: Configure your custom domain in settings

### GitHub Pages

1. **Push** to a GitHub repository
2. **Enable** GitHub Pages in repository settings
3. **Set source** to main branch

### Manual Hosting

Upload all files to any web hosting service. The site uses only HTML, CSS, and vanilla JavaScript - no server required.

## 📱 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, Flexbox, ES6+ JavaScript

## 🎨 Design Philosophy

This landing page follows "quiet" design principles:

- **Generous whitespace** for breathing room
- **Subtle animations** that enhance rather than distract
- **Readable typography** with Inter and Merriweather fonts
- **Muted color palette** that feels premium and calm
- **Progressive disclosure** of information
- **Conversion-focused** but not aggressive

## 🔧 Advanced Customization

### Adding New Tools

1. **Copy** an existing tool section in `index.html`
2. **Update** the `data-tool` attribute with a unique name
3. **Add** your content and media
4. **Style** if needed (CSS is modular)

### Custom Forms

Replace the contact placeholder with your preferred form solution:

- **Netlify Forms**: Add `netlify` attribute to form
- **Formspree**: Use their form endpoint
- **Custom**: Integrate with your backend

### Analytics

Add your analytics code before the closing `</body>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Performance Tips

- **Optimize images**: Use WebP format, compress screenshots
- **Lazy loading**: Add `loading="lazy"` to images below the fold
- **CDN**: Use a CDN for assets if hosting on custom servers
- **Minify**: Minify CSS/JS for production (optional, files are already clean)

## 🤝 Support

This landing page is designed to be easily maintainable. For questions about customization:

1. **Check** this README first
2. **Review** the clean, commented code
3. **Test** changes locally before deploying

## 📄 License

MIT License - feel free to adapt for your own projects.

---

**Built for QuietTools** - Turning messy data into meaning, one tool at a time. 