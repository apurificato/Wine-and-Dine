
// API

const BaseURL = 'https://api.spoonacular.com/recipes/findByIngredients';
const apiKey = '66a5d503ff2545049602d4eb1a369c0b'; // Replace YOUR_API_KEY with your actual API key
const WineBaseURL = 'https://api.spoonacular.com/food/wine/pairing';
const WinePair = '&food=';

// Variables
const searchBtn = document.querySelector('#searchBtn'); // Button for initiating search
const form = document.querySelector('#foodInput'); // User's ingredient input
const ingredients = document.querySelector('#ingredient'); // User's first ingredient input
const cocktail = document.querySelector('#cocktail');
const wine = document.querySelector('#wine');



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


function storeData(data) {
    // Retrieve existing data from localStorage or initialize an empty object
    let storedData = JSON.parse(localStorage.getItem('foodDrinkData')) || {};

    // Merge the new data with the existing data
    Object.assign(storedData, data);

    // Store the merged data back in localStorage
    localStorage.setItem('foodDrinkData', JSON.stringify(storedData));

    // Optionally, you can also log the stored data to the console for debugging
    console.log('Data stored in localStorage:', storedData);
}




// Event listener for the search button
searchBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
   
  

    if(ingredients) { // Check if there's an input
        getRecipesByIng(ingredients); // Fetch recipes based on the ingredient
    } 
    else {
        console.log('no cocktail chosen');
    }
});

cocktail.addEventListener('click', cocktailHandler)



