# Assets Setup Guide

This folder structure helps organize your media files for the QuietTools landing page.

## 📁 Folder Structure

```
assets/
├── screenshots/
│   ├── wasabi/
│   │   ├── dashboard.png
│   │   ├── analytics.png
│   │   ├── reports.png
│   │   └── alerts.png
│   ├── soba/
│   │   ├── observation-form.png
│   │   ├── schedule.png
│   │   └── feedback.png
│   ├── inventory/
│   │   ├── scanner.png
│   │   ├── dashboard.png
│   │   └── alerts.png
│   ├── podcast/
│   │   ├── review-dashboard.png
│   │   ├── sentiment.png
│   │   └── trends.png
│   └── youtube/
│       ├── comments.png
│       ├── analytics.png
│       └── insights.png
├── videos/
│   ├── wasabi-demo.mp4
│   └── inventory-demo.mp4
└── images/
    ├── hero-background.jpg
    └── team-photo.jpg
```

## 🖼️ Image Guidelines

### Screenshots
- **Size**: 400-600px wide, maintain aspect ratio
- **Format**: PNG for UI screenshots, JPG for photos
- **Quality**: High resolution but optimized for web
- **Naming**: Descriptive, lowercase with hyphens

### Videos
- **Format**: MP4 (H.264) for best compatibility
- **Resolution**: 1080p maximum, 720p recommended
- **Duration**: Keep demos under 3 minutes for engagement
- **Compression**: Balance quality with file size

## 🚀 Quick Setup

1. **Create folders** as shown above
2. **Add your screenshots** to respective tool folders
3. **Update HTML** to reference your images:

```html
<!-- Replace placeholder -->
<div class="screenshot-placeholder">WASABI Dashboard</div>

<!-- With actual image -->
<img src="assets/screenshots/wasabi/dashboard.png" alt="WASABI Dashboard" class="screenshot">
```

4. **Add videos** using JavaScript:

```javascript
// For MP4 videos
QuietTools.addVideoToTool('wasabi', 'assets/videos/wasabi-demo.mp4', 'mp4');

// For YouTube videos  
QuietTools.addVideoToTool('wasabi', 'https://www.youtube.com/embed/YOUR_VIDEO_ID', 'youtube');
```

## 💡 Pro Tips

- **Optimize images** before uploading (use tools like TinyPNG)
- **Test on mobile** to ensure images look good on small screens
- **Use consistent styling** across screenshots (same browser, theme, etc.)
- **Include captions** or annotations to highlight key features
- **Keep file sizes** under 500KB per image for fast loading

## 📝 Example Implementation

Once you have your assets, update the landing page:

```javascript
// Add all WASABI screenshots
QuietTools.addScreenshotToGallery('wasabi', 'assets/screenshots/wasabi/dashboard.png', 'Dashboard Overview');
QuietTools.addScreenshotToGallery('wasabi', 'assets/screenshots/wasabi/analytics.png', 'Student Analytics');
QuietTools.addScreenshotToGallery('wasabi', 'assets/screenshots/wasabi/reports.png', 'Progress Reports');

// Add demo video
QuietTools.addVideoToTool('wasabi', 'assets/videos/wasabi-demo.mp4', 'mp4');
```

This keeps your assets organized and makes updates easy! 