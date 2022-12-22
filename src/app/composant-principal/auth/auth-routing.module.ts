import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ContenuComponent } from './component/contenu/contenu.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { DetailLieuxTouristiqueComponent } from './component/detail-lieux-touristique/detail-lieux-touristique.component';
import { LieuDetailComponent } from './component/lieu-detail/lieu-detail.component';
import { LieuxTouristiquesComponent } from './component/lieux-touristiques/lieux-touristiques.component';

const routes: Routes = [
  {
    path: '', component: ContenuComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'dashbord', component: DashbordComponent },
      { path: 'lieuTouristique', component: LieuxTouristiquesComponent },
      { path: 'lieuTouristique/detail-lieux/:id/lieu-detail/:idL', component: LieuDetailComponent },
      { path: 'lieuTouristique/detail-lieux/:id', component: DetailLieuxTouristiqueComponent },
      { path: '', redirectTo: '/contenu/accueil', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
