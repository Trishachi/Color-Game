// Variable Declarations and Initialisations
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let goalColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");



//Game mode settings codes

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  goalColor = pickColor();
  colorDisplay.textContent = goalColor;
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});



//Reset Button Codes
resetButton.addEventListener("click", function(){
  //generate all new colours
  colors = generateRandomColors(numSquares);
  //pick random color from array
  goalColor = pickColor();
  //change colour display to matched goal color
  colorDisplay.textContent = goalColor;
  // change sqaure colors
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

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
      resetButton.textContent = "Play Again?";
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

//Functions for generating random colours in square boxes
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
