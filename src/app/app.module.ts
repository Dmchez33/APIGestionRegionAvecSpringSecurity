import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DartModeTogleComponent } from './dart-mode-togle/dart-mode-togle.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LieuxTouristiquesComponent } from './lieux-touristiques/lieux-touristiques.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './menu/menu.component';
import { DetailLieuxTourisquesComponent } from './detail-lieux-tourisques/detail-lieux-tourisques.component';

@NgModule({
  declarations: [
    AppComponent,
    DartModeTogleComponent,
    DashbordComponent,
    AccueilComponent,
    LieuxTouristiquesComponent,
    ConnexionComponent,
    InscriptionComponent,
    MenuComponent,
    DetailLieuxTourisquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
