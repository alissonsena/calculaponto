import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica',
  template: '<h2>Sério? </h2><p>Vale tudo, só não vale...</p>' +
            '<br /><br /><button class="btn btn-light" routerLink="/calcula">Voltar</button>'
})
export class PoliticaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
