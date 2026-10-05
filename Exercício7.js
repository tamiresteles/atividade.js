// Exercício 7 - O meu videogame é muito melhor que o seu

class VideoGame {
    constructor(nome, controles, saida, midia) {
        this.nome = nome;
        this.controles = controles;
        this.saida = saida;
        this.midia = midia;
    }
}

class PlayStation extends VideoGame {
    constructor(nome, controles, saida, midia, nEntradasUSB, voltagem, adicionais) {
        super(nome, controles, saida, midia);

        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}
const playstation = new PlayStation(
    'PlayStation 5',
    2,
    'HDMI',
    'Blu-ray',
    3,
    220,
    ['Controle sem fio', 'Headset']
);

console.log(playstation);

console.log(playstation.nome);
console.log(playstation.controles);
console.log(playstation.nEntradasUSB);
console.log(playstation.voltagem);
console.log(playstation.adicionais);