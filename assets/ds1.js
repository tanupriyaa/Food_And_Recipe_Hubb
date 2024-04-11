//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get2ndRecipe(){
  document.querySelector("second-meal-detail").style.display = "block"
}
function get5thRecipe(){
  document.querySelector(".five-meal-detail").style.display = "block"
}
function get9thRecipe(){
    document.querySelector(".nine-meal-detail").style.display = "block"
}



//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".second-meal-detail").style.display ="none"
  document.querySelector(".five-meal-detail").style.display ="none"
  document.querySelector(".nine-meal-detail").style.display ="none"
}

