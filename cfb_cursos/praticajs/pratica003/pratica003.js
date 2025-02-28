const corFundo = document.querySelector("body")
if (corFundo) {
    corFundo.style.backgroundColor = "#333"

    const titulo = document.createElement("h1")
    titulo.innerHTML = "pratica 003 de js: createElement"
    titulo.style.color = "white"
    corFundo.appendChild(titulo)

    const principal = document.querySelector("main")
    if (principal) {
        principal.style.backgroundColor = "green"
        principal.style.color = "white"
        principal.style.height = "400px"
        principal.style.width = "400px"
        principal.style.borderRadius = "20px"
        principal.style.textAlign = "center"
        principal.style.justifyItems = "center"
        principal.style.display = "flex"
        principal.innerHTML = "principal"

        const div = document.createElement("div")
        div.style.backgroundColor = "blue"
        div.style.color = "white"
        div.style.height = "200px"
        div.style.width = "200px"
        div.style.borderRadius = "10px"
        div.style.justifyContent = "center"
        div.style.alignContent = "center"
        div.innerHTML = "Conteúdo da div"
        principal.appendChild(div)
    } else {
        console.error("Elemento main não encontrado no HTML")
    }
} else {
    console.error("Body não encontrado")
}