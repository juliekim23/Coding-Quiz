var correctScore = 0
var incorrectScore = 0
var Time = document.getElementById("Timer")
var secondsLeft = 60


var wrong = document.querySelectorAll('#incorrect');
wrong.addEventListener('click', function wrongmessage(){
    var wrongmessage = document.getElementById("wrongmessage");
    wrong.setAttribute (
        "display: flex"
    )
}
)

var right = document.querySelectorAll('#correct')
right.addEventListener('click', function rightmessage(){
    var rightmessage = document.getElementById('rightmessage');
    rightmessage.style.display = flex;
})


// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

//Start


//Timer

function setTimer(){
    var timerInterval = setInterval(function(){
        Time.textContent = 'Time: ' + secondsLeft;
        secondsLeft--;
        if (secondsLeft === 0){
            clearInterval(timerInterval);
            highscore();
            localStorage.setItem("score", Score)

        } 
    },1000)
}

var start = document.getElementById("start")
start.addEventListener("click", function() {
    setTimer()
        var timerInterval = setInterval(function(){
            Time.textContent = 'Time: ' + secondsLeft;
            secondsLeft--;
            if (secondsLeft === 0){
                clearInterval(timerInterval);
                highscore();
                localStorage.setItem("score", Score);
    }},1000)})
    
showQ1();


    var Q1 = document.getElementById("Q1")
    Q1.style.display = flex;
    
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


showQ1()

showHS()



//View High Scores
var vhighscores = document.getElementById("VH")
vhighscores.addEventListener("click", function (){

    var HS = document.getElementById("Highscore")
    function showHS (){
        HS.style.display = "flex";}

})

var finalScore = document.querySelector("#finalScore");


finalScore.textContent = [correctScore - incorrectScore];
finalScore.textContent = Score

//Add Initials and score
function highscore (){

}
