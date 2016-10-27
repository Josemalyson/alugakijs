import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Veiculo } from './model/veiculo';
import { VeiculoService } from './service/veiculo.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  mensagem: string;
  flMensagem: boolean = true;
  veiculos: Veiculo[];

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getVeiculos();
  }

  getVeiculos() :void{
       this.veiculoService.getVeiculos()
            .then(veiculos => this.veiculos = veiculos,
            error => this.mensagem = <any>error);

  }

}
