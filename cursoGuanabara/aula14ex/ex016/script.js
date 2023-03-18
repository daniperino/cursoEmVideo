//Arquivo gerado através do HTML, pela tag <script>

function contar(){
    let formInicio = document.getElementById('numInicio')
    let formFim = document.getElementById('numFim')
    let formPasso = document.getElementById('numPasso')
    let res = document.getElementById('resul')
    if (formInicio.value.length == 0 || formFim.value.length == 0 || formPasso.value.length == 0){
        //alert('[ERRO] Formulário não pode estar vazio, preencha!!!')
        res.innerHTML = 'Impossível contar, preencha o formulário!!!'
   } else {
        res.innerHTML = 'Contando... <br> '
        let i = Number(formInicio.value)
        let f = Number(formFim.value)
        let p = Number(formPasso.value)
        if(p <= 0){
            alert('Passo invalido!!! Considerando passo = 1')
            p = 1
        }
        if (i < f) { //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1F449} ${c} ` // Unicode emoji list
            }
        }else{//contagem decrescente
                for(let c = i; c >= f; c -= p){
                    res.innerHTML += ` \u{1F449} ${c} `
            }

        }
        resul.innerHTML += `\u{274C}`
    }

}