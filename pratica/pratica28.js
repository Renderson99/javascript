let numlista = [1,4,6,8,3,2,9,5,7]
soma = numlista
    .filter(num => num % 2 === 0)
    .reduce((soma, num) => soma + num)
console.log(soma)
