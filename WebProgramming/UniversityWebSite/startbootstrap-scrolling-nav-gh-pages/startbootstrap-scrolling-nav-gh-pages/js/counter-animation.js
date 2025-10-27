/**
 * main.js
 * Main JavaScript functionality for Grace University Website
 */

(function () {
    'use strict';

    /**
     * Counter Animation
     * Animates numbers from 0 to target value when element is in viewport
     */
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.counter');

        if (counters.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    animateCounter(counter);
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));

        function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const stepTime = 10; // Update every 10ms
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.ceil(current).toLocaleString('en-US');
                    setTimeout(updateCounter, stepTime);
                } else {
                    element.textContent = target.toLocaleString('en-US') + '+';
                }
            };

            updateCounter();
        }
    }

    /**
     * Smooth Scroll for Anchor Links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Console Welcome Message
     */
    function showWelcomeMessage() {
        console.log(
            '%cGrace University 🎓',
            'font-size: 24px; font-weight: bold; color: #003366;'
        );
        console.log(
            '%cWhere Curiosity Meets Discovery',
            'font-size: 14px; color: #666;'
        );
    }

    /**
     * Initialize all functions
     */
    function init() {
        initCounterAnimation();
        initSmoothScroll();
        showWelcomeMessage();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();