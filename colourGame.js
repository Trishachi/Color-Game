// Variable Declarations and Initialisations
let colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)"
            ]
let squares = document.querySelectorAll(".square");
let goalColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");


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
    if(clickedColor === goalColor){
      messageDisplay.textContent = "Correct!";
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
