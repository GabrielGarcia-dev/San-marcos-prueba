document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menuIcon');
    const menuDropdown = document.getElementById('menuDropdown');

    menuIcon.addEventListener('click', function() {
        if (menuDropdown.style.display === "none" || menuDropdown.style.display === "") {
            menuDropdown.style.display = "block";
        } else {
            menuDropdown.style.display = "none";
        }
    });
});


// script.js
document.querySelector('.search-icon').addEventListener('click', function() {
    const search = document.querySelector('.search');
    if (search.style.width === '0px' || search.style.width === '') {
        search.style.width = '200px'; // Ancho final del input
    } else {
        search.style.width = '0';
    }
});
