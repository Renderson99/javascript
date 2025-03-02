const filtroMaior18 = (valor) => {
    if (valor >= 18)
        return valor
}

const idades = [20,58,19,45,63,85,75,29,51,15,11,10,5]
const maior18 = idades.filter((val,ind,arr) => {
    if (val >= 18) 
        return val
})

const menor18 = idades.filter((val,ind,arr) => {
    if (val < 18)
        return val
})

console.log({filtroMaior18})
console.log(maior18)
console.log(menor18)
