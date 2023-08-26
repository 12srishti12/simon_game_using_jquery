var buttonColor=["red","yellow","green","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var start=false;


$(document).on("keypress",function(){
    //This if statement make sure that if a player once pressed a 
    //key then game will start and next sequence won;t be called again if a key be pressed
    if(start===false){
        $('h1').text("Level "+level);
        nextSequence();
    }
   start=true;
});



$(".btn").on("click",function(){
   
   
    var userChosenColor=$(this).attr("id");
    
    playSound(userChosenColor);
    animated(userChosenColor);
    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});








function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColor[randomNumber];
    level+=1;
    $('h1').text("level "+level );
    
    gamePattern.push(randomChosenColor);
    
    var audio =new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
    

    animated(randomChosenColor);
}


function playSound(name){
   
    var audio =new Audio("sounds/"+name+".mp3");
    audio.play();


}

function animated(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed")
    },200);
    
}


 function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            console.log("sucess");
            setTimeout(nextSequence,1000);

    }
}

    else{
        $("h1").text("Game Over ,Press a key to restart");
        playSound("wrong");
        $("body").addClass("wrong");
        setTimeout(function(){
            
            $("body").removeClass("wrong")
        },200);
        startOver();


    }

 }

function startOver(){
   
    level=0;
    gamePattern=[];
    start=false;


}























 // function sounds(color){
//     var audio;
//     switch (color) {
//         case "red":
//             audio=new Audio("sounds/sounds_blue.mp3");
//             audio.play();
//             break;
//         case "yellow":
//             audio=new Audio("sounds/sounds_yellow.mp3");
//             audio.play();
        
//         break;
//         case "green":
//             audio=new Audio("sounds/sounds_green.mp3");
//             audio.play();
//         break;

//         case "blue":
//             audio=new Audio("sounds/sounds_blue.mp3");
//             audio.play();
        
//         break;
    
//         default:
//             break;
//     }
// }



