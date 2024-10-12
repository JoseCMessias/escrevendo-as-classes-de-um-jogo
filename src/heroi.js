class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = "magia";
                break;
            case 'guerreiro':
                ataque = "espada";
                break;
            case 'monge':
                ataque = "artes marciais";
                break;
            case 'ninja':
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        return `+-> San ${this.nome} é um ${this.tipo}, tem ${this.idade} idade e atacou usando ${ataque}.`;
    }
}

module.exports = Heroi;
