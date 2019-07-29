import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculaComponent }   from './calcula/calcula.component';
import { TermosComponent }   from './termos/termos.component';
import { PoliticaComponent }   from './politica/politica.component';

const routes: Routes = [
  { path: '', redirectTo: '/calcula', pathMatch: 'full' },
  { path: 'calcula', component: CalculaComponent },
  { path: 'calcula/termos', component: TermosComponent },
  { path: 'calcula/politica', component: PoliticaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
