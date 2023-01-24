//para pegar a hora atual
//var agora = new Date() //cria uma nova variável new Date()
//var hora = agora.getHours() // dai pega a variavel agora.getHours()
var hora = 3
console.log(`Agora são exatamente ${hora} horas.`)
if(hora<6){
    console.log('Boa madrugada!')
}else if(hora<12){
    console.log('Bom dia!')
}else if (hora<18){
    console.log('Boa tarde!')
}else
    console.log('Boa noite!')

