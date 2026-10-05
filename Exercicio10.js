//Exercício 10 - Passando promessa de pai para filho

// PROBLEMA:
// O problema é que o primeiro then não retorna o valor de data.
// Por isso, o segundo then não recebe o valor retornado pelo primeiro then
// e acaba recebendo undefined.


// COMO CORRIGIR:
// Para corrigir o problema, é necessário colocar return data dentro
// do primeiro then. Assim, o valor de data será passado para o segundo then.


// CÓDIGO CORRIGIDO:

let promise = new Promise((resolve, reject) => {
    resolve('deu tudo certo!');
});

promise
    .then((data) => {
        console.log(`resultado positivo: ${data}`);
        return data;
    })
    .then((data) => {
        console.log(`resultado positivo 2: ${data}`);
    })
    .catch((data) => {
        console.log(`resultado negativo: ${data}`);
    });