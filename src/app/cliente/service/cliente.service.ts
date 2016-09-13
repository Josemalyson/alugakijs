import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';

import { Cliente } from '../model/cliente';

import 'rxjs/Rx'; 


@Injectable()
export class ClienteService {

  constructor(private http: Http) { }

  private clienteUrl = 'http://localhost:8080/clientes';

  getClientes(): Promise<Cliente[]> {
    return this.http.get(this.clienteUrl)
                    .toPromise()
                  .then(this.extractData)
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
