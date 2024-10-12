const Heroi = require('./heroi');

function gerarIdadeAleatoria() {
    return Math.floor(Math.random() * (100 - 18 + 1)) + 18;
}

const nomes = ["Arthas", "Merlin", "Li", "Kaito", "Elena", "Draco"];
const tipos = ["Guerreiro", "Mago", "Monge", "Ninja"];

const herois = nomes.map(nome => {
    const idade = gerarIdadeAleatoria();
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    return new Heroi(nome, idade, tipo);
});

for (let i = 0; i < herois.length; i++) {
    console.log(herois[i].atacar());
}
