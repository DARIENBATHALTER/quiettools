// QuietTools Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeGalleries();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = nav.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 0) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Gallery functionality
function initializeGalleries() {
    const galleries = document.querySelectorAll('.screenshot-gallery');
    
    galleries.forEach(gallery => {
        const container = gallery.querySelector('.gallery-container');
        
        // Add touch/mouse scroll support
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        });
        
        // Set initial cursor
        container.style.cursor = 'grab';
        
        // Add keyboard navigation
        container.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    container.scrollBy({ left: -200, behavior: 'smooth' });
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    container.scrollBy({ left: 200, behavior: 'smooth' });
                    break;
            }
        });
        
        // Make container focusable for keyboard navigation
        container.setAttribute('tabindex', '0');
    });
}

// Scroll effects and animations
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.tool, .help-item, .service');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        const scrollPercent = scrolled / heroHeight;
        
        if (scrollPercent <= 1) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - scrollPercent * 0.5;
        }
    });
}

// Utility functions for dynamic content
function addScreenshotToGallery(toolName, imageSrc, imageAlt) {
    const gallery = document.querySelector(`[data-tool="${toolName}"] .gallery-container`);
    if (!gallery) return;
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    img.className = 'screenshot';
    img.style.cssText = `
        min-width: 200px;
        height: 120px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        transition: transform 0.3s ease;
    `;
    
    // Add hover effect
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
    
    // Add click to enlarge (simple implementation)
    img.addEventListener('click', () => {
        // You can implement a lightbox here
        window.open(imageSrc, '_blank');
    });
    
    // Replace placeholder with actual image
    const placeholder = gallery.querySelector('.screenshot-placeholder');
    if (placeholder) {
        gallery.replaceChild(img, placeholder);
    } else {
        gallery.appendChild(img);
    }
}

function addVideoToTool(toolName, videoSrc, videoType = 'youtube') {
    const videoContainer = document.querySelector(`[data-tool="${toolName}"] .video-embed`);
    if (!videoContainer) return;
    
    let videoElement;
    
    if (videoType === 'youtube') {
        videoElement = document.createElement('iframe');
        videoElement.src = videoSrc;
        videoElement.setAttribute('frameborder', '0');
        videoElement.setAttribute('allowfullscreen', '');
        videoElement.style.cssText = 'width: 100%; height: 200px;';
    } else if (videoType === 'mp4') {
        videoElement = document.createElement('video');
        videoElement.src = videoSrc;
        videoElement.setAttribute('controls', '');
        videoElement.style.cssText = 'width: 100%; height: 200px; object-fit: cover;';
    }
    
    if (videoElement) {
        videoContainer.innerHTML = '';
        videoContainer.appendChild(videoElement);
    }
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-open');
}

// Contact form handling (placeholder for future implementation)
function handleContactForm(formData) {
    // This would integrate with your preferred form handling service
    console.log('Contact form submitted:', formData);
    // Example: send to Netlify Forms, Formspree, or custom endpoint
}

// Calendly integration helper
function initializeCalendly(calendlyUrl) {
    if (typeof Calendly !== 'undefined') {
        Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: document.querySelector('.calendly-placeholder'),
            prefill: {},
            utm: {}
        });
    }
}

// Gallery functionality - open in new tabs
function initializeGalleryLinks() {
    // Handle clickable screenshots
    document.querySelectorAll('.clickable-screenshot').forEach(screenshot => {
        screenshot.addEventListener('click', (e) => {
            e.preventDefault();
            const tool = screenshot.getAttribute('data-tool');
            
            // Open gallery page in new tab
            window.open(`galleries/${tool}.html`, '_blank');
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeGalleries();
    initializeScrollEffects();
    initializeGalleryLinks();
});

// Export functions for use in HTML if needed
window.QuietTools = {
    addScreenshotToGallery,
    addVideoToTool,
    initializeCalendly,
    handleContactForm
}; 