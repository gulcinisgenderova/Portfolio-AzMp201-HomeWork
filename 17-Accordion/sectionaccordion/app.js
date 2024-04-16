
const faq=document.querySelectorAll(".faq");
faq.forEach((element)=>{
    element.addEventListener("click",function(){
        element.classList.toggle("active")
    })
})
