//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function get20thRecipe(){
  document.querySelector(".twenty-meal-detail").style.display = "block"
}
function get21stRecipe(){
  document.querySelector(".twenty1-meal-detail").style.display = "block"
}
function get22ndRecipe(){
    document.querySelector(".twenty2-meal-detail").style.display = "block"
}



//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
  document.querySelector(".twenty-meal-detail").style.display ="none"
  document.querySelector(".twenty1-meal-detail").style.display ="none"
  document.querySelector(".twenty2-meal-detail").style.display ="none"
}

