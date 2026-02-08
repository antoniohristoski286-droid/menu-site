// Open selected category
function openCategory(id) {
    document.getElementById('home').style.display = 'none';

    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');

    const el = document.getElementById(id);
    el.style.display = 'block';

    // Ensure the viewport shows the top of the opened category
    // taking the sticky header into account, and move keyboard focus.
    const header = document.querySelector('.sticky-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    // Give the element a scroll margin so native scrolling aligns below header
    el.style.scrollMarginTop = (headerHeight + 12) + 'px';

    // Focus without causing the browser to scroll (if supported), then perform our scroll
    el.setAttribute('tabindex', '-1');
    try {
        el.focus({ preventScroll: true });
    } catch (e) {
        // older browsers may not support preventScroll
        el.focus();
    }

    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12; // 12px gap
    window.scrollTo({ top: Math.max(0, Math.floor(y)), behavior: 'auto' });
}

// Go back to home
function goBack() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');

    document.getElementById('home').style.display = 'block';

    // When returning home, scroll so top content is visible below header
    const header = document.querySelector('.sticky-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const home = document.getElementById('home');

    home.style.scrollMarginTop = (headerHeight + 12) + 'px';
    home.setAttribute('tabindex', '-1');
    try {
        home.focus({ preventScroll: true });
    } catch (e) {
        home.focus();
    }

    const y = home.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, Math.floor(y)), behavior: 'auto' });
}
