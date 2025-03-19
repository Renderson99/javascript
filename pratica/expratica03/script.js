const obs = [
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

const jsonObs = JSON.stringify(obs)
console.log(jsonObs)

const json = JSON.parse(jsonObs)
console.log(json)

console.log(typeof jsonObs)
console.log(typeof json)

json.map((nome) => {
    console.log(obs.nome)
})