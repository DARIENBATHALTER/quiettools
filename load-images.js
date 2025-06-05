// Load Images Script for QuietTools Landing Page
// Run this after the page loads to populate galleries with actual screenshots

document.addEventListener('DOMContentLoaded', function() {
    // Wait for the main script to initialize first
    setTimeout(loadAllImages, 100);
});

function loadAllImages() {
    // WASABI (Student Analytics) images
    const wasabiImages = [
        { src: 'images/StudentAnalytics1.png', alt: 'Student Dashboard Overview' },
        { src: 'images/StudentAnalytics2.png', alt: 'Individual Student Analytics' },
        { src: 'images/StudentAnalytics3.png', alt: 'Progress Tracking Interface' },
        { src: 'images/StudentAnalytics4.png', alt: 'Alert and Notification System' }
    ];

    // SOBA (Classroom Observation) images
    const sobaImages = [
        { src: 'images/ClassroomObservation1.png', alt: 'Observation Form Interface' },
        { src: 'images/ClassroomObservation2.png', alt: 'Scheduling Dashboard' },
        { src: 'images/ClassroomObservation3.png', alt: 'Feedback Analysis' },
        { src: 'images/ClassroomObservation4.png', alt: 'Trend Reporting' },
        { src: 'images/ClassroomObservation5.png', alt: 'Administrative Overview' }
    ];

    // Inventory Scanner images
    const inventoryImages = [
        { src: 'images/InventoryScanner1.jpeg', alt: 'Mobile Scanner Interface' },
        { src: 'images/InventoryScanner2.jpeg', alt: 'Inventory Dashboard' },
        { src: 'images/InventoryScanner3.jpeg', alt: 'Stock Alert System' }
    ];

    // Podcast Review Visualizer images
    const podcastImages = [
        { src: 'images/PodcastReviewVisualizer1.png', alt: 'Review Dashboard' },
        { src: 'images/PodcastReviewVisualizer2.png', alt: 'Sentiment Analysis' },
        { src: 'images/PodcastReviewVisualizer3.png', alt: 'Topic Clustering' },
        { src: 'images/PodcastReviewVisualizerDesktopLight.png', alt: 'Desktop Light Theme' },
        { src: 'images/PodcastReviewVisualizerDesktopDark.png', alt: 'Desktop Dark Theme' },
        { src: 'images/PodcastReviewVisualizerIphoneLight.png', alt: 'Mobile Light Theme' },
        { src: 'images/PodcastReviewVisualizerIphoneDark.png', alt: 'Mobile Dark Theme' }
    ];

    // YouTube Comment Explorer images
    const youtubeImages = [
        { src: 'images/YoutubeCommentExplorer:Exporter1.png', alt: 'Comment Analytics Dashboard' },
        { src: 'images/YoutubeCommentExplorer:Exporter2.png', alt: 'Engagement Metrics' },
        { src: 'images/YoutubeCommentExplorer:Exporter3.png', alt: 'Audience Insights' },
        { src: 'images/YoutubeCommentExporter:Exporter-Example.png', alt: 'Export Interface' }
    ];

    // Store images for modal navigation
    window.galleryImages = {
        'wasabi': wasabiImages,
        'soba': sobaImages,
        'inventory': inventoryImages,
        'podcast': podcastImages,
        'youtube': youtubeImages
    };

    // Load images into galleries
    loadImagesIntoGallery('wasabi', wasabiImages);
    loadImagesIntoGallery('soba', sobaImages);
    loadImagesIntoGallery('inventory', inventoryImages);
    loadImagesIntoGallery('podcast', podcastImages);
    loadImagesIntoGallery('youtube', youtubeImages);

    // Load video for Inventory Scanner
    loadVideoForTool('inventory', 'images/InventoryScannerVideo.mov');
}

