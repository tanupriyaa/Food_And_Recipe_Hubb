//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get23rdRecipe(){
    document.querySelector(".twenty3-meal-detail").style.display = "block"
  }
function get24thRecipe(){
    document.querySelector(".twenty3-meal-detail").style.display = "block"
}
function get25thRecipe(){
    document.querySelector(".twenty5-meal-detail").style.display = "block"
}

//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
    document.querySelector(".twenty3-meal-detail").style.display ="none"
    document.querySelector(".twenty4-meal-detail").style.display ="none"
    document.querySelector(".twenty5-meal-detail").style.display ="none"
}

