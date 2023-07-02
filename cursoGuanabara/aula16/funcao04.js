//Calcular fatorial
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    let fat = 1 
    for (let index = n; index > 1; index--) {
          fat *= index  //fatorial x index    
    }
    return fat
}

console.log(fatorial(5))