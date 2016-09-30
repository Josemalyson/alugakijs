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

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente(null,"","","");
  }

  salvar(cliente: Cliente) {
    this.cliente = cliente;
    this.clienteService.salvar(this.cliente);
  }
}
