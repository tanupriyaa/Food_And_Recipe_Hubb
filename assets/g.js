//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get12thRecipe(){
  document.querySelector(".twelth-meal-detail").style.display = "block"
}
function get13thRecipe(){
  document.querySelector(".thirteen-meal-detail").style.display = "block"
}
function get14thRecipe(){
    document.querySelector(".fourteen-meal-detail").style.display = "block"
}
function get15thRecipe(){
    document.querySelector(".fifteen-meal-detail").style.display = "block"
}


//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".twelth-meal-detail").style.display ="none"
  document.querySelector(".thirteen-meal-detail").style.display ="none"
  document.querySelector(".fourteen-meal-detail").style.display ="none"
  document.querySelector(".fifteen-meal-detail").style.display ="none"
}

