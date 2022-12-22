import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './composant-principal/auth/component/dashbord/dashbord.component';
import { AccueilComponent } from './composant-principal/auth/component/accueil/accueil.component';
import { LieuxTouristiquesComponent } from './composant-principal/auth/component/lieux-touristiques/lieux-touristiques.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent } from './composant-principal/auth/component/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './requetteInterc/authentifier.intercept';
import { DetailLieuxTouristiqueComponent } from './composant-principal/auth/component/detail-lieux-touristique/detail-lieux-touristique.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ContenuComponent } from './composant-principal/auth/component/contenu/contenu.component';
import { LieuDetailComponent } from './composant-principal/auth/component/lieu-detail/lieu-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    AccueilComponent,
    LieuxTouristiquesComponent,
    ConnexionComponent,
    InscriptionComponent,
    MenuComponent,
    DetailLieuxTouristiqueComponent,
    ContenuComponent,
    LieuDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
