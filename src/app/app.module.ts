import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculaComponent } from './calcula/calcula.component';
import { AppRoutingModule } from './app-routing.module';
import { TermosComponent } from './termos/termos.component';
import { PoliticaComponent } from './politica/politica.component';
import { RouterModule } from '@angular/router';

const appRoutes = [
    { path: 'calcula', component: CalculaComponent },
    { path: 'calcula/termos', component: TermosComponent },
    { path: 'calcula/politica', component: PoliticaComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CalculaComponent,
    TermosComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
