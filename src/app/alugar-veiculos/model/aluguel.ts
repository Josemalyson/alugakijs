import { Cliente } from '../../cliente/model/cliente';
import { Veiculo } from '../../veiculos/model/veiculo';

export class Aluguel {

    dataAluguel: string;
    dataDevolucao: string;
    valorTotal: number;
    kmPecorrido: number;
    cliente: Cliente;
    veiculo: Veiculo;

    constructor() {
        this.dataAluguel = null;
        this.dataDevolucao = null;
        this.valorTotal = 0;
        this.kmPecorrido = 0;
        this.cliente = new Cliente;
        this.veiculo = new Veiculo;
    }

    public set setDataAluguel(dataAluguel: string) {
        this.dataAluguel = dataAluguel;
    }

    public get getDataAluguel(): string {
        return this.dataAluguel;
    }

    public set getDataDevolucao(dataDevolucao: string) {
        this.dataDevolucao = dataDevolucao;
    }

    public get setDataDevolucao(): string {
        return this.dataDevolucao;
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

    public set setCliente(cliente: Cliente) {
        this.cliente = cliente;
    }

    public get getIdCliente(): Cliente {
        return this.cliente;
    }

    public set setVeiculo(veiculo: Veiculo) {
        this.veiculo = veiculo;
    }

    public get getVeiculo(): Veiculo {
        return this.veiculo;
    }


}
