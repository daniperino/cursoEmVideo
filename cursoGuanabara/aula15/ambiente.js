//Arrays - Vetores []

let num = [1, 3, 2]
num [3] = 5 //acrescenta o 10 na posição 3
num.sort() // coloca em ordem crescente - em ordem - como o push está embaixo, o 4 não fica na ordem
num.push(4) // .push acrescenta na última posição o valor do ()


console.log(`Nosso vetor é ${num}`)
console.log(`Nosso array tem o tamanho de ${num.length} posições`) // para saber o comprimento - tamanho

let pos = num.indexOf(5) // para mostrar a posição que está o array
if (pos == -1) {
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posição ${pos}`)
}
