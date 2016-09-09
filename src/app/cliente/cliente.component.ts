import { Component, OnInit } from '@angular/core';

import { Cliente } from './model/cliente';
import { ClienteService } from './service/cliente.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  errorMessage: string;
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes()
            .then(clientes => this.clientes = clientes,
            error => this.errorMessage = <any>error);

  }

}
