let valores = [3, 1, 7, 4, 2 ,9]
valores.sort()
console.log(`${valores}`)

for (let posicao=0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
    
}

//FOR simplificado para array e objetos - FOR(let____ IN ____)

for (let posicao in valores) {
    console.log(`Posição ${posicao} tem valor ${valores[posicao]}`)
}

