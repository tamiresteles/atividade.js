// Exercício 5 - Pegando a propriedade na lata

// Código original:
// const email = usuario.email;
// const nome = usuario.nome;
// const idade = usuario.idade;

// Criando um objeto para testar
const usuario = {
    email: 'usuario@email.com',
    nome: 'Maria',
    idade: 25
};

// Resposta usando desestruturamento
const { email, nome, idade } = usuario;

console.log(email);
console.log(nome);
console.log(idade);