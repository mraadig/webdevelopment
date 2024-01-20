const btn=document.querySelector(".button");
const closeicon=document.querySelector(".close-icon");
const trailercontainer=document.querySelector(".trailer-container");
const video=document.querySelector("video");

btn.addEventListener("click",() =>
{
   trailercontainer.classList.remove("active");
});
closeicon.addEventListener("click",() => {
    trailercontainer.classList.add("active");
    video.pause();
    video.currentTime=0;
});