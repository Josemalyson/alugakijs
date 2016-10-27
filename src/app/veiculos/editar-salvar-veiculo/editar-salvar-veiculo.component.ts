import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Veiculo } from '../model/veiculo';
import { Cor } from '../enums/cor.enum';
import { VeiculoService } from '../service/veiculo.service';

@Component({
  selector: 'app-editar-salvar-veiculo',
  templateUrl: './editar-salvar-veiculo.component.html',
  styleUrls: ['./editar-salvar-veiculo.component.css']
})
export class EditarSalvarVeiculoComponent implements OnInit {

  veiculo :Veiculo;
  cores :String[];

  constructor( 
    private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit() {
    this.veiculo = new Veiculo(null,"","","",0);
    var options = Object.keys(Cor);
    this.cores = options.slice(options.length / 2);
  }

  public salvarVeiculo() : void{
      this.veiculoService
            .salvar(this.veiculo)
            .then(() => this.listarVeiculos());
  }

   private listarVeiculos(): void {
    let link = ['/veiculos'];
    this.router.navigate(link);
  }
}
