import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { NovoClienteComponent } from './cliente/novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { EditarSalvarVeiculoComponent } from './veiculos/editar-salvar-veiculo/editar-salvar-veiculo.component';
import { AlugarVeiculosComponent } from './alugar-veiculos/alugar-veiculos.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'clientes',
        component: ClienteComponent
    },
    {
        path: 'novoCliente',
        component: NovoClienteComponent
    },
    {
        path: 'editarCliente/:id',
        component: EditarClienteComponent
    },
    {
        path: 'veiculos',
        component: VeiculosComponent
    },
    {
        path: 'alugarVeiculos',
        component: AlugarVeiculosComponent
    },
    {
        path: 'gerenciarVeiculo',
        component: EditarSalvarVeiculoComponent
    }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/