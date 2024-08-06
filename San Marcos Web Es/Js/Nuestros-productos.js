document.addEventListener('DOMContentLoaded', (event) => {
    const categorias = document.querySelectorAll('.categoria');

    categorias.forEach(categoria => {
        categoria.addEventListener('mouseover', () => {
            const img = categoria.querySelector('img');
            img.style.opacity = '1';
            img.style.filter = 'drop-shadow(0 0 70px yellow)';
            categoria.style.transform = 'scale(1.15)';
        });

        categoria.addEventListener('mouseout', () => {
            const img = categoria.querySelector('img');
            img.style.opacity = '0.8';
            img.style.filter = 'none';
            categoria.style.transform = 'scale(1)';
        });
    });
});
