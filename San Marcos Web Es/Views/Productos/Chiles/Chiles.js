const products = [
    {
        id: "chile-chipotle",
        weight: "100g | 215g | 380g | 800g | 1,7 kg | 2,8kg",
        title: "Chipotles",
        info: "Nuestros chiles chipotles adobados ya hablan por sí solos, son los que todos conocen y nadie puede igualar. Siempre seleccionados a mano para asegurar la calidad San Marcos. Los nuevos Chipotles Dulces San Marcos se elaboran según la tradicional receta poblana: con piloncillo, especias y vinagre, que les da su rico sabor picante y un toque de dulzor, ideal para acompañar tortas, sándwiches y cualquier platillo.",
        image: "./Image-chiles/AnyConv.com__fam-chipotle.webp"
    },
    {
        id: "chile-jalapeno",
        weight: "215g | 380g | 780g | 1,7kg | 2,8kg",
        title: "Jalapeño",
        info: "Nuestros jalapeños enteros son cuidadosamente seleccionados a mano para asegurarnos de mantener siempre la calidad San Marcos.",
        image: "./Image-chiles/AnyConv.com__famjalapeno.webp"
    },
    {
        id: "chile-rodaja",
        weight: "215g | 380g",
        title: "Rodajas",
        info: "Nuestras rodajas de chiles jalapeños tienen el corte y tamaño ideal, con el rico sabor que caracteriza a nuestros chiles verdes.",
        image: "./Image-chiles/AnyConv.com__famrodajas.webp"
    },
    {
        id: "chile-rajas-verdes",
        weight: "105g | 215g | 380g | 800g | 1,7kg | 2,8kg",
        title: "Rajas Verdes",
        info: "Nuestras rajas verdes tienen el balance perfecto de ingredientes: zanahoria, cebolla en trozos, sal y vinagre. Ahora están más ricas que nunca.",
        image: "./Image-chiles/FAMILAS_RAJAS-768x579.jpg"
    },
    {
        id: "chile-largos",
        weight: "400g",
        title: "Chiles Largos",
        info: "Nuestros chiles largos en escabeche tienen el sabor ideal para esas recetas de tradición. Por eso no pueden faltar cada temporada.",
        image: "./Image-chiles/AnyConv.com__largosescabeche.webp"
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
