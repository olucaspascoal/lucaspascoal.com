import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ProjetoModule } from 'src/app/componentes/projeto/projeto.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    ProjetoModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
