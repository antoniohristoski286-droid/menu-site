// Open selected category
function openCategory(id) {
    document.getElementById('home').style.display = 'none';

    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');

    document.getElementById(id).style.display = 'block';
}

// Go back to home
function goBack() {
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.style.display = 'none');

    document.getElementById('home').style.display = 'block';
}
