// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker Registered Successfully'))
            .catch((error) => console.log('Service Worker Registration Failed:', error));
    });
}

// --- Scroll Animation Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.scroll-fade');

    const observerOptions = {
        root: null, // use the viewport
        threshold: 0.15, // trigger when 15% of the element is visible
        rootMargin: "0px"
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it fades in
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});