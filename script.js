function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22

    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}h.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background ='lightyellow'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background ='lightgreen'
    } else {
        //BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background ='black'
    }
}
