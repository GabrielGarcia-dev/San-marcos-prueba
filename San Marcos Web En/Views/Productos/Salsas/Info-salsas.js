const products = {
    "salsa-casera": {
        title: "HOMEMADE MEXICAN SAUCE",
        description: "Our Mexican salsa is made in the true homemade style with a combination of the finest ingredients.",
        image: "./Image-salsas/AnyConv.com__salsa-casera.webp",
        presentations: "Can: 215g | Jar: 500g"
    },
    "salsa-verde": {
        title: "GREEN SAUCE",
        description: "Our green salsa is made with the traditional recipe so you will always have it at home.",
        image: "./Image-salsas/AnyConv.com__salsa_verde.webp",
        presentations: "Can: 215g | Jar: 500g"
    },
    "salsa-chipotle": {
        title: "CHIPOTLE MOLCAJETE SAUCE",
        description: "Our chipotle molcajete salsa has the flavor that every good taco deserves and the spiciness that every Mexican wants.",
        image: "./Image-salsas/AnyConv.com__salsa-chipotle.webp",
        presentations: "Can: 215g | Jar: 500g"
    },
    "salsa-cocinar": {
        title: "COOKING SAUCES",
        description: "Our cooking sauces are the secret ingredient you need in your kitchen. With a variety of flavors and levels of spiciness to suit all tastes, our cooking sauces elevate the flavor of your dishes to the next level.",
        image: "./Image-salsas/AnyConv.com__salsasparacocinar.webp",
        presentations: "Can: 215g | Jar: 500g"
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
