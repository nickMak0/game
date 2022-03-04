var correctanswer;
var play=false;
var score;
var action;
var timeremaing;
//click button strat and reset 
document.getElementById("startreset").onclick=
function(){
    //if playing
    if(play==true){
        location.reload();//reload page
    }
    else{
        // set the score is zero
        score=0;
        document.getElementById("scorevalue").innerHTML=score;
        // show countdonw box
        show("time");
        timeremaing=60;
        document.getElementById("remainingvalue").innerHTML=timeremaing;

        //hide game over box
        hide("gameover"); 
        //chnge button to reset
        document.getElementById("startreset").innerHTML="Reset Game";
        //start countdown
        startcountdown();
        //generet  a new q&a
        generateqa();
    }
}
//clicking on an answer box
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        //check if we are playing
        if(playing=true)
        if(this.innerHTML==correctanswer){
            //correct answer
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            //hide wronge box show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            //generate qa
            generateqa();
    
        }
        else{
            //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000)
        }
    }
}
//function
//start counter
function startcountdown() {
    action=setInterval(function(){
        timeremaing-=1;
        document.getElementById("remainingvalue").innerHTML=timeremaing;
        if(timeremaing==0){
            //game over
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML="<p> Game over!</p><p> Your score is " + score+"</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            play=false;
            document.getElementById("startreset").innerHTML="Start Game";
        }
    },1000);
}
//stop counter
function stopcountdown(){
    clearInterval(action);
}
//hide element
function hide(id){
    document.getElementById(id).style.display="none";
}
//show element
function show(id)
{
    document.getElementById(id).style.display="block";
}
//generate quetion and multiple answer
function generateqa(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctposition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctposition).innerHTML=correctanswer;   //fill box with correct answer
    //fill with wrong anwser
    var answers=[correctanswer]
    for(i=1;i<5;i++){
        if(i !== correctposition){
            var wronganswer;
            do{
                wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                document.getElementById("box"+i).innerHTML=wronganswer;}
        while(answers.indexOf(wronganswer)>-1)
        answers.push(wronganswer);
            }
    }
}