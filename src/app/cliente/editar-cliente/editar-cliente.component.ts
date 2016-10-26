import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  id: number;
  listaMenssagensDeErro: string[];
  cliente: Cliente;

  constructor(
    private route: ActivatedRoute,
    private clienteServico: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.listaMenssagensDeErro = [];

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
      this.cliente = new Cliente(null, "", "", "");
      this.clienteServico
        .getClienteId(this.id)
        .then(cliente => this.cliente = cliente);
    });

  }

  atulizarCliente(): void {
   
    this.verificarCamposObrigatorios();

    if (this.listaMenssagensDeErro.length <= 0) {
      
      this.clienteServico
        .editar(this.cliente)
        .then(c => this.listarClientes());
    }

  }

  verificarCamposObrigatorios(): void {

    this.listaMenssagensDeErro = [];

    if (this.cliente.nome == null || this.cliente.nome == "") {
      this.listaMenssagensDeErro.push("Campo Nome obrigatório");
    }

    if (this.cliente.email == null || this.cliente.email == "") {
      this.listaMenssagensDeErro.push("Campo EMAIL obrigatório");
    }
  }


  private listarClientes(): void {
    let link = ['/clientes'];
    this.router.navigate(link);
  }




}
