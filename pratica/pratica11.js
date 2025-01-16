let nomes = ["Renderson, Isabela, Milena, Orlei, Raila, Benjamim"]
nomes.push("Ronaldo")
console.log(nomes)
let pos = nomes.indexOf("Ronaldo")
if (pos == -1) {
    console.log(`Esse nome não estar na lista`)
} else {
    console.log(`O nome estar na posição ${pos}`)
}

