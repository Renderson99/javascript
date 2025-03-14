const num = [-1,3,5,-3,6,-9,1]
console.log(`Lista principal: ${num}`)

const numero = num.filter(num => num > 0 && num < 7)
console.log(`Usando o filter para filtrar (pega) todos os números maior que 0 é menor que 7 da lista principal: ${numero}`)

const soma = numero.map(numero => numero + 5)
console.log(`Usando o map para adcionar mais 5 em cada número da lista: ${soma}`)

const somaTudo = soma.reduce((acc,soma) => acc + soma,0)
console.log(`Usando o reduce para soma tudo da lista: ${somaTudo}`)
