const products = [
    {
        id: "chicharos",
        weight: "430g",
        title: "Chícharos con Zanahoria",
        info: "Nuestros chicharos con zanahoria son la perfecta combinación de ingredientes de la mejor calidad, cuidadosamente seleccionados y listos para servirse.",
        image: "./Image-verduras/AnyConv.com__chicharosconzanahoria2.webp"
    },
    {
        id: "elotes",
        weight: "430g",
        title: "Granos de Elote",
        info: "Disfruta de nuestros Granos de Elote hechos con la mejor calidad y la mejor selección.",
        image: "./Image-verduras/Imagen3.png"
    }
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
        productLink.href = `./Info-Verduras.html?product=${product.id}`;
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
