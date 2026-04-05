let p1 = document.querySelector(".p1")
let changecolor = document.querySelector(".changecolor")

changecolor.addEventListener("click" , ()=>{

   let r = Math.random() * (255 - 0) + 0;
   let g = Math.random() * (255 - 0) + 0;
   let b = Math.random() * (255 - 0) + 0;
    
    p1.style.color = `rgb(${r}, ${g}, ${b})`
})

let p2 = document.querySelector(".p2")
let grassetto = document.querySelector(".grassetto")

grassetto.addEventListener("click" , ()=>{
    p2.classList.toggle("bold")
})

let p3 = document.querySelector(".p3")
let faisparire = document.querySelector(".faisparire")

faisparire.addEventListener("click" , ()=>{
    p3.classList.toggle("ds-none")
})