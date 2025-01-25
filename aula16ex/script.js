let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
}
function isLista (n, l) {
    if (l.indexof(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement("option")
       item.texte = `Valor ${num.valores} adicionado.`
       lista.appendChild(item)
       res.innerHTML = ""
    }else {
       window.alert("Valor inválido ou já encontrado na lista.") 
    }
    num.value = ""
    num.focus()
}
function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let tot = valores.length
        let maior = [0]
        let menor = [0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p> Ao todo, temos ${tot} número cadastrados.</p> `
        res.innerHTML += `<p>Omaior valor digitado foi ${maior}</p>`
        res.innerHTML += `O menor valor digitado foi ${menor}`
        res.innerHTML += `Somando todos os valores, temos ${soma}`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }
}