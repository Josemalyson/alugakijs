import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente/model/cliente';
import { Veiculo } from '../veiculos/model/veiculo';
import { ClienteService } from '../cliente/service/cliente.service';
import { VeiculoService } from '../veiculos/service/veiculo.service';
import { AlugarVeiculoService } from './service/alugar-veiculo.service';

import { Aluguel } from './model/aluguel';

@Component({
  selector: 'app-alugar-veiculos',
  templateUrl: './alugar-veiculos.component.html',
  styleUrls: ['./alugar-veiculos.component.css']
})
export class AlugarVeiculosComponent implements OnInit {

  mensagem: string;
  clientes: Cliente[];
  clienteSelecionado: Cliente;
  veiculos: Veiculo[];
  veiculoSelecionado: Veiculo;

  constructor(
    private _clienteService: ClienteService,
    private _veiculoService: VeiculoService,
    private _alugarVeiculoService: AlugarVeiculoService
  ) { }

  ngOnInit() {
    this.clienteSelecionado = new Cliente(0, "", "", "");
    this.clientes = [];

    this.veiculoSelecionado = new Veiculo(0, "", "", "", 0);
    this.veiculos = [];

    this.mensagem = "";
  }

  public getClientesPorNome(): void {
    this.clientes = [];

    if (this.clienteSelecionado.nome != "") {
      this._clienteService
        .getClientesPorNome(this.clienteSelecionado.nome)
        .then(clientes => this.clientes = clientes,
        error => this.mensagem = <any>error);

    } else {
      this.clienteSelecionado = new Cliente(0, "", "", "");
    }
  }

  public selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    this.clientes = [];
  }


  public getVeiculosPorMaca(): void {
    this.veiculos = [];

    if (this.veiculoSelecionado.marca != "") {

      this._veiculoService.getVeiculosPorMaca(this.veiculoSelecionado.marca)
        .then(veiculos => this.veiculos = veiculos)
        .then(error => this.mensagem = <any>error);

    } else {
      this.veiculoSelecionado = new Veiculo(0, "", "", "", 0);
    }

  }

  public selecionarVeiculo(veiculo: Veiculo): void {
    this.veiculoSelecionado = veiculo;
    this.veiculos = [];
  }

  public alugar(): void {
    //    this.clienteSelecionado.id, this.veiculoSelecionado.id
    var aluguel = new Aluguel();
    aluguel.setIdCliente = this.clienteSelecionado.id;
    aluguel.setIdVeiculo = this.veiculoSelecionado.id;
    aluguel.setValorTotal = this.calcularValorTotal(aluguel);
    this._alugarVeiculoService.alugar(aluguel)
      .then(message => this.mensagem = <any>message);
  }

  private calcularValorTotal(aluguel: Aluguel): number {

    if (aluguel.getKmPecorrido != 0) {
      return aluguel.getKmPecorrido * 100;
    } else {
      return 0;
    }

  }
}