function loadImagesIntoGallery(toolName, images) {
    const gallery = document.querySelector(`[data-tool="${toolName}"] .gallery-container`);
    if (!gallery) {
        console.log(`Gallery not found for tool: ${toolName}`);
        return;
    }

    // Clear existing placeholders
    gallery.innerHTML = '';

    // Add each image
    images.forEach((imageData, index) => {
        const screenshotItem = document.createElement('div');
        screenshotItem.className = 'screenshot-item';
        
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = imageData.alt;
        img.className = 'screenshot';
        img.style.cssText = `
            min-width: 200px;
            height: 120px;
            object-fit: cover;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;

        const caption = document.createElement('div');
        caption.className = 'screenshot-caption';
        caption.textContent = imageData.alt;

        // Add hover effect
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.zIndex = '10';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
        });

        // Add click to enlarge
        img.addEventListener('click', () => {
            openImageModal(imageData.src, imageData.alt, toolName, index);
        });

        // Handle load errors gracefully
        img.addEventListener('error', () => {
            console.log(`Failed to load image: ${imageData.src}`);
            screenshotItem.style.display = 'none';
        });

        screenshotItem.appendChild(img);
        screenshotItem.appendChild(caption);
        gallery.appendChild(screenshotItem);
    });

    // Add gallery navigation
    setupGalleryNavigation(toolName);
}

function loadVideoForTool(toolName, videoSrc) {
    const videoContainer = document.querySelector(`[data-tool="${toolName}"] .video-embed`);
    if (!videoContainer) return;

    const video = document.createElement('video');
    video.src = videoSrc;
    video.setAttribute('controls', '');
    video.setAttribute('preload', 'metadata');
    video.style.cssText = 'width: 100%; height: 200px; object-fit: cover; border-radius: 8px;';

    // Handle video load errors
    video.addEventListener('error', () => {
        console.log(`Failed to load video: ${videoSrc}`);
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <p>Video available locally</p>
                <p class="video-note">${videoSrc}</p>
            </div>
        `;
    });

    videoContainer.innerHTML = '';
    videoContainer.appendChild(video);
}

function setupGalleryNavigation(toolName) {
    const prevBtn = document.querySelector(`[data-tool="${toolName}"] .gallery-prev`);
    const nextBtn = document.querySelector(`[data-tool="${toolName}"] .gallery-next`);
    const container = document.querySelector(`[data-tool="${toolName}"] .gallery-container`);
    
    if (!prevBtn || !nextBtn || !container) return;

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -220, behavior: 'smooth' });
        updateGalleryButtons(toolName);
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 220, behavior: 'smooth' });
        updateGalleryButtons(toolName);
    });

    container.addEventListener('scroll', () => {
        updateGalleryButtons(toolName);
    });

    // Initial button state
    updateGalleryButtons(toolName);
}

function updateGalleryButtons(toolName) {
    const prevBtn = document.querySelector(`[data-tool="${toolName}"] .gallery-prev`);
    const nextBtn = document.querySelector(`[data-tool="${toolName}"] .gallery-next`);
    const container = document.querySelector(`[data-tool="${toolName}"] .gallery-container`);
    
    if (!prevBtn || !nextBtn || !container) return;

    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;

    prevBtn.disabled = isAtStart;
    nextBtn.disabled = isAtEnd;
}

// Store image arrays for modal navigation
window.galleryImages = {};

function openImageModal(src, alt, toolName, currentIndex) {
    const images = window.galleryImages[toolName] || [];
    let currentIdx = currentIndex;

    // Create modal for enlarged image view
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        flex-direction: column;
    `;

    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
    `;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    // Navigation buttons for modal
    const prevModalBtn = document.createElement('button');
    prevModalBtn.innerHTML = '‹';
    prevModalBtn.style.cssText = `
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(244, 196, 48, 0.9);
        color: #2c3e50;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    const nextModalBtn = document.createElement('button');
    nextModalBtn.innerHTML = '›';
    nextModalBtn.style.cssText = `
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(244, 196, 48, 0.9);
        color: #2c3e50;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    // Caption for modal
    const modalCaption = document.createElement('div');
    modalCaption.style.cssText = `
        color: white;
        text-align: center;
        padding: 20px;
        font-size: 1.1rem;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 8px;
        margin-top: 20px;
        max-width: 600px;
    `;
    modalCaption.textContent = alt;

    // Update modal content
    function updateModalContent() {
        if (images.length > 0) {
            img.src = images[currentIdx].src;
            img.alt = images[currentIdx].alt;
            modalCaption.textContent = images[currentIdx].alt;
        }
        
        prevModalBtn.style.display = images.length > 1 ? 'block' : 'none';
        nextModalBtn.style.display = images.length > 1 ? 'block' : 'none';
        
        prevModalBtn.disabled = currentIdx === 0;
        nextModalBtn.disabled = currentIdx === images.length - 1;
    }

    // Navigation functions
    prevModalBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIdx > 0) {
            currentIdx--;
            updateModalContent();
        }
    });

    nextModalBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIdx < images.length - 1) {
            currentIdx++;
            updateModalContent();
        }
    });

    imageContainer.appendChild(img);
    imageContainer.appendChild(prevModalBtn);
    imageContainer.appendChild(nextModalBtn);
    modal.appendChild(imageContainer);
    modal.appendChild(modalCaption);
    document.body.appendChild(modal);

    updateModalContent();

    // Close modal on click (but not on navigation buttons)
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === imageContainer) {
            document.body.removeChild(modal);
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
            document.removeEventListener('keydown', closeOnEscape);
        } else if (e.key === 'ArrowLeft' && currentIdx > 0) {
            currentIdx--;
            updateModalContent();
        } else if (e.key === 'ArrowRight' && currentIdx < images.length - 1) {
            currentIdx++;
            updateModalContent();
        }
    });
} 