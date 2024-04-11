//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get6thRecipe(){
  document.querySelector(".six-meal-detail").style.display = "block"
}
function get8thRecipe(){
  document.querySelector(".eight-meal-detail").style.display = "block"
}
function get11thRecipe(){
    document.querySelector(".eleven-meal-detail").style.display = "block"
}



//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".six-meal-detail").style.display ="none"
  document.querySelector(".eight-meal-detail").style.display ="none"
  document.querySelector(".eleven-meal-detail").style.display ="none"
}

