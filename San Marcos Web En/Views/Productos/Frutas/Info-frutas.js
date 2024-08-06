const products = {
    "fruta-piña": {
    title: "PINEAPPLE",
    description: "Our canned pineapples are perfectly sliced so you can enjoy them whole or in pieces, always ensuring they meet San Marcos' quality standards.",
    image: "./Image-frutas/AnyConv.com__fampina2.webp",
    presentations: "800g | 2.8kg"
},
"fruta-durazno": {
    title: "PEACHES",
    description: "Our canned peaches have the ideal size and flavor to enjoy on their own or as an ingredient for your desserts or special recipes. Enjoy them in perfectly cut halves, ready to eat.",
    image: "./Image-frutas/AnyConv.com__duraznomitadesalmi2.webp",
    presentations: "590g | 820g"
},
"coctel-frutas": {
    title: "FRUIT COCKTAIL",
    description: "Our best fruit pieces in syrup, ready to enjoy, with all the quality and flavor of San Marcos.",
    image: "./Image-frutas/AnyConv.com__cocktailfutas2.webp",
    presentations: "590g | 820g"
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
