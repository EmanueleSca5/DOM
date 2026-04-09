// questo è il wrapper dei contatti
let contactWrapper = document.querySelector("#contactWrapper")

let inputNome = document.querySelector(".inputNome")
let inputNumero = document.querySelector(".inputNumero")
let inputNomeEx = document.querySelector(".inputNomeEx")
let inputNomeMod = document.querySelector(".inputNomeMod")
let inputNumeroMod = document.querySelector(".inputNumeroMod")
// bottoni

let show_contacts = document.querySelector("#show_contacts")

let add = document.querySelector(".add")

let edit = document.querySelector(".edit")


let card = document.createElement("div")
            card.classList.add("card-cst", "px-3")

const rubrica = {

    contact_list : [
        {contact_name : "ema", phone_number : 3333333333},
        {contact_name : "luca", phone_number : 3444444444},
        {contact_name : "lucia", phone_number : 3555555555},

    ],
            // PER COMPILARE I CAMPI CORRETTAMENTE HO IMPOSTATO L OBBLIGO DI INSERIRE ALMENO 10 CIFRE
    add_contacts : function(){
        add.addEventListener("click", ()=>{
            let contatto = {contact_name : inputNome.value , phone_number : inputNumero.value}
            if(inputNome.value != "" && inputNumero.value.length == 10){
                this.contact_list.push(contatto)
            }else{
                alert("Inserisci correttamente i campi richiesti")
            }
             if(check == true){
                show_contacts.innerHTML = "Nascondi contatti"
                contactWrapper.classList.remove("d-none")
                check = false
            }else{
                contactWrapper.classList.add("d-none")
                show_contacts.innerHTML = "Mostra contatti"
                check = true
            }
                inputNome.value = ""
            inputNumero.value = ""

            this.show_contacts()

        })

    },

    edit_contact : function(){
        edit.addEventListener("click" , ()=>{
            if(inputNomeEx.value != ""){
                let index = this.contact_list.findIndex(contatto => contatto.contact_name == inputNomeEx.value)
                if(inputNomeMod.value != "" && inputNumeroMod.value.length == 10 && index >= 0){

                    this.contact_list[index].contact_name = inputNomeMod.value
                    this.contact_list[index].phone_number = inputNumeroMod.value
                }else{
                    alert("Compila correttamente i campi \n ricorda che devi inserire un contatto esistente e il numero deve contenere 10 cifre")
                }

            }else{
                    alert("Compila correttamente i campi \n ricorda che devi inserire un contatto esistente e il numero deve contenere 10 cifre")
                }

                inputNomeEx.value = ""
                inputNomeMod.value = ""
                inputNumeroMod.value = ""
                this.show_contacts()
        })
    },

    show_contacts : function(){
        contactWrapper.innerHTML = ""
        this.contact_list.forEach((contatto)=>{
            let card = document.createElement("div")
            card.classList.add("card-cst", "px-3")
            let nome = document.createElement("p")
            nome.classList.add("mb-0" , "text-light")
            let numero = document.createElement("p")
            numero.classList.add("mb-0" , "text-light")

            let icons = document.createElement("i")
            icons.classList.add("icon", "fa-solid" , "fa-trash-can" , "fa-2x" , "icon")

            nome.innerHTML = contatto.contact_name
            numero.innerHTML = contatto.phone_number
           


                contactWrapper.appendChild(card)
                card.appendChild(nome)
                card.appendChild(numero)
                card.appendChild(icons)
        
                
            })
            let icon = document.querySelectorAll(".icon")
    
        icon.forEach((icona, i)=>{
            icona.addEventListener("click" , ()=>{
                rubrica.contact_list.splice(i, 1)
                rubrica.show_contacts()
            })
        })
        },
        
   
};

 
        


rubrica.add_contacts()
rubrica.edit_contact()
rubrica.show_contacts()
console.log(rubrica.contact_list);

let check = true
        show_contacts.addEventListener("click" , ()=>{
            if(check == true){
                show_contacts.innerHTML = "Nascondi contatti"
                contactWrapper.classList.remove("d-none")
                check = false
            }else{
                contactWrapper.classList.add("d-none")
                show_contacts.innerHTML = "Mostra contatti"
                check = true
            }
        } )

     
