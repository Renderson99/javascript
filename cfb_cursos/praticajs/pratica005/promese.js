const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click",(evet) =>{
    numero.innerHTML = "Processando..."
    promessa()
})

const promessa = ()=>{
   let promesa = new Promise((resolvido,rejeitado) => {
    let resultado = false
    let tempo = 1000
    setTimeout(()=>{
        if (resultado) {
            resolvido("Deu certo")
        } else {
            rejeitado("Deu errado")
        }
    },tempo)
    })

    promesa.then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })

    promesa.catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    }) 
}

numero.innerHTML = "Esperando..."

