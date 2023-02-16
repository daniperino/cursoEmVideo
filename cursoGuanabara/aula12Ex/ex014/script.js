//Arquivo gerado através do HTML, pela tag <scrip>

function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var dataAtual = new Date()
    //var hora = dataAtual.getHours()
    var diaSemana = dataAtual.getDay() //pegou o dia da semana mas em número
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas - ${diaSemana}`

    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background='#c8c5b9'
    }else if (hora >=12 && hora < 18){
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background='#fea03c'
    }else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background='#413e49'
    }
}


