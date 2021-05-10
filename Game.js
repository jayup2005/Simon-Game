var buttonColors = ["red","yellow","blue","green"];
var gamePattern = [];
var userClickPattern = [];

var  level = 0;

var started = false;

document.addEventListener("keypress",function(){

  if(started == false){
       
       document.querySelector('#level-title').innerText = "Level "  + level;
       nextSequence();
       started = true;
       
  }

})

document.querySelectorAll(".btn").forEach(function(btn){

btn.addEventListener("click", function(event){

var userChossenColor = (event.target.getAttribute("id"))

userClickPattern.push(userChossenColor);

playSound(userChossenColor)
animatePress(userChossenColor)
checkAnswer(userClickPattern.length-1)
})
 
})

  
function checkAnswer(position){

if(userClickPattern[position] == gamePattern[position]){
   if(userClickPattern.length == gamePattern.length){

      setTimeout(function(){

         nextSequence();
      },1000)

   }

}
else{

playSound("wrong");
document.querySelector("body").classList.add("game-over")
document.querySelector('#level-title').innerText = "Game Over , Press Any Key To Restart";

setTimeout(function(){


  document.querySelector("body").classList.remove("game-over")



},200)



}






}


function nextSequence(){

userClickPattern = []
level++;
document.querySelector('#level-title').innerText = "Level "  + level;

var randomNumber = Math.floor(Math.random()*4);

var randomChossenColor = buttonColors[randomNumber];

gamePattern.push(randomChossenColor);

$("#" + randomChossenColor ).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChossenColor);



}




function playSound(name){


var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}


function animatePress(currentColor){

  document.querySelector("#"+ currentColor).classList.add("pressed");

  setTimeout(function(){


    document.querySelector("#"+ currentColor).classList.remove("pressed");
    
  },100)
}


function startOver(){

gamePattern = [];
level = 0;
started = false;


}





