import { Component, OnInit } from '@angular/core';
import { PaysService } from '../../../../service/pays.service';
import { RegionService } from '../../../../service/region.service';

@Component({
  selector: 'app-lieux-touristiques',
  templateUrl: './lieux-touristiques.component.html',
  styleUrls: ['./lieux-touristiques.component.css']
})
export class LieuxTouristiquesComponent implements OnInit {

//VARIABLE CONTENANT LES INFORMATIONS DES PAYS RECUPERER
pays: any;

//VARIABLE CONTENANT LES INFORMATIONS DES REGIONS RECUPERER
region: any;

//VARIABLE CONTENANT LES INFORMATIONS DES LIEUX TOURISTIQUE RECUPERER
lieux: any;

//VARIABLE CONTENANT URL DE DETAIL LIEUX TOURISQUE
url = '/contenu/detail-lieux'
  constructor(private regionService: RegionService, private paysService: PaysService) { }

  ngOnInit(): void {

    //RECUPERATION DE LA LISTE DES PAYS DANS NGONIT
    this.paysService.listerPays().subscribe(data => {
      this.pays = data;
      console.log(data);
    })

    //METHODE PERMETTANT DE RECUPERER LA LISTE DES REGION
    this.regionService.listerRegion().subscribe(data => {
      this.region = data;
      console.log(data);
    })

    //METHODE PERMETTANT DE RECUPERER TOUTE LA LISTE DE LIEUX TOURISTIQUE

    this.regionService.listerLieux().subscribe(data =>{
      this.lieux = data;
      console.log(data)
    })
  }

}
