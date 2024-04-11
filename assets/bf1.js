//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get4thRecipe(){
  document.querySelector(".four-meal-detail").style.display = "block"
}
function get7thRecipe(){
  document.querySelector(".seven-meal-detail").style.display = "block"
}




//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".four-meal-detail").style.display ="none"
  document.querySelector(".seven-meal-detail").style.display ="none"
}

