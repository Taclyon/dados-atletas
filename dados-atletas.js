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
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        }else{
            return "Sem categoria";
        }
    }
    calculaIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }
    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        notasOrdenadas.pop();
        notasOrdenadas.shift();
        let soma = notasOrdenadas.reduce((acc, val) => acc + val, 0);
        return (soma / notasOrdenadas.length).toFixed(2);
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
}