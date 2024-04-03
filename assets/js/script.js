<<<<<<< HEAD
// API

const BaseURL = 'https://api.spoonacular.com/recipes/findByIngredients';
const apiKey = '036a58d5be4a48bdb9453bfbda2a453f'; // Replace YOUR_API_KEY with your actual API key
const findByIng = '&ingredients=';
const WineBaseURL = 'https://api.spoonacular.com/food/wine/pairing';
const WinePair = '&food=';

// Variables
const searchBtn = document.querySelector('#searchBtn'); // Button for initiating search
const form = document.querySelector('#foodInput'); // User's ingredient input
const outputIng = document.querySelector('#outputIng'); 
const ingredientInputOne = document.querySelector('#userInputOne'); // User's first ingredient input
const ingredientInputTwo = document.querySelector('#userInputTwo'); // User's second ingredient input
const ingredientInputThree = document.querySelector('#userInputThree'); // User's third ingredient input
const cocktail = document.querySelector('#cocktail');
const wine = document.querySelector('#wine');


const ingredients = [ingredientInputOne, ingredientInputTwo, ingredientInputThree]

// Function to fetch recipes by ingredients
function getRecipesByIng(ingredients) {

   
    // Construct the URL for the API request dynamically using the user's input
    const url = `${BaseURL}?apiKey=${apiKey}&ingredients=${ingredients}&number=5`;
   

    // Use Fetch API to get data from Spoonacular API
    fetch(url)
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            console.log(data); // Log the data for now, you can replace this with any DOM manipulation logic
            
        })
        .catch(error => console.error('Error:', error)); // Log errors if any
}


function outputRecipes(recipes) {
    outputIng.innerHTML = ''

    recipes.forEach(recipe => {
        const recipeHtml = `
        <div class="recipe">
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>Some other details here...</p>
            </div>
        
        `
    })
}

function cocktailHandler() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
        })
    if (cocktail.checked) {
        console.log(data)
        displayCocktail(data.drink[0])
    } else {
        console.log("no cocktail");
    }
}






// Event listener for the search button
searchBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
   
    const ingredientOne = ingredientInputOne.value.trim();
    const ingredientTwo = ingredientInputTwo.value.trim();
    const ingredientThree = ingredientInputThree.value.trim();

    const ingredients = [ingredientOne, ingredientTwo, ingredientThree]


    if(ingredients) { // Check if there's an input
        getRecipesByIng(ingredients); // Fetch recipes based on the ingredient
    } 
    else {
        console.log('no cocktail chosen');
    }
});

cocktail.addEventListener('click', cocktailHandler)



=======
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });
>>>>>>> 3d814dd509dca4e9d6d56896a28e9e283b39751e
