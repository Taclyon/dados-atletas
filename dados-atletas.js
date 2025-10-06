class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    calculaIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(14);
    }
    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        notasOrdenadas.pop();
        notasOrdenadas.shift();
        let soma = notasOrdenadas.reduce((acc, val) => acc + val, 0);
        return (soma / notasOrdenadas.length).toFixed(8);
    }
    obterNomeAtleta() {
        return this.nome;
    }
    obterIdadeAtleta() {
        return this.idade;
    }
    obterPesoAtleta() {
        return this.peso;
    }
    obterNotasAtleta() {
        return this.notas;
    }
    obtemCategoriaAtleta() {
        return this.calculaCategoria();
    }
    obtemIMCAtleta() {
        return this.calculaIMC();
    }
    obtemMediaValidaAtleta() {
        return this.calculaMediaValida();
    }
    salidaDadosAtleta() {
        return `Nome: ${this.obterNomeAtleta()}
Idade: ${this.obterIdadeAtleta()}
Peso: ${this.obterPesoAtleta()} kg
Altura: ${this.altura} m
Notas: ${this.obterNotasAtleta().join(", ")}
Categoria: ${this.obtemCategoriaAtleta()}
IMC: ${this.obtemIMCAtleta()}
Média Válida: ${this.obtemMediaValidaAtleta()} \n`;
    }
}

const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
const atleta2 = new Atleta("Ana Cristina", 25, 62, 1.62, [9, 8.5, 9.5, 10, 7.5]);
console.log(atleta1.salidaDadosAtleta());
console.log(atleta2.salidaDadosAtleta());