const products = {
    "salsa-casera": {
        title: "SALSA MEXICANA CASERA",
        description: "Nuestra salsa mexicana está hecha con el verdadero estilo casero y la combinación de los mejores ingredientes.",
        image: "./Image-salsas/AnyConv.com__salsa-casera.webp",
        presentations: "Lata: 215g Frasco: 500g"
    },
    "salsa-verde": {
        title: "SALSA VERDE",
        description: "Nuestra salsa verde está hecha con la receta tradicional para que nunca falte en casa.",
        image: "./Image-salsas/AnyConv.com__salsa_verde.webp",
        presentations: "Lata: 215g Frasco: 500g"
    },
    "salsa-chipotle": {
        title: "SALSA CHIPOTLE MOLCAJETE",
        description: "Nuestra salsa chipotle molcajete tiene ese sabor que todo buen taco merece y el picor que todo mexicano quiere.",
        image: "./Image-salsas/AnyConv.com__salsa-chipotle.webp",
        presentations: "Lata: 215g Frasco: 500g"
    },
    "salsa-cocinar": {
        title: "SALSAS PARA COCINAR",
        description: "Nuestras salsas para cocinar son el ingrediente secreto que necesitas en tu cocina. Con una variedad de sabores y niveles de picante para satisfacer todos los gustos, nuestras salsas para cocinar elevan el sabor de tus platos al siguiente nivel.",
        image: "./Image-salsas/AnyConv.com__salsasparacocinar.webp",
        presentations: "Lata: 215g Frasco: 500g"
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
