const products = [
    {
        id: "chile-chipotle",
        weight: "100g | 215g | 380g | 800g | 1.7 kg | 2.8kg",
        title: "Chipotles",
        info: "Our marinated chipotles speak for themselves; they are well-known and unmatched. Always hand-selected to ensure San Marcos quality. The new San Marcos Sweet Chipotles are made according to the traditional Puebla recipe: with piloncillo, spices, and vinegar, giving them a rich spicy flavor with a touch of sweetness, ideal for accompanying tortas, sandwiches, and any dish.",
        image: "./Image-chiles/AnyConv.com__fam-chipotle.webp"
    },
    {
        id: "chile-jalapeno",
        weight: "215g | 380g | 780g | 1.7kg | 2.8kg",
        title: "Jalapeño",
        info: "Our whole jalapeños are carefully hand-selected to ensure we always maintain San Marcos quality.",
        image: "./Image-chiles/AnyConv.com__famjalapeno.webp"
    },
    {
        id: "chile-rodaja",
        weight: "215g | 380g",
        title: "Slices",
        info: "Our jalapeño slices are cut and sized just right, with the rich flavor characteristic of our green chiles.",
        image: "./Image-chiles/AnyConv.com__famrodajas.webp"
    },
    {
        id: "chile-rajas-verdes",
        weight: "105g | 215g | 380g | 800g | 1.7kg | 2.8kg",
        title: "Green Strips",
        info: "Our green strips have the perfect balance of ingredients: carrot, onion chunks, salt, and vinegar. They are now tastier than ever.",
        image: "./Image-chiles/FAMILAS_RAJAS-768x579.jpg"
    },
    {
        id: "chile-largos",
        weight: "400g",
        title: "Long Chiles",
        info: "Our pickled long chiles have the ideal flavor for traditional recipes. They are a must-have every season.",
        image: "./Image-chiles/AnyConv.com__largosescabeche.webp"
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
        productLink.href = `./Info-chiles.html?product=${product.id}`;
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
