const products = {
    "chile-chipotle": {
        title: "CHILE CHIPOTLE",
        description: "Nuestros chiles chipotles adobados ya hablan por sí solos, son los que todos conocen y nadie puede igualar. Siempre seleccionados a mano para asegurar la calidad San Marcos. Los nuevos Chipotles Dulces San Marcos se elaboran según la tradicional receta poblana: con piloncillo, especias y vinagre, que les da su rico sabor picante y un toque de dulzor, ideal para acompañar tortas, sándwiches y cualquier platillo.",
        image: "./Image-chiles/AnyConv.com__fam-chipotle.webp",
        presentations: ["CHIPOTLES DULCES", "CHIPOTLES ADOBADOS", "CHIPOTLES EN ESCABECHE", "Lata: 215g", "Lata: 100g | 215g | 380g | 800g | 1,7 kg | 2,8kg", "Lata: 215g", "CHIPOTLES MOLIDOS", "CHIPOTLES EN TROCITOS", "PRODUCTO GRATIS", "Lata: 215g", "Lata: 215g", "Lata: 120 g | 160g | 255g | 290g"]
    },
    "chile-jalapeno": {
        title: "CHILES JALAPEÑOS",
        description: "Nuestros jalapeños enteros son cuidadosamente seleccionados a mano para asegurarnos de mantener siempre la calidad San Marcos.",
        image: "./Image-chiles/AnyConv.com__famjalapeno.webp",
        presentations: ["ENTEROS EN ESCABECHE", "PRODUCTO GRATS", 'EN TROCITOS EN SALMUERA', 'Lata: 215g | 380g | 780g | 1,7kg | 2,8kg Bolsa: 2.8 kg', '255g | 290g', 'Trozos: 215g | 380g']
    },
    "chile-rodaja": {
        title: "RODAJAS",
        description: "Nuestras rodajas de chiles jalapeños tienen el corte y tamaño ideal, con el rico sabor que caracteriza a nuestros chiles verdes.",
        image: "./Image-chiles/AnyConv.com__famrodajas.webp",
        presentations: 'Lata: 215g | 380g Bolsa: 2,8kg'
    },
    "chile-rajas-verdes": {
        title: "RAJAS VERDES",
        description: "Nuestras rajas verdes tienen el balance perfecto de ingredientes: zanahoria, cebolla en trozos, sal y vinagre. Ahora están más ricas que nunca.",
        image: "./Image-chiles/FAMILAS_RAJAS-768x579.jpg",
        presentations: ["ENTEROS EN ESCABECHE", "PRODUCTO GRATS", 'RAJAS ESCABECHE', 'Lata: 105g | 215g | 380g | 800g | 1,7kg | 2,8kg Bolsa: 2,8kg', '255g | 290g', 'Lata : 120g | 160g | 255g | 290g', 'RODAJAS', '', '', 'Lata: 215g | 380g Bolsa: 2,8kg']
    },
    "chile-largos": {
        title: "CHILES LARGOS",
        description: "Nuestros chiles largos en escabeche tienen el sabor ideal para esas recetas de tradición. Por eso no pueden faltar cada temporada.",
        image: "./Image-chiles/AnyConv.com__largosescabeche.webp",
        presentations:'NO DISPONIBLE POR EL MOMENTO'   
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
                <h3>PRESENTACIONES</h3>
                ${createTable(product.presentations)}
            `;
        } else {
            presentationsSection.innerHTML = `
                <h3>PRESENTACIONES</h3>
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
