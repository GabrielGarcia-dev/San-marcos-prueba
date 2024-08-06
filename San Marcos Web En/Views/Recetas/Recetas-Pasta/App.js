        const recipes = {
            'coditos-atun': {
                title: 'Coditos con Atún y Chipotle',
                image: './Recetas-Pasta/coditos_atun.webp',
                servings: 'Servings: 4 People',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fcoditos-con-atun-y-chipotle%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F05%2Fcoditos_atun.webp&description=Coditos+con+At%C3%BAn+y+Chipotle&is_video=false',
                ingredients: [
                    '½ liter cream',
                    '1 tablespoon chicken bouillon powder',
                    '1 packet elbow macaroni',
                    '2 San Marcos adobo chipotle peppers and 1 tablespoon of the adobo',
                    '2 cans tuna in water, drained',
                    'Cubed Manchego cheese',
                    '1 cup cherry tomatoes, halved',
                    '10 sprigs fresh chives, washed and finely chopped'
                ],
                instructions: [
                    'Blend the cream with the chicken bouillon and the San Marcos chipotles with the adobo.',
                    'Mix the cooked and drained elbow macaroni with the tuna, Manchego cheese, tomatoes, and chives.',
                    'Pour the chipotle sauce over the macaroni, mix, and serve.'
                ],
                notes: [
                    
                ],	
                video: ''
            },           
            'sopa-codito': {
                title: 'Sopa de codito hawaiana',
                image: './Recetas-Pasta/sopa-de-codito-hawaiana (1).webp',
                servings: 'Servings: 4 People',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fsopa-de-codito-hawaiana%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F06%2Fsopa-de-codito-hawaiana.webp&description=sopa+de+codito+hawaiana&is_video=false',
                ingredients: [
                    '290 gr San Marcos Rajas',
                    '1 bag elbow macaroni',
                    '400 ml sour cream',
                    '8 slices pineapple',
                    '8 slices bacon',
                    '½ onion',
                    '2 tablespoons butter',
                    'Salt to taste'
                ],
                instructions: [
                    'Boil 1 liter of water with a piece of onion. Once boiling, add the pasta and cook for 10 minutes. Remove from heat, drain, and let it sit.',
                    'Chop the bacon and set aside. Cut the pineapple slices into small cubes. Chop the onion and set aside.',
                    'In a saucepan, melt the butter and fry the bacon. Add the onion and pineapple.',
                    'Finally, add the pasta and cook over low heat for 3 minutes. Add the San Marcos Rajas and season.',
                    'Add salt to taste if desired. Enjoy the divine touch of our San Marcos Rajas!'
                ],
                notes: [
                    'Tips: Less animal protein, more plant-based protein. Meats and derivatives are not the only protein sources. Plant-based foods, such as legumes, also offer protein. Replacing some proteins can help make meals more balanced and save on costs.'
                ],
                video: ''
            },
            'salchichas-pasta': {
                title: 'Salchichas y pasta al chipotle',
                image: './Recetas-Pasta/Salchichas-y-pasta-al-chipotle.webp',
                servings: 'Servings: 4 People',
                pinterest: 'https://www.pinterest.com/pin/create/bookmarklet/?url=https%3A%2F%2Falimentossanmarcos.com.mx%2Fsalchichas-y-pasta-al-chipotle%2F&media=https%3A%2F%2Falimentossanmarcos.com.mx%2Fwp-content%2Fuploads%2F2023%2F06%2FSalchichas-y-pasta-al-chipotle.webp&description=Salchichas+y+pasta+al+chipotle&is_video=false',
                ingredients: [
                    '290 gr San Marcos Chipotles',
                    '10 sausages',
                    '3 tomatoes',
                    '⅛ onion',
                    '2 cloves garlic',
                    'Salt to taste',
                    '200 g of your favorite pasta',
                    '¼ cup sour cream'
                ],
                instructions: [
                    'Follow the instructions on the pasta package and cook it in 1 liter of water for 15 minutes. Drain and set aside.',
                    'Roast the tomatoes. Meanwhile, cut the sausages into strips and fry them in a pan.',
                    'Once the roasted tomatoes are ready, add them to the blender along with ⅛ onion, 2 cloves of garlic, San Marcos Chipotles, and water.',
                    'With half of the sauce, season the sausages in a pan and cook for 15 minutes.',
                    'Boil the other half of the sauce in a pot, add a little salt and ¼ cup of sour cream until well blended.',
                    'Add the pasta and let it simmer for a few minutes. Enjoy the glorious flavor of our San Marcos Chipotles!',
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
            window.location.href = '/San Marcos Web En/Views/Recetas/Recetas-Pasta/Recetas-pasta.html'; 
            });
        });
        
        