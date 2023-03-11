var home=document.querySelector(".home");
home.addEventListener("click",function()
{
    document.location.href="index.html";
});

document.querySelector(".real-btn").addEventListener("click",function()
{
    document.querySelector(".add-bg").classList.add("bg");
    document.querySelector(".content").style.visibility="hidden";
});