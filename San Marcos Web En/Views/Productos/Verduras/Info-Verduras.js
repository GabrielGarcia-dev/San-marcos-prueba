const products = {
    "chicharos": {
        "title": "PEAS WITH CARROTS",
        "description": "Our peas with carrots are the perfect combination of high-quality ingredients, carefully selected and ready to serve.",
        "image": "./Image-verduras/AnyConv.com__chicharosconzanahoria2.webp",
        "presentations": "Can: 225g | 430g"
    },
    "elotes": {
        "title": "CORN KERNELS",
        "description": "Enjoy our corn kernels made with the highest quality and best selection.",
        "image": "./Image-verduras/Imagen3.png",
        "presentations": "Can: 500g | 430g"
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
            <h3>Presentaciones</h3>
            <p>${product.presentations}</p>
        `;
    } else {
        document.querySelector('.title').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos h2').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos p').textContent = "La información para el producto solicitado no está disponible.";
    }

    
    showInfo('chicharos'); 
});
