

var images=["images/dice/Alea_1.png","images/dice/Alea_2.png","images/dice/Alea_3.png","images/dice/Alea_4.png","images/dice/Alea_5.png","images/dice/Alea_6.png"];

var no_of_clicks=0;
document.querySelector(".dice-btn").addEventListener("click",
function()
{
    no_of_clicks++;
    if(no_of_clicks==1)
    {
    var n=Math.floor(Math.random()*6);
    document.querySelector("img").setAttribute("src",images[n]);
    var x;
    if(n!==0)
    {
        x=n*20;
    }
    else
    {
        x=10;
    }                                                    
    document.querySelector("h1").innerHTML="Compatability score: "+x+"%.";
    }
    else{
        alert("Sorry you have clicked more than once 😉")
    }
});              

var home=document.querySelector(".home");
home.addEventListener("click",function()
{
    document.location.href="index.html";
});