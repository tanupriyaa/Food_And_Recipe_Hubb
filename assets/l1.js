//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function getRecipeDetails(){
  document.querySelector(".meal-detail").style.display = "block"
}
function get3rdRecipe(){
  document.querySelector(".third-meal-detail").style.display = "block"
}
function get10thRecipe(){
    document.querySelector(".tenth-meal-detail").style.display = "block"
}



//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".meal-detail").style.display ="none"
  document.querySelector(".third-meal-detail").style.display ="none"
  document.querySelector(".tenth-meal-detail").style.display ="none"
}

