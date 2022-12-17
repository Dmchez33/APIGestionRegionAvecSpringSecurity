import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuxTouristiquesComponent } from './lieux-touristiques/lieux-touristiques.component';

const routes: Routes = [
  // {path:'', component: AccueilComponent },
  {path:'accueil', component: AccueilComponent },
  {path:'dashbord', component: DashbordComponent },
  {path:'lieuTouristique', component: LieuxTouristiquesComponent },
  {path:'connexion', component: ConnexionComponent },
  {path:'inscription', component: InscriptionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
