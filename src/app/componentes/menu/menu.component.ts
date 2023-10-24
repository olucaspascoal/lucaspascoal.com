import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public itemAtivo: number = 0;
  public anoAtual = new Date().getFullYear();

  public rotas = [
    {rota: '',          nome: 'Início'  },
    {rota: '/sobre',    nome: 'Sobre'   },
    {rota: '/projetos', nome: 'Projetos'},
    {rota: '/contato',  nome: 'Contato' },
  ]

  mudar(numero: number){
    this.itemAtivo = numero;
  }
}
