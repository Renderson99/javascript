function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    //var data = new Date()
    var hora = 22
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/imagem-manha1.png"
    }else if (hora >= 12 && hora <18) {
        img.src = "imagens/imagem-tarde.png"
    } else {
        img.src = "imagens/imagem-noite.png"
    }
}