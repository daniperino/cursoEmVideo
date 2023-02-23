//Arquivo gerado através do HTML, pela tag <scrip>

weekDays = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
// array dos dias da semana para não ficar números
function carregar(){
    const msg = document.getElementById('msg') //const pq nunca vai mudar, então não usa let
    const image = document.getElementById('imagem')
    const mdd = document.getElementById('mensagemDoDia')

    const dataAtual = new Date()
    //let hora = dataAtual.getHours()
    let diaSemana = weekDays[dataAtual.getDay()] //coloca o array e dentro das colchetes[] coloca o comando
    let hora = 8
    msg.innerHTML = `Agora são ${hora} horas - ${diaSemana}`


    if (hora >= 0 && hora < 12){
            mdd.innerHTML = ' Bom dia!'
            image.src = 'manha.png'
        document.body.style.background='#c8c5b9'
    }else if (hora < 18){
        //Boa Tarde!
        image.src = 'tarde.png'
        document.body.style.background='#fea03c'
    }else{
        //Boa noite!
        image.src = 'noite.png'
        document.body.style.background='#413e49'
    }
}


