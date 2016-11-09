import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Aluguel } from '../model/aluguel';

import 'rxjs/Rx';

@Injectable()
export class AlugarVeiculoService {

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private alugueisUrl = 'http://localhost:8080/alugueis';

  public alugar(aluguel: Aluguel): Promise<Aluguel[]> {
    let body = JSON.stringify(aluguel);
    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.alugueisUrl, body, options)
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
