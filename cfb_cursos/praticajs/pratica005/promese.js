const numero = document.getElementById("numero")

let promesa = new Promise((resolvido,rejeitado) => {
    let resultado = true
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

numero.innerHTML = "Processando..."