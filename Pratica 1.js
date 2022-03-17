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
 * Complete a função 'calculadoraAdicaoSubtracao' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. numero (número inteiro)
 *  2. outroNumero (número inteiro)
 *  3. operacao (string)
 */

function calculadoraAdicaoSubtracao(numero, outroNumero, operacao) {
    // Escreva seu código aqui

if(operacao === "+"){
    return numero + outroNumero;
}else if(operacao === "-"){
    return numero - outroNumero;
}else{
    return 0;
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numero = parseInt(readLine().trim(), 10);

    const outroNumero = parseInt(readLine().trim(), 10);

    const operacao = readLine();

    const result = calculadoraAdicaoSubtracao(numero, outroNumero, operacao);

    ws.write(result + '\n');

    ws.end();
}
