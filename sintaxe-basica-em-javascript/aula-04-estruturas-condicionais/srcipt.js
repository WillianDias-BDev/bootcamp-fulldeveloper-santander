var jogador1 = 0;
var jogador2 = 0;
placar;

//if ternário
jogador1 !== -1 && jogador2 !== -1 ? console.log('os jogadores são válidos') :
    console.log("jogadores invalidos");

//uso do if
if (jogador1 !== -1) {
    if (jogador1 > 0 && jogador2 === 0) {
        console.log("jogador 1 marcou ponto.");
        placar = jogador1 > jogador2;
        //uso do else if
    } else if (jogador2 > 0 && jogador1 === 0) {
        console.log("jogador 2 marcou ponto.");
        placar = jogador2 > jogador1;
        //uso do else
    } else {
        console.log("ninguém marcou ponto.");
    }
}

//uso do switch/case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break
    case placar = jogador2 > jogador1:
        console.log('jogador 1 ganhou');
        break
    default:
        console.log('ninguem ganhou')
}

let array = ['valor', 'valor2', 'valor3', 'valor4', 'valor5']
let objeto = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
    propriedade4: 'valor4',
    propriedade5: 'valor5'
}

//for executa uma funcao até que ela seja falsa

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}


//for in executa repeticao a partir de uma propriedade
for (i in array) {
    console.log(i);
}

//for in executa repeticao a partir de um objeto
for (i in Object) {
    console.log(i);
}

//for/of executa repeticao a partir de valor
//com array
for (i of array) {
    console.log(i);
}

//for of com objeto
for (i of objeto.propriedade1) {
    console.log(i);
}

//for com while
var a = 0;
while (a < 10) {
    a++
    console.log(a);
}

//for com Do/While
do {
    a++;
    console.log(a);
} while (a < 10)