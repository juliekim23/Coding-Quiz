var correct = 0
var incorrect = 0

//View High Scores
var highscores = document.getElementById("VH")
highscore.addEventListener("click", function (){
    show Q7
})

//Start

var start = document.getElementById("start")
start.addEventListener("click", function() {
    setTimer();
    showQ1();

})

//Questions

var wrong = document.getElementById("incorrect")
wrong.addEventListener("click", function(){
    incorrect++;
    secondsLeft-10;
})


var right = document.getElementById("correct")
right.addEventListener("click", function (){
    correct++;
})

function showQ1(){
    if (start) {
        document.getElementsByClassName("Q1").style.display = flex
    }

}

showQ1()


//Timer
//add if incorrect, secondsLeft-10

var Time = document.getElementById("Timer")
var secondsLeft = 60


function setTimer(){
    var timeleft = setInterval(function(){
        secondsLeft--;
        Time.textContent = secondsLeft
        if (secondsLeft === 0){
            clearInterval(timeleft);
            highscore();
        } 
    }, 1000);
}


//Store Answers
var Correct = 0
var Incorrect = 0

