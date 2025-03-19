const pessoas = [

    {
        nome : "Isabela",
        idade : 16,
        hobbys : ["foto", "viajar"]
    },

    {
        nome : "Renderson",
        idade : 17,
        hobbys : ["tecnologia", "jogos", "matématica", "Astronomia", "física"]
    }

]

const string = JSON.stringify(pessoas)
console.log(string)

const objeto = JSON.parse(string)
console.log(objeto)

console.log(typeof string )
console.log(typeof objeto)