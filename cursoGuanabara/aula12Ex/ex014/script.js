//Arquivo gerado através do HTML, pela tag <scrip>

function carregar (){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var dataAtual = new Date()
    //var hora = dataAtual.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.png'
    }else if (hora >=12 && hora < 18){
        //Boa Tarde!
        img.src = 'tarde.png'
    }else{
        //Boa noite!
        img.src = 'noite.png'
    }
}


