


var no_of_clicks=0;
var n=0;

document.querySelector(".random-btn").addEventListener("click",
function()
{
    n++;   
    if(n===1)
    {
    document.querySelector(".content h1").innerHTML="We have a "+(Math.floor(Math.random()*100)+1)+" % of Compatability";
    }
    else{
        alert("We don't have two lifes, So the same applies here 🤣")
    }
});              

var home=document.querySelector(".home");
home.addEventListener("click",function()
{
    document.location.href="index.html";
});