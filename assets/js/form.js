
//SPOONACULAR API

const IngBaseURL = 'https://api.spoonacular.com/recipes/findByIngredients'
const apiKey = '?apiKey=30ee74022af34c2b82d7fa2a17cb2d70'
const findByIng = '&ingredients=' //after = comes user inputted food item
const WineBaseURL = 'https://api.spoonacular.com/food/wine/pairing'
const WinePair = '&food=' // after = comes user inputted food item

const FoodURL = IngBaseURL + apiKey + findByIng
const WineURL = WineBaseURL + apiKey + WinePair

// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients

// Example of search by ingedient:
// https://api.spoonacular.com/recipes/findByIngredients?apiKey=30ee74022af34c2b82d7fa2a17cb2d70&ingredients=chicken

// Example of wine paired by ingrediet:
// https://api.spoonacular.com/food/wine/pairing?apiKey=30ee74022af34c2b82d7fa2a17cb2d70&food=chicken


const randomCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'



function getIngredient(ingredient) {
  const options = `&ingredients=${ingredient}`;
  const url = IngBaseURL + apiKey + options;
  
  return $.get(url)
}

function getWinePair(userInput) {
  const options = `&food=${userInput}`
  const url = WineBaseURL + apiKey + options;
  
  return $.get(url)
}



$('#searchBtn').click(function () {
  const userInput = $('#ingredient').val();
  
  if (userInput) {
    getIngredient(userInput)
      .then(function (data) {
        console.log(data);
      })

    }
    
    const wineCheckbox = document.getElementById('wine')
    
      if (wineCheckbox.checked && userInput) {
        getWinePair(userInput)
          .then(function (data) {
            console.log(data)
          })
      }
})
    

   
