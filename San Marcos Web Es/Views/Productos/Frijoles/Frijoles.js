const products = [
    {
        id: "frijoles-bayos",
        weight: "580 g",
        title: "Frijoles Refritos Bayos",
        info: "Nuestros frijoles bayos enteros son de la mejor calidad y están cuidadosamente seleccionados para llevarlos a tu mesa.",
        image: "./Image-frijoles/frijoles-refritos-bayos_V2.webp"
    },
    {
        id: "frijoles-negros",
        weight: "580 g",
        title: "Frijoles Refritos Negros",
        info: "Nuestros frijoles negros enteros tienen el sabor ideal para acompañar tus platillos o para disfrutarlos solos.",
        image: "./Image-frijoles/frijoles-refritos-negros_V2.webp"
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
        productLink.href = `./Info-frijoles.html?product=${product.id}`;
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
