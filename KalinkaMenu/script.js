// Cache header element for better performance
let cachedHeader = null;

function getHeader() {
    if (!cachedHeader) {
        cachedHeader = document.querySelector('.sticky-header');
    }
    return cachedHeader;
}

// Handle showing/hiding categories based on URL hash
function handleHashChange() {
    const hash = window.location.hash.slice(1); // Remove the # prefix
    const categories = document.querySelectorAll('.category');
    const home = document.getElementById('home');
    
    if (!home) return; // Safety check
    
    // Hide all categories first
    categories.forEach(cat => cat.style.display = 'none');
    
    if (hash === '' || hash === 'home') {
        // Show home
        home.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
        // Show the category that matches the hash
        const categoryEl = document.getElementById(hash);
        if (categoryEl) {
            home.style.display = 'none';
            categoryEl.style.display = 'block';
            scrollToElement(categoryEl);
        } else {
            // If hash doesn't match any category, show home
            home.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }
}

// Scroll to a specific element, accounting for the sticky header
function scrollToElement(el) {
    const header = getHeader();
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    
    el.style.scrollMarginTop = (headerHeight + 12) + 'px';
    el.setAttribute('tabindex', '-1');
    
    try {
        el.focus({ preventScroll: true });
    } catch (e) {
        el.focus();
    }
    
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
        window.scrollTo({ top: Math.max(0, Math.floor(y)), behavior: 'auto' });
    });
}

// Open selected category by setting URL hash
function openCategory(id) {
    window.location.hash = id;
}

// Go back using browser history
function goBack() {
    window.history.back();
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleHashChange);
} else {
    handleHashChange();
}
