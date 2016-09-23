import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
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
        path: 'veiculos',
        component: VeiculosComponent
    }
    ,
    {
        path: 'alugarVeiculos',
        component: AlugarVeiculosComponent
    }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/