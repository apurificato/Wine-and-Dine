const  recipeOutput = $('ul')

// takes the stored object and add it to a const
const recipeData = JSON.parse(localStorage.getItem('foodDrinkData')) || []

console.log(recipeData)
//inserts the user inputed posts
function outputRecipe() {
    if (recipeData.recipes.length) {
        recipeOutput.innerHTML = '';
    }

    for (let obj of recipeData.recipes) {
        const usedIngredientsList = obj.usedIngredients.map(function(ingredient) {
            return `<li>${ingredient.original}</li>`;
        }).join('');
        
        const missedIngredientsList = obj.missedIngredients.map(function(ingredient) {
            return `<li>${ingredient.original}</li>`;
        }).join('');

        console.log(obj)
        recipeOutput.prepend(`
        <ul class="post mgb-medium">
            <img src="${obj.image}">
            <p class="recipeTitle">${obj.title}</p>
            <p class="content">${usedIngredientsList}, ${missedIngredientsList}</p>
        </ul>
        <ul>
            ${recipeData.wine ? `
            <img src="${recipeData.wine.productMatches[0].imageUrl}">
            <p>${recipeData.wine.pairingText}</p>
            ` : `
            <p>${obj.strDrinkThumb}</p>
            <p>${obj.strDrink}</p>
            <p>${obj.strInstructions}</p>
            `} 
            
        </ul>
        `);
    };
}

outputRecipe();

