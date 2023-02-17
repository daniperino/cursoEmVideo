//Arquivo gerado através do HTML, pela tag <scrip>

weekDays = ["Domingo", "Segunda-Feira", "Tera-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"]
// array dos dias da semana para não ficar números
function carregar(){
    const msg = document.getElementById('msg') //const pq nunca vai mudar, então não usa let
    const img = document.getElementById('imagem')

    const dataAtual = new Date()
    let hora = dataAtual.getHours()
    let diaSemana = weekDays[dataAtual.getDay()] //coloca o array e dentro das colchetes[] coloca o comando
    //let hora = 13
    msg.innerHTML = `Agora são ${hora} horas - ${diaSemana}`

    console.log(weekDays)

    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background='#c8c5b9'
    }else if (hora < 18){
        //Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background='#fea03c'
    }else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background='#413e49'
    }
}


