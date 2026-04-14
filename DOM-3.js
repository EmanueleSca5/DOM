let via = document.querySelector(".via")
let riavvia = document.querySelector(".riavvia")
let pausa = document.querySelector(".pausa")
let riprendi = document.querySelector(".riprendi")
let reset = document.querySelector(".reset")
let input = document.querySelector("#inp")

let numero = Number(prompt("Scegli un numero"))

input.value = numero

valore = input.value
console.log(valore);



   let interval = ""

   let counter = input.value
function createInterval(){
     interval = setInterval(()=>{

        if(counter <= valore && counter > 0){
            counter--
            input.value = counter
        }else{
            input.value = "AUGURII!!!"
            input.style.fontSize = "50px"
            clearInterval(interval)
        }
    }, 1000)
}

via.addEventListener("click", ()=>{
    if(input.value === valore){
        createInterval()
    }
})


riavvia.addEventListener("click", ()=>{
    clearInterval(interval)
            input.style.fontSize = "100px"
    
    input.value = valore
    createInterval()
})

reset.addEventListener("click", ()=>{
    clearInterval(interval)
            input.style.fontSize = "100px"

    input.value = valore
})

pausa.addEventListener("click", ()=>{
    clearInterval(interval)
            input.style.fontSize = "100px"

    input.value 
})

riprendi.addEventListener("click", ()=>{
    clearInterval(interval)

    if(input.value != numero){

        createInterval()
    }
})
