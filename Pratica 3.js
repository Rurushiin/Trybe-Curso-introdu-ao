'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete a função 'vezesLetraAparece' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. frase (string)
 *  2. letra (string)
 */


function vezesLetraAparece(frase, letra) {
   // Escreva seu código aqui
   
var cont = 0;

for (var i = 0; i < frase.length; i++){
    if(frase[i] === letra) {
        cont++ 
    }
}
return cont;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const frase = readLine();

    const letra = readLine();

    const result = vezesLetraAparece(frase, letra);

    ws.write(result + '\n');

    ws.end();
}
