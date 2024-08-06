        const recipes = {
            'coditos-atun': {
                title: 'Coditos con Atún y Chipotle',
                image: './Recetas-Pasta/coditos_atun.webp',
                servings: 'Porciones: 4 Personas',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fcoditos-con-atun-y-chipotle%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F05%2Fcoditos_atun.webp&description=Coditos+con+At%C3%BAn+y+Chipotle&is_video=false',
                ingredients: [
                    '½ Lt crema',
                    '1 cda consomé de pollo en polvo',
                    '1 paq pasta de coditos',
                    '2 chiles chipotles adobados San Marcos y 1 cucharada del adobo',
                    '2 latas atún en agua escurridas',
                    'Queso tipo manchego cortado en cubos',
                    '1 taza jitomate cherry cortado a la mitad',
                    '10 ramitas cebollín fresco desinfectado y picado finamente'
                ],
                instructions: [
                    'Licúa la crema con el consomé de pollo y los chipotles San Marcos con el adobo.',
                    'Mezcla los coditos previamente cocidos y escurridos con el atún, el queso manchego, el jitomate y el cebollín.',
                    'Baña los coditos con la salsa de chipotle, mezcla y sirve.'
                ],
                notes: [
                    
                ],	
                video: ''
            },           
            'sopa-codito': {
                title: 'Sopa de codito hawaiana',
                image: './Recetas-Pasta/sopa-de-codito-hawaiana (1).webp',
                servings: 'Porciones: 4 Personas',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fsopa-de-codito-hawaiana%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F06%2Fsopa-de-codito-hawaiana.webp&description=sopa+de+codito+hawaiana&is_video=false',
                ingredients: [
                    '290 gr Rajas San Marcos',
                    '1 bolsa de pasta de codito',
                    '400 ml crema ácida',
                    '8 rebanadas de piña',
                    '8 rebanadas de tocino',
                    '½ cebolla',
                    '2 cdas mantequilla',
                    'Sal al gusto'
                ],
                instructions: [
                    'Pon un litro de agua a hervir con un trozo de cebolla. Ya que este hirviendo, coloca la pasta y deja cocer por 10 minutos. Retira del fuego, cuela y deja escurrir.',
                    'Pica el tocino y reserva. Pica las rebanadas de piña en pequeños cubos. Pica la cebolla y reserva.',
                    'En una cacerola derrite la mantequilla y pon a freír el tocino, agrega la cebolla y la piña.',
                    'Por último, añade la pasta y déjala al fuego por 3 min, agrega las Rajas San Marcos, y sazona.',
                    'Si gustas agrega sal. ¡Disfruta del delicioso toque divino de nuestras Rajas San Marcos!!'
                ],
                notes: [
                    'Tips rendidores: Menos proteína animal, más proteína vegetal. Las carnes y derivados no son la única fuente de proteína que tenemos para nutrirnos, el mundo vegetal también nos ofrece esta posibilidad, las legumbres son un buen ejemplo de ello. El reemplazar proteínas, no sólo te ayudará a tener platillos más equilibrados sino a economizar en el gasto.'
                ],
                video: ''
            },
            'salchichas-pasta': {
                title: 'Salchichas y pasta al chipotle',
                image: './Recetas-Pasta/Salchichas-y-pasta-al-chipotle.webp',
                servings: 'Porciones: 4 Personas',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fsalchichas-y-pasta-al-chipotle%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F06%2FSalchichas-y-pasta-al-chipotle.webp&description=Salchichas+y+pasta+al+chipotle&is_video=false',
                ingredients: [
                    '290 gr Chipotles San Marcos',
                    '10 salchichas',
                    '3 jitomates',
                    '⅛ cebolla',
                    '2 dientes de ajo',
                    'Sal al gusto',
                    '200 g de tu pasta favorita',
                    '¼ crema ácida'
                ],
                instructions: [
                    'Sigue las indicaciones del sobre de pasta y déjala cocer en 1 litro de agua 15 min. Escúrrela y reserva.',
                    'Ahora tatema los jitomates. Mientras, corta las salchichas en tiritas y fríelas en una sartén.',
                    'Cuando estén listos los jitomates asados, añádelos a la licuadora junto con un 1/8 de cebolla, 2 dientes de ajo, Chiles Chipotles San Marcos y agua.',
                    'Con la mitad de la salsa, sazona en una sartén las salchichas y deja cocer durante 15 minutos.',
                    'Hierve la otra mitad de la salsa en una olla, añade un poquito de sal y ¼ kg de crema ácida hasta que esté bien integrada.',
                    'Ahora agrega la pasta y deja hervir unos minutos. ¡Disfruta el glorioso sabor de nuestros chiles Chipotles San Marcos!',
                ],
                notes: [
                    
                ],
                video: ''
            }
        };

        function getRecipeFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('recipe');
        }
        
        function renderRecipe(recipeKey) {
            const recipe = recipes[recipeKey];
            if (!recipe) {
                console.error('Recipe not found:', recipeKey);
                return;
            }
        
            console.log('Rendering recipe:', recipe);
        
            document.getElementById('recipe-title').textContent = recipe.title;
            document.getElementById('recipe-image').src = recipe.image;
            document.getElementById('recipe-servings').textContent = recipe.servings;
        
            const ingredientsList = document.getElementById('recipe-ingredients');
            ingredientsList.innerHTML = '';
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        
            const instructionsList = document.getElementById('recipe-instructions');
            instructionsList.innerHTML = '';
            recipe.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                instructionsList.appendChild(li);
            });
        
            const notesList = document.getElementById('recipe-notes');
            notesList.innerHTML = '';
            const noNotesMessage = document.getElementById('no-notes-message');
            if (recipe.notes && recipe.notes.length > 0) {
                recipe.notes.forEach(note => {
                    const li = document.createElement('li');
                    li.textContent = note;
                    notesList.appendChild(li);
                });
                noNotesMessage.style.display = 'none';
            } else {
                noNotesMessage.style.display = 'block';
            }
        
            const videoElement = document.getElementById('recipe-video');
            const noVideoMessage = document.getElementById('no-video-message');
            if (recipe.video) {
                videoElement.src = recipe.video;
                videoElement.style.display = 'block';
                noVideoMessage.style.display = 'none';
            } else {
                videoElement.style.display = 'none';
                noVideoMessage.style.display = 'block';
            }

            const pinterestButton = document.getElementById('pinterest-button');
            if (recipe.pinterest) {
                pinterestButton.href = recipe.pinterest;
                pinterestButton.style.display = 'block';
                console.log('Pinterest button:', pinterestButton);
            } else {
                pinterestButton.style.display = 'none';
            }
        }
        
        function changeRecipe(offset) {
            const currentRecipeKey = getRecipeFromURL();
            const recipeKeys = Object.keys(recipes);
            const currentIndex = recipeKeys.indexOf(currentRecipeKey);
            if (currentIndex === -1) {
                console.error('Current recipe key not found:', currentRecipeKey);
                return;
            }
            const newIndex = (currentIndex + offset + recipeKeys.length) % recipeKeys.length;
            const newRecipeKey = recipeKeys[newIndex];
            window.location.search = `?recipe=${newRecipeKey}`;
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            const recipeKey = getRecipeFromURL();
            if (recipeKey) {
                renderRecipe(recipeKey);
            } else {
                console.error('Recipe key is missing in the URL');
            }
        
            const printButton = document.getElementById('print-button');
            printButton.addEventListener('click', () => {
                window.print();
            });

            const pinrecipe1 = document.getElementById('pinterest-button');

    pinrecipe1.addEventListener('click', () => {
        // Obtener la URL de Pinterest del objeto de receta
        const url = recipes[getRecipeFromURL()]?.pinterest;
        
        // Redirigir a la URL en una nueva pestaña
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error('Pinterest URL not found for the current recipe');
        }
    });
        
            const prevButton = document.querySelector('.button-container .left .button-3d');
            prevButton.addEventListener('click', () => {
                changeRecipe(-1);
            });
        
            const nextButton = document.querySelector('.button-container .right .button-3d');
            nextButton.addEventListener('click', () => {
                changeRecipe(1);
            });

            const goToPageButton = document.getElementById('go-to-page-button');
            goToPageButton.addEventListener('click', () => {
            window.location.href = './Recetas-pasta.html'; 
            });
        });
        
        