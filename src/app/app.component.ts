import { Component } from '@angular/core';
import { filter, map, switchMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lucaspascoal.com';

  constructor(
    rota: Router,
    tituloPágina: Title,
    rotaAtual: ActivatedRoute,
  ) {
    rota.events
      .pipe(filter((x) => x instanceof NavigationEnd))
      .pipe(map(() => rotaAtual))

      .pipe(
        map((rota) => {
          while (rota.firstChild) rota = rota.firstChild;
          return rota;
        })
      )
      .pipe(switchMap((route) => route.data))
      .subscribe((e) => tituloPágina.setTitle(e['titulo']));
  }
}
