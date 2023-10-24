import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { titulo: 'Lucas Pascoal' },
    loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule),
  },
  {
    path: 'sobre',
    data: { titulo: 'Sobre mim' },
    loadChildren: () => import('./paginas/sobre/sobre.module').then(m => m.SobreModule),
  },
  {
    path: 'projetos',
    data: { titulo: 'Projetos' },
    loadChildren: () => import('./paginas/projetos/projetos.module').then(m => m.ProjetosModule),
  },
  {
    path: 'contato',
    data: { titulo: 'Contato' },
    loadChildren: () => import('./paginas/contato/contato.module').then(m => m.ContatoModule),
  },
  {
    path: 'erro',
    data: { titulo: 'Erro' },
    loadChildren: () => import('./paginas/erro/erro.module').then(m => m.ErroModule),
  },
  {
    path: '**',
    redirectTo: 'erro',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
