//This variable will be responsible for the get Recipe Button and display the output
const getRecipeBtn = document.querySelectorAll(".card-footer button");
const mealDetails = document.querySelector(".meal-detail");
const mealCloseBtn = document.getElementById("recipe-close-btn");


//The functions will run for the button when click 

function getnews1(){
    document.querySelector(".news1-meal-detail").style.display = "block"
}
function getnews2(){
    document.querySelector(".news2-meal-detail").style.display = "block"
}
function getnews3(){
    document.querySelector(".news3-meal-detail").style.display = "block"
}
function getnews4(){
    document.querySelector(".news4-meal-detail").style.display = "block"
}
function getnews5(){
    document.querySelector(".news5-meal-detail").style.display = "block"
}
function getnews6(){
    document.querySelector(".news6-meal-detail").style.display = "block"
}
function getnews7(){
    document.querySelector(".news7-meal-detail").style.display = "block"
}
function getnews8(){
    document.querySelector(".news8-meal-detail").style.display = "block"
}
//the function will close the above functions when the closeBtn is clicked
function closeBtn(){
    document.querySelector(".news1-meal-detail").style.display ="none"
    document.querySelector(".news2-meal-detail").style.display ="none"
    document.querySelector(".news3-meal-detail").style.display ="none"
    document.querySelector(".news4-meal-detail").style.display ="none"
    document.querySelector(".news5-meal-detail").style.display ="none"
    document.querySelector(".news6-meal-detail").style.display ="none"
    document.querySelector(".news7-meal-detail").style.display ="none"
    document.querySelector(".news8-meal-detail").style.display ="none"
}

