//SPOONACULAR API

const IngBaseURL = 'https://api.spoonacular.com/recipes/findByIngredients'
const apiKey = '?apiKey=b743a7417dde4ae99242051b6119b3a5'
const findByIng = '&ingredients=' //after = comes user inputted food item
const WineBaseURL = 'https://api.spoonacular.com/food/wine/pairing'
const WinePair = '&food=' // after = comes user inputted food item


// const FoodURL = IngBaseURL + apiKey + findByIng
const WineURL = WineBaseURL + apiKey + WinePair


function getRecipe(ingredient) {
 
  const options = `&ingredients=${ingredient}`
  const url = IngBaseURL + apiKey + options



  return $.get(url)
}

function getWinePair(userInput) {
  const options = `&food=${userInput}`
  const url = WineBaseURL + apiKey + options;

  return $.get(url)
}


function storeData(data) {
  console.log('stored data', data)
    localStorage.setItem('foodDrinkData', JSON.stringify(data))
    window.location = 'recipe.html' //.recipe.html is the second page
    // window.location.assign('recipe.html')
  }

  const cocktailData = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  $('#searchBtn').click(function (event) {
    event.preventDefault();
    const userInput = $('#ingredient').val();
    const wineCheckbox = $('#wine')
    const cocktailCheckbox = $('#cocktail')

    let data = {}
    if (userInput) {
     getRecipe(userInput) 
      .then(function (recipeData) {
        console.log('recipe Data', recipeData); 
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
            .then(function(cocktailData) {
              console.log(cocktailData)
              data.cocktail = cocktailData

              storeData(data)
            })
        
           } else {
          storeData(data)
        }  
      })
      
      .catch(function (error) {
          console.error('Error fetching wine data:', error);
          storeData(data); // Store data even if there's an error
      });

        

   } 
});
 





  // // takes the stored object and add it to a const
  // const recipeData = JSON.parse(localStorage.getItem('foodDrinkData')) || []
  
  







