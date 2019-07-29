import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculaComponent } from './calcula/calcula.component';
import { AppRoutingModule } from './app-routing.module';
import { TermosComponent } from './termos/termos.component';
import { PoliticaComponent } from './politica/politica.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
