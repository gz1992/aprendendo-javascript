// Declarando variáveis:
let x = 0;
var y = 'hello world';
const z = true;

// Funcionamento array
let meu_array = [10, y, 'option'];
// acessando posições do array
meu_array[1] // retorna 'hello world'

// Funcionamento objetos
let pessoa = { nome:'João Goulart', idade:55 };
pessoa['nome'] // retorna 'João Goulart'
pessoa.nome // retorna 'João Goulart'
var chave = 'nome';
pessoa[chave] // retorna 'João Goulart'

/* ************************************************************************************ */
// Estruturas condicionais:
if (x > 0) {
    console.log('X é maior que zero');
}
else {
    console.log('X não é maior que zero');
}

// TODO: switch, while e for usando as variaveis de cima
/* ************************************************************************************ */
//Funções
function quadrado(a) {
    return a * a;
}
quadrado(10) // retorna 100
// Função anônima
quadradoFuncaoAnonimo = (a) => {
    return a * a;
}
quadradoFuncaoAnonimo(20) // retorna 400

/* ************************************************************************************ */
//Acessando elementos do DOM

//TODO: acessar o elemento por id tanto via jquery quanto via javascript vanila

/* ************************************************************************************ */
// PERGUNTAS:
// 1- Qual a diferença de carregar o conteúdo estaticamente e dinamicamente?
// 2- Quando devo utilizar array e quando devo utilizar objeto?
