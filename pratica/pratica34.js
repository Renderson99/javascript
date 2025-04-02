function verificarNomes() {
    try {
        let nome = "tom"
        if (nome != "tom") {
            console.log("O seu nome não é tom")
        } else {
            throw new Error("O nome e Tom, e eu não gosto disso")
        }
    } catch (error) {
        console.log("ERRO no nome: ", error.message)
    } finally {
        console.log("Fim do Programa")
    }
}