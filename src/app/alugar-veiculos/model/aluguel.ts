export class Aluguel {

    dataAluguel: Date;
    dataDevolucao: number;
    valorTotal: number;
    kmPecorrido: number;
    idCliente: number;
    idVeiculo: number;

    constructor() {
        this.dataAluguel = new Date(Date.now());
        this.dataDevolucao = this.dataAluguel.setDate(3);
        this.valorTotal = 0;
        this.kmPecorrido = 0;
        this.idCliente = 0;
        this.idVeiculo = 0
    }

    public set setValorTotal(v: number) {
        this.valorTotal = v;
    }

    public get getValorTotal(): number {
        return this.valorTotal;
    }

    public set setKmPecorrido(v: number) {
        this.kmPecorrido = v;
    }

    public get getKmPecorrido(): number {
        return this.kmPecorrido;
    }

    public set setIdCliente(v: number) {
        this.idCliente = v;
    }

    public get getIdCliente(): number {
        return this.idCliente;
    }

    public set setIdVeiculo(v: number) {
        this.idVeiculo = v;
    }

    public get getIdVeiculo(): number {
        return this.idVeiculo;
    }


}
