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
  aluguel: Aluguel;
  flMensagem: boolean = false;

  constructor(
    private _clienteService: ClienteService,
    private _veiculoService: VeiculoService,
    private _alugarVeiculoService: AlugarVeiculoService
  ) { }

  ngOnInit() {
    this.clienteSelecionado = new Cliente();
    this.clientes = [];

    this.veiculoSelecionado = new Veiculo();
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
      this.clienteSelecionado = new Cliente();
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
      this.veiculoSelecionado = new Veiculo();
    }

  }

  public selecionarVeiculo(veiculo: Veiculo): void {
    this.veiculoSelecionado = veiculo;
    this.veiculos = [];
  }

  public alugar(): void {
    //    this.clienteSelecionado.id, this.veiculoSelecionado.id
    this.aluguel = new Aluguel();
    this.aluguel.setCliente = this.clienteSelecionado;
    this.aluguel.setVeiculo = this.veiculoSelecionado;
    
    this._alugarVeiculoService
        .alugar(this.aluguel)
        .then(aluguel => this.aluguel =  aluguel);
        this.montarMensagem();
  }

  public montarMensagem(): void{
       this.mensagem = "Senhor (a) " + this.aluguel.cliente.nome + " "
                       "Data de devolução: " + this.aluguel.getDataDevolucao + " "
                       "Valor total: R$ " + this.aluguel.getValorTotal + " "
                       "Status: Não pago";

        this.flMensagem = true;
        this.clienteSelecionado = new Cliente();
        this.veiculoSelecionado = new Veiculo();     
        this.aluguel = new Aluguel();  
  }
}
