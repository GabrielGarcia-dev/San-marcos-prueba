const products = {
    "frijoles-bayos": {
        title: "REFRIED PINTO BEANS",
        description: "Our whole pinto beans have the ideal flavor to accompany your dishes or to enjoy on their own.",
        image: "./Image-frijoles/frijoles-refritos-bayos_V2.webp",
        presentations: "Can 580g"
    },
    "frijoles-negros": {
        title: "REFRIED BLACK BEANS",
        description: "Our whole black beans have the ideal flavor to accompany your dishes or to enjoy on their own.",
        image: "./Image-frijoles/frijoles-refritos-negros_V2.webp",
        presentations: "Can 580 g"
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function showInfo(section) {
    document.querySelectorAll('.info-section').forEach(sec => {
        sec.classList.add('hidden');
    });
    document.getElementById(`info-${section}`).classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    const productId = getQueryParam('product');

    if (productId && products[productId]) {
        const product = products[productId];
        document.querySelector('.title').textContent = product.title;
        document.querySelector('#info-chicharos h2').textContent = product.title;
        document.querySelector('#info-chicharos p').textContent = product.description;
        document.querySelector('#product-image').src = product.image;

        const presentationsSection = document.querySelector('#info-presentaciones');
        presentationsSection.innerHTML = `
            <h3>PRESENTATIONS</h3>
            <p>${product.title}</p>
            <p>${product.presentations}</p>
        `;
    } else {
        document.querySelector('.title').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos h2').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos p').textContent = "La información para el producto solicitado no está disponible.";
    }

    
    showInfo('chicharos'); 
});
