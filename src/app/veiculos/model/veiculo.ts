export class Veiculo {

    id: number;
    nome: string;
    marca: string;
    cor: string;
    qtdPassageiros: number;


    constructor(id :number, nome :string, marca :string, cor :string, qtdPassageiros :number) {
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.qtdPassageiros = qtdPassageiros;
    }
}

