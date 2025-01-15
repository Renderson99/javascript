let num = [1,3,7,4,5]
num[5] = 9
num.push(8)
num.sort()
console.log(num)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}