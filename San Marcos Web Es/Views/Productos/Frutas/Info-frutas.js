const products = {
    "fruta-piña": {
        title: "PIÑA",
        description: "Nuestras piñas en almíbar son rebanadas perfectamente para que las puedas disfrutar enteras o en trozos, siempre cuidando que cumplan con los estándares de calidad San Marcos.",
        image: "./Image-frutas/AnyConv.com__fampina2.webp",
        presentations: "800g | 2,8kg"
    },
    "fruta-durazno": {
        title: "DURAZNOS",
        description: "Nuestros duraznos en almíbar tienen el tamaño y sabor ideales para disfrutarlos solos o como ingrediente para tus postres o recetas especiales. Disfrútalos en mitades perfectamente cortadas y listas para comer.",
        image: "./Image-frutas/AnyConv.com__duraznomitadesalmi2.webp",
        presentations: "590g | 820g"
    },
    "coctel-frutas": {
        title: "CÓCTEL DE FRUTAS",
        description: "Nuestras mejores frutas en trozos y en almíbar, listas para disfrutarse, con toda la calidad y el sabor de San Marcos.",
        image: "./Image-frutas/AnyConv.com__cocktailfutas2.webp",
        presentations: "590g | 820g"
    },
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
            <h3>PRESENTACIONES</h3>
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
