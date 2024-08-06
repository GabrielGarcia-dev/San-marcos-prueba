const products = [
    {
        id: "salsa-casera",
        weight: "Lata: 215g Frasco: 500g",
        title: "Salsa Casera",
        info: "Nuestra salsa mexicana está hecha con el verdadero estilo casero y la combinación de los mejores ingredientes.",
        image: "./Image-salsas/AnyConv.com__salsa-casera.webp"
    },
    {
        id: "salsa-verde",
        weight: "Lata: 215g Frasco: 500g",
        title: "Salsa Verde",
        info: "Nuestra salsa verde está hecha con la receta tradicional para que nunca falte en casa.",
        image: "./Image-salsas/AnyConv.com__salsa_verde.webp"
    },
    {
        id: "salsa-chipotle",
        weight: "Lata: 215g Frasco: 500g",
        title: "Salsa Chipotle",
        info: "Nuestra salsa chipotle molcajete tiene ese sabor que todo buen taco merece y el picor que todo mexicano quiere.",
        image: "./Image-salsas/AnyConv.com__salsa-chipotle.webp"
    },
    {
        id: "salsa-cocinar",
        weight: "Lata: 215g Frasco: 500g",
        title: "Salsas para cocinar",
        info: "Nuestras salsas para cocinar son el ingrediente secreto que necesitas en tu cocina. Con una variedad de sabores y niveles de picante para satisfacer todos los gustos, nuestras salsas para cocinar elevan el sabor de tus platos al siguiente nivel.",
        image: "./Image-salsas/AnyConv.com__salsasparacocinar.webp"
    },

];

let currentIndex = 0;

const productWeight = document.getElementById("product-weight");
const productTitle = document.getElementById("product-title");
const productInfo = document.getElementById("product-info");
const productImage = document.getElementById("product-image");
const productLink = document.getElementById("product-link");
const productTextContainer = document.querySelector(".product-text");
const productImageContainer = document.querySelector(".product-image");

function updateProduct(index) {
    const product = products[index];

    productTextContainer.classList.add('fade-out');
    productImageContainer.classList.add('fade-out');

    setTimeout(() => {
        productWeight.textContent = product.weight;
        productTitle.textContent = product.title;
        productInfo.textContent = product.info;
        productImage.src = product.image;
        productLink.href = `./Info-salsas.html?product=${product.id}`;
        productTextContainer.offsetHeight;
        productImageContainer.offsetHeight;

        productTextContainer.classList.remove('fade-out');
        productTextContainer.classList.add('fade-in');
        productImageContainer.classList.remove('fade-out');
        productImageContainer.classList.add('fade-in');

        setTimeout(() => {
            productTextContainer.classList.remove('fade-in');
            productImageContainer.classList.remove('fade-in');
        }, 700);
    }, 700);
}

document.getElementById("prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : products.length - 1;
    updateProduct(currentIndex);
});

document.getElementById("next-button").addEventListener("click", () => {
    currentIndex = (currentIndex < products.length - 1) ? currentIndex + 1 : 0;
    updateProduct(currentIndex);
});

updateProduct(currentIndex);
