let palavra = "radar";
let palavraLower = palavra.toLocaleLowerCase(palavra)
let palavraLowerinvertida = palavraLower.split("").reverse().join("")
if (palavraLowerinvertida === palavra) {
    console.log(`A palavra ${palavraLowerinvertida} invertida é ingual a ${palavra} então é palíndromo`)
} else {
    console.log(`A palavra ${palavraLowerinvertida} invertida não é ingual a ${palavra} então não é palíndromo`)
}