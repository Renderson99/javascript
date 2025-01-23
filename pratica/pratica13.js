let num = document.querySelector("")
let lista = document.querySelector("")
let res = document.querySelector("")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function isLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && isLista(num.value, valores)) {

    } else {
        window.alert("")
    }
}