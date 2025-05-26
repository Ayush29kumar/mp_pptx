// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Create particles
    createParticles();
    
    // Initialize slide navigation
    initSlideNavigation();
    
    // Update slide progress indicator
    updateSlideProgress();
    
    // Enable keyboard navigation
    enableKeyboardNavigation();
});

// Create particle elements for background effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random positioning
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize slide navigation functionality
function initSlideNavigation() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Set initial button states
    updateButtonStates();
    
    // Add click event listeners to navigation buttons
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
}

// Go to previous slide
function goToPrevSlide() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = getCurrentSlideIndex();
    
    if (currentIndex > 0) {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex - 1].classList.add('active');
        updateButtonStates();
        updateSlideProgress();
    }
}

// Go to next slide
function goToNextSlide() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = getCurrentSlideIndex();
    
    if (currentIndex < slides.length - 1) {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex + 1].classList.add('active');
        updateButtonStates();
        updateSlideProgress();
    }
}

// Get the index of the currently active slide
function getCurrentSlideIndex() {
    const slides = document.querySelectorAll('.slide');
    
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            return i;
        }
    }
    
    return 0;
}

// Update the enabled/disabled state of navigation buttons
function updateButtonStates() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = getCurrentSlideIndex();
    
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
}

// Update the slide progress indicator
function updateSlideProgress() {
    const slides = document.querySelectorAll('.slide');
    const progressElement = document.querySelector('.slide-progress');
    let currentIndex = getCurrentSlideIndex();
    
    progressElement.textContent = `${currentIndex + 1} / ${slides.length}`;
}

// Enable keyboard navigation (arrow keys)
function enableKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        } else if (event.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
}
