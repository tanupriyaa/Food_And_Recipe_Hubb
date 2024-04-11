//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 
function get11thRecipe(){
    document.querySelector(".eleven-meal-detail").style.display = "block"
  }
function get26thRecipe(){
    document.querySelector(".twenty6-meal-detail").style.display = "block"
  }
function get27thRecipe(){
    document.querySelector(".twenty7-meal-detail").style.display = "block"
}
function get28thRecipe(){
    document.querySelector(".twenty8-meal-detail").style.display = "block"
}
function get29thRecipe(){
    document.querySelector(".twenty9-meal-detail").style.display = "block"
}
//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
    document.querySelector(".eleven-meal-detail").style.display ="none"
    document.querySelector(".twenty6-meal-detail").style.display ="none"
    document.querySelector(".twenty7-meal-detail").style.display ="none"
    document.querySelector(".twenty8-meal-detail").style.display ="none"
    document.querySelector(".twenty9-meal-detail").style.display ="none"
}

