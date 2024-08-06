const products = [
    {
        id: "fruta-piña",
        weight: "800g | 2.8kg",
        title: "Pineapple",
        info: "Our canned pineapples are perfectly sliced so you can enjoy them whole or in pieces, always ensuring they meet San Marcos' quality standards.",
        image: "./Image-frutas/AnyConv.com__fampina2.webp"
    },
    {
        id: "fruta-durazno",
        weight: "590g | 820g",
        title: "Peaches",
        info: "Our canned peaches have the ideal size and flavor to enjoy on their own or as an ingredient for your desserts or special recipes. Enjoy them in perfectly cut halves, ready to eat.",
        image: "./Image-frutas/AnyConv.com__duraznomitadesalmi2.webp"
    },
    {
        id: "coctel-frutas",
        weight: "590g | 820g",
        title: "Fruit Cocktail",
        info: "Our best fruit pieces in syrup, ready to enjoy, with all the quality and flavor of San Marcos.",
        image: "./Image-frutas/AnyConv.com__cocktailfutas2.webp"
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
        productLink.href = `./Info-frutas.html?product=${product.id}`;
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
