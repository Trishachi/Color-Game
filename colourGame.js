// Variable Declarations and Initialisations
let colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)"
            ]
let squares = document.querySelectorAll(".square");
let goalColor = colors[3];
let colorDisplay = document.getElementById("colorDisplay");


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
      alert("Correct!");
      }  else {
        alert("WRONG");
      }
  });
}
