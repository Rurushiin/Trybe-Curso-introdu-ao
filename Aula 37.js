
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

let readLine = () => inputString[currentLine++];



function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */

var numerosPrimos = [];

for(var i = 1; i <= n ; i++){
    var cont = 0;
    for(var h = 1; h <= n; h++){
        if( i % h === 0){
            cont++;
        }
    }if(cont === 2){
        numerosPrimos.push(i);
    }    
  
}
//não altere as linhas abaixo
  return numerosPrimos;
}

// fim do seu código

let main = () => {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let primes = buscaNumeroPrimos(n);
  
    for (let prime of primes) {
      ws.write(prime + "\n");
    }
    
    ws.end();
}
