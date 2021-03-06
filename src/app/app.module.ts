import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import "materialize-css";
import {MaterializeDirective} from "angular2-materialize";

import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/service/cliente.service';
import { VeiculoService } from './veiculos/service/veiculo.service';
import { AlugarVeiculoService } from './alugar-veiculos/service/alugar-veiculo.service';
import { routing } from './app.routing';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { AlugarVeiculosComponent } from './alugar-veiculos/alugar-veiculos.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EditarSalvarVeiculoComponent } from './veiculos/editar-salvar-veiculo/editar-salvar-veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    VeiculosComponent,
    AlugarVeiculosComponent,
    NovoClienteComponent,
    EditarClienteComponent,
    EditarSalvarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routing
  ],
  providers: [
    ClienteService,
    VeiculoService,
    AlugarVeiculoService],
  exports: [ MaterializeDirective ],
  bootstrap: [AppComponent]
})
export class AppModule { }
