const products = {
    "chicharos": {
        title: "Chícharos con Zanahoria",
        description: "Nuestros chicharos con zanahoria son la perfecta combinación de ingredientes de la mejor calidad, cuidadosamente seleccionados y listos para servirse.",
        image: "./Image-verduras/AnyConv.com__chicharosconzanahoria2.webp",
        presentations: "Lata: 225g | 430g"
    },
    "elotes": {
        title: "GRANOS DE ELOTE",
        description: "Disfruta de nuestros Granos de Elote hechos con la mejor calidad y la mejor selección.",
        image: "./Image-verduras/Imagen3.png",
        presentations: "Lata: 500g | 430g"
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
