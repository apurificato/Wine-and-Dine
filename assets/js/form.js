
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





function getRecipe(ingredient) {   
  const options = `&ingredients=${ingredient}`;
  const url = IngBaseURL + apiKey + options;
  
  return $.get(url)
}

function getWinePair(userInput) {
  const options = `&food=${userInput}`
  const url = WineBaseURL + apiKey + options;
  
  return $.get(url)
}



function storeData(data) {
    localStorage.setItem('foodDrinkData', JSON.stringify(data))
    // window.location = './recipe.html' //.recipe.html is the second page
  }
  
  
  const cocktailData = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  $('#searchBtn').click(function () {
    const userInput = $('#ingredient').val();
    const wineCheckbox = $('#wine')
    const cocktailCheckbox = $('#cocktail')

  let data = {}
  if (userInput) {
    getRecipe(userInput) 
      .then(function (recipeData) {
        console.log(recipeData); 
        data.recipes = recipeData.slice(0, 5)

        if (wineCheckbox.prop('checked')) {
          getWinePair(userInput)
            .then(function (wineData) {
              console.log(wineData)
              data.wine = wineData

              storeData(data)
            })
          }
        else if (cocktailCheckbox.prop('checked')) {
              $.get(cocktailData)
              .then(function(data) {
              console.log(data)
                  data.cocktail = cocktailData
                  storeData(data)
              })

        } else {
          storeData(data)
        }     
      })
    }
})
    

   
