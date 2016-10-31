import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente/model/cliente';
import { ClienteService } from '../cliente/service/cliente.service';

@Component({
  selector: 'app-alugar-veiculos',
  templateUrl: './alugar-veiculos.component.html',
  styleUrls: ['./alugar-veiculos.component.css']
})
export class AlugarVeiculosComponent implements OnInit {

  clientes: Cliente[];
  mensagem: string;
  clienteSelecionado: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
     this.clienteSelecionado = new Cliente(0,"","","");
     this.clientes = [];
     this.mensagem = "";
  }

  public getClientesPorNome(): void {
    this.clientes = [];

    if (this.clienteSelecionado.nome != "") {
      this.clienteService
        .getClientesPorNome(this.clienteSelecionado.nome)
        .then(clientes => this.clientes = clientes,
        error => this.mensagem = <any>error);

    }else{
       this.clienteSelecionado = new Cliente(0,"","","");
    }
  }

  public selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado = cliente;
    this.clientes = [];
  }
}
