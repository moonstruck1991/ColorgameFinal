// defined vaiables
var numberOfColors = 6;
var colors = generateRandomColors(numberOfColors);
var pickedColor = pickColor();


// picked variables
var squares = document.getElementsByClassName("square")
var showPickedColor = document.getElementById("showPickedColor")
var messageDisplay = document.getElementById("message")
var heading = document.getElementsByTagName("h1")[0]
var reset = document.getElementById("reset")
var easyButton =document.getElementById("easy")
var hardButton = document.getElementById("hard")



// functions

function changeColorAll(){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = pickedColor;
        heading.style.backgroundColor = pickedColor;
    }
};


function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}

function generateRandomColors(num){
    var arr = []
    
    for(var i = 0;i<num;i++){
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        var color = "rgb(" + red +", " + green + ", " + blue +")";
        arr.push(color);
    }
    return arr;
}

function reset1(){
    reset.textContent = "New Colors"
     colors = generateRandomColors(numberOfColors)
     pickedColor = pickColor()
     for(var i =0; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
     }
     heading.style.backgroundColor = "steelblue"
     messageDisplay.textContent = ""
     showPickedColor.textContent = pickedColor

}

// event listeners

easyButton.addEventListener("click",function(){
    numberOfColors = 3;
    reset1();
    for(var i = numberOfColors; i < squares.length;i++){
        squares[i].style.backgroundColor = "#232323";
        squares[i].removeEventListener("click",reset1)
    }
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
})


hardButton.addEventListener("click",function(){
    numberOfColors = 6;
    reset1()
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
})


reset.addEventListener("click",reset1)


showPickedColor.textContent = pickedColor;

for(var i =0; i<squares.length;i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        if(this.style.backgroundColor !== pickedColor){
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
        else{
            messageDisplay.textContent = "Correct!!!";
            reset.textContent = "Play again?"
            changeColorAll();
        }
    });
}
