
// page redirection

var dice_var=document.querySelector(".dice-html");
dice_var.addEventListener("click",function()
{
    document.location.href = "dice.html";
});

var random_var=document.querySelector(".random-html");
random_var.addEventListener("click",function()
{
    document.location.href="random.html";
});

var random_var=document.querySelector(".real-html");
random_var.addEventListener("click",function()
{
    document.location.href="real.html";
});


// Audio section 

var message=document.querySelectorAll("#Sweet-Message button")[0];
var dummy=document.querySelectorAll("#Sweet-Message button")[1];
var final=document.querySelectorAll("#Sweet-Message button")[2];

var myaudio=new Audio("sounds/Audio file.mp3");
var otheraudio=new Audio("sounds/other-audio.mp3");
var finalaudio=new Audio("sounds/final-audio.mp3");

var n=0;

message.addEventListener("click",function()
{
    myaudio.play();
    otheraudio.pause();
    finalaudio.pause();
    message.classList.add("playing-audio");
    
    if(n%2===1)
    {
        myaudio.currentTime=0;        
    }
        setTimeout(function(){
                message.classList.remove("playing-audio");
                },200);
                n++;
});

var x=0;

dummy.addEventListener("click",function()
{
    
        otheraudio.play();
        myaudio.pause();
        finalaudio.pause();
        dummy.classList.add("playing-audio");
        if(x%2===1)
        {
            otheraudio.currentTime=0;        
        }

        setTimeout(function(){
                dummy.classList.remove("playing-audio");
                },200);
                x++;
});


var i=0;

final.addEventListener("click",function()
{
    finalaudio.play();
    otheraudio.pause();
    myaudio.pause();
    final.classList.add("playing-audio");
    
    if(n%2===1)
    {
        finalaudio.currentTime=0;        
    }
        setTimeout(function(){
                message.classList.remove("playing-audio");
                },200);
                i++;
});


document.querySelector(".stop-audio").addEventListener("click",function()
{
    myaudio.pause();
    otheraudio.pause();
    finalaudio.pause();
});