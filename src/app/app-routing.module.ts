import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composant-principal/auth/component/accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashbordComponent } from './composant-principal/auth/component/dashbord/dashbord.component';
import { DetailLieuxTouristiqueComponent } from './composant-principal/auth/component/detail-lieux-touristique/detail-lieux-touristique.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LieuxTouristiquesComponent } from './composant-principal/auth/component/lieux-touristiques/lieux-touristiques.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'contenu', canActivate:[AuthGuard],
  loadChildren: () => import('./composant-principal/auth/auth.module').then((m)=> m.AuthModule)},
  
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  
  { path: '**', redirectTo: 'connexion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
