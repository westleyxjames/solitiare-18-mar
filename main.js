// Main JavaScript for site functionality
(function() {
    'use strict';

    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (mobileMenuBtn && mobileNav) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenuBtn.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            const mobileNavLinks = mobileNav.querySelectorAll('.mobile-nav-link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenuBtn.contains(event.target) && !mobileNav.contains(event.target)) {
                    mobileMenuBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                }
            });
        }
    }

    // Smooth Scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Add animation classes when elements come into view
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe cards and sections
        const animatableElements = document.querySelectorAll('.card, .image-card, .strategy-card, .blog-card, .game-card, .value-card, .feature-item, .contact-card, .support-card, .faq-card, .privacy-highlight, .legal-section');
        
        animatableElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Add active class to current navigation item
    function highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            
            // Handle both index.html and root path
            if ((currentPath === '/' || currentPath === '/index.html') && 
                (linkPath === '/' || linkPath === '/index.html')) {
                link.classList.add('active');
            } else if (currentPath === linkPath && linkPath !== '/' && linkPath !== '/index.html') {
                link.classList.add('active');
            }
        });
    }

    // Back to top button
    function initBackToTop() {
        let backToTopBtn = document.getElementById('backToTopBtn');
        
        // Create button if it doesn't exist
        if (!backToTopBtn) {
            backToTopBtn = document.createElement('button');
            backToTopBtn.id = 'backToTopBtn';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                background-color: var(--emerald-600);
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                display: none;
                z-index: 1000;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: all 0.3s;
            `;
            document.body.appendChild(backToTopBtn);

            backToTopBtn.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'var(--emerald-700)';
                this.style.transform = 'translateY(-2px)';
            });

            backToTopBtn.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'var(--emerald-600)';
                this.style.transform = 'translateY(0)';
            });

            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }

    // Lazy load images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Handle external links
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            if (!link.href.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    // Add loading class to body
    function removeLoader() {
        document.body.classList.add('loaded');
    }

    // Initialize all functions when DOM is ready
    function init() {
        initMobileMenu();
        initSmoothScroll();
        initScrollAnimations();
        highlightCurrentPage();
        initBackToTop();
        initLazyLoading();
        initExternalLinks();
        removeLoader();
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Handle page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            console.log('Page is hidden');
        } else {
            console.log('Page is visible');
        }
    });

    // Service Worker registration (optional, for PWA)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Uncomment to enable service worker
            // navigator.serviceWorker.register('/sw.js').then(function(registration) {
            //     console.log('ServiceWorker registration successful');
            // }, function(err) {
            //     console.log('ServiceWorker registration failed: ', err);
            // });
        });
    }

})();

// Additional utility functions

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Get cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Delete cookie
function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }
}

// Export utility functions to global scope
window.utils = {
    formatNumber,
    getCookie,
    setCookie,
    deleteCookie,
    debounce,
    throttle,
    isInViewport,
    copyToClipboard
};
