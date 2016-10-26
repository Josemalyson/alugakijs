import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';


@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  cliente: Cliente;
  listaMenssagensDeErro: string[];

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.cliente = new Cliente(null, "", "", "");
    this.listaMenssagensDeErro = [];
  }

  salvar(cliente: Cliente) {

    this.verificarCamposObrigatorios();

    if (this.listaMenssagensDeErro.length <= 0) {
      this.cliente = cliente;
      this.clienteService
          .salvar(this.cliente)
          .then(c => this.listarClientes());
      // VERIFICAR QUANDO DER ERRO NO BACKEND NAO LISTAR E APRESENTAR MENSSAGEM DE ERRO.
      
    }

  }

  verificarCamposObrigatorios(): void {

    this.listaMenssagensDeErro = [];

    if (this.cliente.nome == null || this.cliente.nome == "") {
      this.listaMenssagensDeErro.push("Campo Nome obrigatório");
    }

    if (this.cliente.cpf == null || this.cliente.cpf == "") {
      this.listaMenssagensDeErro.push("Campo CPF obrigatório");
    }

    if (this.cliente.email == null || this.cliente.email == "") {
      this.listaMenssagensDeErro.push("Campo EMAIL obrigatório");
    }
  }

  listarClientes(): void {
    let link = ['/clientes'];
    this.router.navigate(link);
  }

}
