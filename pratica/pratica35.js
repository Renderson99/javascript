function verificarNumeros(num1, num2) {
    try {
        if (typeof num1 !== "number" || typeof num2 !== "number")
            throw new Error("Para fazer a divisão os valores tem que ser Números")

        if (num2 === 0) {
           throw new Error("O segundo número tem que ser maior do que 0")
        }

        let resultado = num1 / num2
        console.log(resultado)

    } catch (error) {
        console.log("ERRO:", error.message)
    } finally {
        console.log("Calculo Finalizado")
    }
}

verificarNumeros(15,2)
verificarNumeros(24,0)
verificarNumeros("texto",2)
verificarNumeros("texto",0)
