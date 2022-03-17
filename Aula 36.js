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


function imprimaQuadradoAsterisco(n) {
// não altere a linha acima
    
/*
 * Escreva nas linhas a seguir um código que 
 * imprima um quadrado de asteríscos
 * de altura e largura igual ao valor de n
 */
   
var aux = "";

for (var linha = 1; linha <= n; linha++) {
  for (var coluna = 1; coluna <= n; coluna++) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}
// não altere a linha abaixo
}
// fim do seu código

function main() {
    const n = parseInt(readLine().trim(), 10);

    imprimaQuadradoAsterisco(n);
}
