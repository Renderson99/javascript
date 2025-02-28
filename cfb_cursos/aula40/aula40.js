const caixa = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["html", "css", "Javascript", "php", "React", "mysql"]

cursos.map((el, chave)=> {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el
    caixa.appendChild(novoElemento)
    
})