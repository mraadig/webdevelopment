const selectE1=document.querySelector(".selected");
const selectE2=document.querySelector("p");
const socialE1=document.querySelector(".social-lists");
const listE1=document.querySelectorAll(".social-lists li");

selectE1.addEventListener("click",() =>{
    socialE1.classList.toggle("hide");
    selectE1.classList.toggle("rotate");
});
listE1.forEach((listE1) => {
    listE1.addEventListener("click",()=>{
     selectE2.innerHTML= listE1.innerHTML;
     socialE1.classList.add("hide");
     selectE1.classList.toggle("rotate");
    });
    
});