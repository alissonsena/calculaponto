import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos',
  template: '<h2>Termos de Uso</h2>'+
            '<p>Ao usar o sistema você concorda com todos os termos que ainda não foram pensados.</p>' +
            '<br /><br /><button class="btn btn-light" routerLink="/">Voltar</button>'
})
export class TermosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
