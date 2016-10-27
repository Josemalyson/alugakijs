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
  erros :String[];
  flMensagem :boolean = true;

  constructor( 
    private veiculoService: VeiculoService,
    private router: Router) { }

  ngOnInit() {
    this.veiculo = new Veiculo(null,"","","",0);
    var options = Object.keys(Cor);
    this.cores = options.slice(options.length / 2);
  }

  public salvarVeiculo() : void{
      
      this.verificarCamposObrigatorios();
      
      if ( this.erros.length <= 0) {
        
        this.veiculoService
            .salvar(this.veiculo)
            .then(() => this.listarVeiculos());
      }else{
        this.flMensagem = false;
      }

      
  }

  private verificarCamposObrigatorios() :void{
      this.erros = [];
      
      if (this.veiculo.cor == null || this.veiculo.cor == "") {
        this.erros.push("Campo COR obrigatório.");
      }
      
      if (this.veiculo.marca == null || this.veiculo.marca == "") {
        this.erros.push("Campo MARCA obrigatório.");
      }

      if (this.veiculo.nome == null || this.veiculo.nome == "") {
        this.erros.push("Campo NOME obrigatório.");
      }

      if (this.veiculo.qtdPassageiros <= 0) {
        this.erros.push("Campo QUANTIDADE obrigatório.");
      }
  }

   private listarVeiculos(): void {
    let link = ['/veiculos'];
    this.router.navigate(link);
  }
}
