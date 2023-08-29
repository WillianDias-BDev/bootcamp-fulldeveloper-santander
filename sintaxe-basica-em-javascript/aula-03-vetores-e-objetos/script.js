//o que sao vetores ou arrays

//como declarar um array
// let array = ['string', 1, true];
// console.log(array);

//array pode guardar varios tipos de dados
let array = ['string', 1, true, [array], [array2], [array3], [array4]];
console.log(array);

//manipulando arrays 

//for each
array.forEach(function (item, index) { console.log(item, index) });

//push
array.push('novo item')
console.log(array);

//pop
array.pop()
console.log(array);

//shift
array.shift()
console.log(array);

//unshift
array.unshift('adiciona um item no inicio de um array')
console.log(array);

//indexOf = retorna o indice de um item no array
console.log(array.indexOf(true));

//splice = ele exibe os itens desejados de um array, no exemplo abaixo é exibido os item do indice 0 
//ao indice 3
array.splice(0, 3);

//slice = ele retorna os itens desejados de um array
let novoArray = array.slice(0, 3);
console.log(novoArray);

//manipulando objetos
let objeto = {
    string: "string",
    number: 1,
    Boolean: true,
    array: ["array"],
    objeto: objeto = {
        objetoInterno: "objeto"
    }
}
//formas de desestruturaçao
console.log(objeto.Boolean);

var string = objeto.string;
console.log(string);

var arrayInterno = objeto.array
console.log(arrayInterno);

var { string, boolean, objeto2 } = objeto;
console.log(string, boolean, objeto2);
