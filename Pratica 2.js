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
 * Complete a função 'tripleTheChances' abaixo.
 *
 * O retorno da função é uma variável do tipo INTEGER_ARRAY.
 * A função aceita o parâmetro chances do tipo INTEGER_ARRAY.
 */

function tripleTheChances(chances) {
    // Write your code here
var resultado = [];
   for(var i = 0; i < chances.length; i++){
    resultado.push(chances[i]*3);
   }
   return resultado;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const chancesCount = parseInt(readLine().trim(), 10);

    let chances = [];

    for (let i = 0; i < chancesCount; i++) {
        const chancesItem = parseInt(readLine().trim(), 10);
        chances.push(chancesItem);
    }

    const result = tripleTheChances(chances);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
