import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/service/cliente.service';
import { routing } from './app.routing';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { AlugarVeiculosComponent } from './alugar-veiculos/alugar-veiculos.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent, VeiculosComponent, AlugarVeiculosComponent, NovoClienteComponent, EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
