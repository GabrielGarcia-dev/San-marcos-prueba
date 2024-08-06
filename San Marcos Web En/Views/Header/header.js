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
