//Arquivo gerado através do HTML, pela tag <script>

function tabuada(){
    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selTab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!') 
    }else{
        let n = Number(num.value) //converter os valores
        tab.innerText = ''
        for(let c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        
        /* OU usando o while
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }*/
        
    }
        
        
    
}
