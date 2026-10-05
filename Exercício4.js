// Exercício 4 - A união faz a força

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

// Código original usando concat:
// const timeCompleto = equipeMarketing.concat(equipeComercial);

// Resposta usando o operador Spread:
const timeCompleto = [...equipeMarketing, ...equipeComercial];

console.log(timeCompleto);

// A função abaixo estava no enunciado, mas não foi definida:
// realizaBrainstorm(timeCompleto);