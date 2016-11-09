import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Veiculo } from '../model/veiculo';

import 'rxjs/Rx';

@Injectable()
export class VeiculoService {

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private veiculoUrl = 'http://localhost:8080/veiculos';

  getVeiculos(): Promise<Veiculo[]> {
    return this.http.get(this.veiculoUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  getVeiculoId(id: number): Promise<Veiculo> {
    return this.getVeiculos()
      .then(veiculos => veiculos.find(veiculo => veiculo.id === id));
  }


  salvar(veiculo: Veiculo): Promise<Veiculo> {
    let body = JSON.stringify(veiculo);

    let options = new RequestOptions({ headers: this.headers });
    return this.http.post(this.veiculoUrl, body, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);

  }

  editar(veiculo: Veiculo): Promise<Veiculo> {
    const url = `${this.veiculoUrl}/`;
    return this.http
      .put(url, JSON.stringify(veiculo), { headers: this.headers })
      .toPromise()
      .then(() => veiculo)
      .catch(this.handleError);
  }

  excluir(veiculo: Veiculo): Promise<Veiculo> {
    let url = `${this.veiculoUrl}/${veiculo.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getVeiculosPorMaca(marca: string): Promise<Veiculo[]> {
    const url = `${this.veiculoUrl}/marca/${marca}`;
    return this.http.get(url)
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
