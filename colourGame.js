// Variable Declarations and Initialisations
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let goalColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");


// Set goal colour
colorDisplay.textContent = goalColor;

// create colour boxes
for(var i = 0; i < squares.length; i++){
  // add initial colour to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of picked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to goalColor
    // console.log(clickedColor, goalColor);
    if(clickedColor === goalColor){
      messageDisplay.textContent = "Correct!";
      h1.style.backgroundColor = clickedColor;
      changeColors(clickedColor);
      }  else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
  });
}

//Function for Changing square colours
function changeColors(color){
  //loo through all squares
  for(var i = 0; i < squares.length; i++){
      //change color to match selected coloue
    squares[i].style.backgroundColor = color;
  }
}

// Function for generating/picking goal colour
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//Function for generating random colours in square boxes
function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random color to array
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
    //pick a red form 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a green form 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue form 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
