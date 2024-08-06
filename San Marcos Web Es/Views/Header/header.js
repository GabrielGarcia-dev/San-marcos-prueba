function toggleSearchInput() {
    const container = document.querySelector('.search-container');
    container.classList.toggle('active');
    const input = document.querySelector('.search-input');
    if (container.classList.contains('active')) {
        input.focus();
    }
}

// Cierra el campo de búsqueda si se hace clic fuera del contenedor
document.addEventListener('click', function(event) {
    const container = document.querySelector('.search-container');
    if (!container.contains(event.target)) {
        container.classList.remove('active');
    }
});