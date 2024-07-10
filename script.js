let nomeAluno = prompt('Insira o nome do(a) aluno(a)');

let nota1 = parseFloat(prompt(`Insira a nota 1 de ${nomeAluno}`));
let nota2 = parseFloat(prompt(`Insira a nota 2 de ${nomeAluno}`));
let nota3 = parseFloat(prompt(`Insira a nota 3 de ${nomeAluno}`));

let peso1 = parseFloat(prompt(`Insira o peso da nota 1 de ${nomeAluno}`));
let peso2 = parseFloat(prompt(`Insira o peso da nota 2 de ${nomeAluno}`));
let peso3 = parseFloat(prompt(`Insira o peso da nota 3 de ${nomeAluno}`));

let produto1 = nota1 * peso1;
let produto2 = nota2 * peso2;
let produto3 = nota3 * peso3;

let somaProdutos = produto1 + produto2 + produto3;
let somaPesos = peso1 + peso2 + peso3;

let mediaPonderada = somaProdutos / somaPesos;

console.log(`A média ponderada de ${nomeAluno} é ${mediaPonderada.toFixed(2)}`);
