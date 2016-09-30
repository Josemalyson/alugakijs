import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  cliente: Cliente;
  errorMessage: string;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente(null, "", "", "");
    this.errorMessage = "";
  }

  salvar(cliente: Cliente) {

    if (cliente.nome == null || cliente.nome == "") {
      this.errorMessage = "Campo Nome Obrigatorios"
    }

    if (cliente.cpf == null || cliente.cpf == "") {
      this.errorMessage.concat(" </ br> Campo CPF Obrigatorios");
    }

    if (cliente.email == null || cliente.email == "") {
      this.errorMessage.concat(" </ br> Campo EMAIL Obrigatorios");
    }

    else {
      this.cliente = cliente;
      this.clienteService
        .salvar(this.cliente)
        .then(error => this.errorMessage = <any>error);
    }
  }


}
