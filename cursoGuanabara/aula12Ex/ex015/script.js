//Arquivo gerado através do HTML, pela tag <script>

function verificar() {
    const img = document.getElementById('imagem')

    const data = new Date()
    let ano = data.getFullYear() //pega o ano atual com 4 dígitos
    let formAno = document.getElementById("txtano")
    let resul = document.querySelector("div#resul")
    if (formAno.value.length == 0 || formAno.value > ano){
        alert("[ERRO] Verifique os dados!")
    }else{
        let formsex = document.getElementsByName("radsex")
        let idade = ano - Number(formAno.value)
        let genero = '' //inicia vazia e dentro do if coloca o conteúdo
        if (formsex[0].checked){ //ponto checked pois é o radio button que está selecionado
            genero = "homem" // aqui coloca o genero desse if
            if (idade >=0 && idade <=1){
                //bebe
                img.src = 'bebeHomem.png'
            }else if (idade <=12){
                //criança
                img.src = 'criancaHomem.png'
            }else if (idade <=21){
                //adolescente
                img.src = 'adolescenteHomem.png'
            }else if (idade <=50){
                //adulto
                img.src = 'adultoHomem.png'
            }else{
                //idoso
                img.src = 'idosoHomem.png'
            }
        }else if(formsex[1].checked){
            genero = "mulher"
            if (idade >=0 && idade <=1){
                //bebe
                img.src = 'bebemulher.png'
            }else if (idade <=12){
                //criança
                img.src = 'criancaMulher.png'
            }else if (idade <=21){
                //adolescente
                img.src = 'adolescenteMulher.png'
            }else if (idade <=55){
                //adulto
                img.src = 'adultoMulher.png'
            }else{
                //idoso
                img.src = 'idosoMulher.png'
            }
        }
        resul.innerHTML = `Detectado ${genero} de ${idade} anos`
    }
}