let titolo = document.querySelector(".titolo")
let p = document.querySelector(".p")
let crea = document.querySelector(".crea")
let articolo = document.querySelector(".articolo")


crea.addEventListener("click" , ()=>{
    articolo.innerHTML = "  "
    let textTitolo = titolo.value;
    let textP = p.value;
    let t = document.createElement("h2")
    let par = document.createElement("p")

    t.innerHTML = textTitolo
    articolo.appendChild(t)

    par.innerHTML = textP
    articolo.appendChild(par)

    if(titolo.value === ""){
        alert("Compila correttamente i campi")
    }

    titolo.value = ""
    p.value = ""
})