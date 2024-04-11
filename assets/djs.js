//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get16thRecipe(){
  document.querySelector(".sixteen-meal-detail").style.display = "block"
}
function get17thRecipe(){
  document.querySelector(".seventeen-meal-detail").style.display = "block"
}
function get18thRecipe(){
  document.querySelector(".eighteen-meal-detail").style.display = "block"
}
function get19thRecipe(){
  document.querySelector(".nineteen-meal-detail").style.display = "block"
}



//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".sixteen-meal-detail").style.display ="none"
  document.querySelector(".seventeen-meal-detail").style.display ="none"
  document.querySelector(".eighteen-meal-detail").style.display ="none"
  document.querySelector(".nineteen-meal-detail").style.display ="none"
}

