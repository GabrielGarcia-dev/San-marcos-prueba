const products = {
    "chile-chipotle": {
        title: "CHIPOTLES",
        description: "Our marinated chipotles speak for themselves; they are well-known and unmatched. Always hand-selected to ensure San Marcos quality. The new San Marcos Sweet Chipotles are made according to the traditional Puebla recipe: with piloncillo, spices, and vinegar, giving them a rich spicy flavor with a touch of sweetness, ideal for accompanying tortas, sandwiches, and any dish.",
        image: "./Image-chiles/AnyConv.com__fam-chipotle.webp",
        presentations: [
            "SWEET CHIPOTLES",
            "MARINATED CHIPOTLES",
            "PICKLED CHIPOTLES",
            "Can: 215g",
            "Can: 100g | 215g | 380g | 800g | 1.7kg | 2.8kg",
            "Can: 215g",
            "GROUND CHIPOTLES",
            "CHIPOTLE PIECES",
            "FREE PRODUCT",
            "Can: 215g",
            "Can: 215g",
            "Can: 120g | 160g | 255g | 290g"
        ]
    },
    "chile-jalapeno": {
        title: "JALAPEÑOS",
        description: "Our whole jalapeños are carefully hand-selected to ensure we always maintain San Marcos quality.",
        image: "./Image-chiles/AnyConv.com__famjalapeno.webp",
        presentations: [
            "PICKLED WHOLE",
            "FREE PRODUCT",
            "PIECES IN BRINE",
            "Can: 215g | 380g | 780g | 1.7kg | 2.8kg Bag: 2.8kg",
            "255g | 290g",
            "Pieces: 215g | 380g"
        ]
    },
    "chile-rodaja": {
        title: "SLICES",
        description: "Our jalapeño slices are cut and sized just right, with the rich flavor characteristic of our green chiles.",
        image: "./Image-chiles/AnyConv.com__famrodajas.webp",
        presentations: "Can: 215g | 380g Bag: 2.8kg"
    },
    "chile-rajas-verdes": {
        title: "GREEN STRIPS",
        description: "Our green strips have the perfect balance of ingredients: carrot, onion chunks, salt, and vinegar. They are now tastier than ever.",
        image: "./Image-chiles/FAMILAS_RAJAS-768x579.jpg",
        presentations: [
            "PICKLED WHOLE",
            "FREE PRODUCT",
            "PICKLED STRIPS",
            "Can: 105g | 215g | 380g | 800g | 1.7kg | 2.8kg Bag: 2.8kg",
            "255g | 290g",
            "Can: 120g | 160g | 255g | 290g",
            "SLICES",
            "",
            "",
            "Can: 215g | 380g Bag: 2.8kg"
        ]
    },
    "chile-largos": {
        title: "LONG CHILES",
        description: "Our pickled long chiles have the ideal flavor for traditional recipes. They are a must-have every season.",
        image: "./Image-chiles/AnyConv.com__largosescabeche.webp",
        presentations: "NOT AVAILABLE AT THE MOMENT"
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

function createTable(data) {
    if (!Array.isArray(data)) {
        return '';
    }
    
    let tableHTML = '<table style="border-collapse: collapse;">';
    for (let i = 0; i < data.length; i += 3) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            if (data[i + j]) {
                tableHTML += `<td style=" font-size: 15px; text-align: center; border: 1px solid black;">${data[i + j]}</td>`;
            } else {
                tableHTML += '<td style=" font-size: 13px; text-align: center; border: 1px solid black;"></td>';
            }
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
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
        if (Array.isArray(product.presentations)) {
            presentationsSection.innerHTML = `
                <h3>PRESENTATIONS</h3>
                ${createTable(product.presentations)}
            `;
        } else {
            presentationsSection.innerHTML = `
                <h3>PRESENTATIONS</h3>
                <p>${product.presentations}</p>
            `;
        }
    } else {
        document.querySelector('.title').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos h2').textContent = "Producto no encontrado";
        document.querySelector('#info-chicharos p').textContent = "La información para el producto solicitado no está disponible.";
    }

    
    showInfo('chicharos'); 
});
