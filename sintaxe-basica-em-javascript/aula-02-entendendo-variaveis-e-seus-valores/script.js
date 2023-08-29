//tipos primitivos
//o metodo typeof exibe o tipo da variavel

//um boolean retorna veridadeiro ou falso
var verdadeiroOuFalso = false;
console.log(typeof (verdadeiroOuFalso));

//tipo number
var nummeroQualquer = 1;
console.log(typeof (nummeroQualquer));

//tipo string
var nome = "Willian";
console.log(typeof (nome));

//var = escopo global e local, pode ter seu valor alterado, 
//se não tiver um valor inicial será tratada como null;
var variavel = "Willian"
variavel = "David"
console.log(variavel);

//escopo local de bloco, somente leitura, 
//o valor inicial é obrigatório e não pode ser alterado.
const constante = "Willian"
constante = "David"
console.log(constante);

//quando a variável é declarada fora de qualquer bloco,
// sua visibilidade fica disponível em todo o código.
var escopoGlobal = 'global'
console.log(escopoGlobal);

//quando a variável é declarada dentro de um bloco sua
// visibilidade pode ficar disponivel ou não.
function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal()

//atribuicao
const atribuicao = "Willian"

//comparacao 
const comparacao = 0 == "0"

//comapracao indentica
const comapracaoIdentica = 0 === "0"

//adição
const adicao = 1 + 1
console.log(adicao);

//subtracao
const subtracao = 2 - 3
console.log(subtracao);

//multiplicação
const multiplicacao = 2 * 3
console.log(multiplicacao);

//divisao real
const divisaoReal = 12 / 6
console.log(divisaoReal);

//resto da divisao
const restoDaDivisao = 5 % 2
console.log(restoDaDivisao);

//potenciação
const potenciacao = 2 ** 20
console.log(potenciacao);

//maior que 
const maior = 5 > 2
console.log(maior);

//menor que
const menor = 5 < 2
console.log(menor);

//maior ou igual
const maiorIgual = 5 >= 2
console.log(maiorIgual);

//menor ou igual
const menorIgual = 5 <= 2
console.log(menorIgual);

//operadores logico
var e = true && false
console.log(e);

var ou = true || false
console.log(ou);

var nao = !true
console.log(nao);




