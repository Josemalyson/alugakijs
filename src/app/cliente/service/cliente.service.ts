import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Cliente } from '../model/cliente';

import 'rxjs/Rx';


@Injectable()
export class ClienteService {

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private clienteUrl = 'http://localhost:8080/clientes';

  getClientes(): Promise<Cliente[]> {
    return this.http.get(this.clienteUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getClienteId(id: number): Promise<Cliente>{
      return this.getClientes()
                 .then(clientes => clientes.find(cliente => cliente.id === id)); 
  }

  salvar(cliente: Cliente): Promise<Cliente> {

    let body = JSON.stringify( cliente );
   
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.clienteUrl, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

    editar(cliente: Cliente): Promise<Cliente> {
    const url = `${this.clienteUrl}/`;
    return this.http
      .put(url, JSON.stringify(cliente), {headers: this.headers})
      .toPromise()
      .then(() => cliente)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
