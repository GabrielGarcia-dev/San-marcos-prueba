const products = [
    {
        id: "salsa-casera",
        weight: "Can: 215g | Jar: 500g",
        title: "Homemade Salsa",
        info: "Our Mexican salsa is made in the true homemade style with a combination of the finest ingredients.",
        image: "./Image-salsas/AnyConv.com__salsa-casera.webp"
    },
    {
        id: "salsa-verde",
        weight: "Can: 215g | Jar: 500g",
        title: "Green Salsa",
        info: "Our green salsa is made with the traditional recipe so you will never be without it at home.",
        image: "./Image-salsas/AnyConv.com__salsa_verde.webp"
    },
    {
        id: "salsa-chipotle",
        weight: "Can: 215g | Jar: 500g",
        title: "Chipotle Salsa",
        info: "Our chipotle salsa molcajete has the flavor that every good taco deserves and the spiciness that every Mexican wants.",
        image: "./Image-salsas/AnyConv.com__salsa-chipotle.webp"
    },
    {
        id: "salsa-cocinar",
        weight: "Can: 215g | Jar: 500g",
        title: "Cooking Sauces",
        info: "Our cooking sauces are the secret ingredient you need in your kitchen. With a variety of flavors and levels of spiciness to suit all tastes, our cooking sauces elevate the flavor of your dishes to the next level.",
        image: "./Image-salsas/AnyConv.com__salsasparacocinar.webp"
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
