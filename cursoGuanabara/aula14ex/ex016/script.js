//Arquivo gerado através do HTML, pela tag <script>

function contar(){
    let formInicio = document.getElementById('numInicio')
    let formFim = document.getElementById('numFim')
    let formPasso = document.getElementById('numPasso')
    let resul = document.getElementById('preparar')
    if (formInicio.value.length == '' || formFim.value.length == '' || formPasso.value.length == ''){
        alert('[ERRO] Formulário não pode estar vazio, preencha!!!')
   }else{
        resul.innerHTML = 'Contando...'
        let i = Number(formInicio.value)
        let f = Number(formFim.value)
        let p = Number(formPasso.value)

        for(let c = i; c <= f; +=c){
            resul.innerHTML = `${c}`
        }

    }




}