const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".cursos")]

console.log(btn_c[0].getRootNode())
console.log(btn_c[3].ownerDocument)

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)