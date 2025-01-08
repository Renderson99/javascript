function verificar() {
    var data = new Data()
    var ano = data.getFullyear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        window.alert("tudo ok")
    }
}