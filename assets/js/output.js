const  recipeOutput = $('#recipeOutput')


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
        <div class="columns" id="recipeOutput">
            <div class="column">
                <img class="recipeImg" src="${obj.image}">
            </div>
            <div class="column is-three-quarters">
                <h4 class="has-text-dark title is-4 has-text-weight-bold" >${obj.title}</h4>
                <p class="has-text-dark" >Ingredients Include: ${usedIngredientsList}${missedIngredientsList}</p>
            </div>
        </div>
        `)
        
    }
    recipeOutput.prepend(recipeData.wine ? `
    <div class="columns mb-6">
        <div class="column">
            <img  src="${recipeData.wine.productMatches[0].imageUrl}"> 
        </div>
        <div class="column is-three-quarters">
            <p class="has-text-dark">${recipeData.wine.pairingText}</p>
        </div>
    </div>
    <hr class="mb-6">
            ` : `
    <div class="columns">
        <div class="column">
            <img class="drinkImg" src="${recipeData.cocktail.drinks[0].strDrinkThumb}">
        </div>
        <div class="column is-three-quarters">
            <h4 class="has-text-dark title is-4 has-text-weight-bold">${recipeData.cocktail.drinks[0].strDrink}</h4>
            <p class="has-text-dark">${recipeData.cocktail.drinks[0].strInstructions}</p>
        </div>
    </div>
    <hr class="mb-6">
            `)
}

outputRecipe()
