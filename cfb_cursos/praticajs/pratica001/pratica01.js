const caixa = document.querySelector("#caixa")
const bt_c1 = document.querySelector("#c1")

caixa.addEventListener("click", (evento)=>{
    console.log("clicou")
    console.log(evento)
    
})

bt_c1.addEventListener("click", (evento)=>{
    evento.stopPropagation
})