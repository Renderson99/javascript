let numlista = [1,3,6,4,8,0,,5,2,7,10,40]
let soma = numlista
    .filter(num => num % 2 === 0)
    .reduce((soma, num) => soma + num, 0)
console.log(soma)
