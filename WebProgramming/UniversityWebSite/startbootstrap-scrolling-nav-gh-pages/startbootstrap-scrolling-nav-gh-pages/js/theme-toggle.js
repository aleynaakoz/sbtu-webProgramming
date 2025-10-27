// Theme Toggle Script
(function () {
    'use strict';

    const STORAGE_KEY = 'grace-university-theme';
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const root = document.documentElement;

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-bs-theme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            root.removeAttribute('data-bs-theme');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
        localStorage.setItem(STORAGE_KEY, theme);
    }

    // Set initial theme
    setTheme(getPreferredTheme());

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = root.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
            setTheme(currentTheme === 'light' ? 'dark' : 'light');
        });
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();