import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Cliente } from './model/cliente';
import { ClienteService } from './service/cliente.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  mensagem: string;
  flMensagem: boolean = true;
  clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes()
            .then(clientes => this.clientes = clientes,
            error => this.mensagem = <any>error);

  }

  editarCliente(cliente: Cliente): void {
    let link = ['/editarCliente/' + cliente.id];
    this.router.navigate(link);
  }

  excluirCliente(cliente: Cliente):void {
    this.clienteService.excluir(cliente)
        .then(c => this.adicionarMensagemSucesso())
        .then(c => this.getClientes());
           
  }

  private adicionarMensagemSucesso() : void{
      this.mensagem = "Cliente Excluido com sucesso!"
      this.flMensagem = false;
    }

}
