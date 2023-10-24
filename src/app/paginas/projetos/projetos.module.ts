import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import { ProjetoModule } from 'src/app/componentes/projeto/projeto.module';


@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    ProjetoModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
