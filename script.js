// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Slideshow functionality
const slideshow = {
    images: document.querySelectorAll('.slideshow img'),
    currentIndex: 0,
    interval: 5000, // Change image every 5 seconds

    init() {
        if (this.images.length > 0) {
            this.startSlideshow();
        }
    },

    startSlideshow() {
        setInterval(() => this.nextImage(), this.interval);
    },

    nextImage() {
        this.images[this.currentIndex].classList.remove('active');
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.images[this.currentIndex].classList.add('active');
    }
};

// Initialize slideshow
slideshow.init();

// Promo form handling
const promoForm = document.getElementById('promoSignup');
if (promoForm) {
    promoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const submitBtn = this.querySelector('.promo-btn');
        
        // Simulate form submission
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
            submitBtn.style.background = '#4CAF50';
            
            // Show thank you message
            const promoContent = document.querySelector('.promo-content');
            const originalContent = promoContent.innerHTML;
            promoContent.innerHTML = `
                <h2>THANK YOU!</h2>
                <h3>20% OFF</h3>
                <p>Your discount code has been sent to:<br>${email}</p>
                <small>Please check your inbox</small>
            `;
        }, 1500);
    });
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Hero section animations
const heroContent = document.querySelector('.hero-content');
const jewelryShowcase = document.querySelector('.jewelry-showcase');

gsap.from(heroContent.children, {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// Collection section animations
gsap.from('.gallery-item', {
    scrollTrigger: {
        trigger: '.collection',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

// About section animations
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: "power3.out"
});

// Contact section animations
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top center',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out"
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: "power3.inOut"
            });
        }
    });
});

// Parallax effect for hero image
window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth - 0.5) * 20);
    const y = Math.round((clientY / window.innerHeight - 0.5) * 20);
    
    gsap.to(jewelryShowcase, {
        duration: 0.5,
        x: x,
        y: y,
        ease: "power2.out"
    });
});

// Form submission animation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.background = '#4CAF50';
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.style.background = '';
        }, 2000);
    }, 1500);
});

// Add hover effect to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
        });
    });
});

// Promo overlay animation
gsap.from('.promo-overlay', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

// Product Image Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const images = card.querySelectorAll('.product-images img');
        if (images.length <= 1) return;

        let currentIndex = 0;
        images[currentIndex].classList.add('active');

        // Manual hover effect
        card.addEventListener('mouseenter', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        });

        card.addEventListener('mouseleave', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = 0;
            images[currentIndex].classList.add('active');
        });
    });
});

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productId = productCard.dataset.productId;
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        // Here you can implement your cart functionality
        console.log(`Added to cart: ${productName} (${productPrice}) - ID: ${productId}`);
        button.textContent = 'Added to Cart';
        button.style.backgroundColor = 'var(--secondary-color)';
        
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 2000);
    });
}); 