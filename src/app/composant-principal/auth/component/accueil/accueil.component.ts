import { Component, OnInit } from '@angular/core';
import { PaysService } from '../../../../service/pays.service';
import { RegionService } from '../../../../service/region.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  //VARIABLE CONTENANT LES INFORMATIONS DES PAYS RECUPERER
  pays: any;

  //VARIABLE CONTENANT LES INFORMATIONS DES REGIONS RECUPERER
  region: any;
  lieux: any;

  constructor(private regionService: RegionService, private paysService: PaysService) { }

  ngOnInit(): void {

    //RECUPERATION DE LA LISTE DES PAYS DANS NGONIT
    this.paysService.listerPays().subscribe(data => {
      this.pays = data;
      console.log(data.image);
    })

    //METHODE PERMETTANT DE RECUPERER LA LISTE DES LIEUX TOURISQUE PAR LE NOM DE LA REGION
    this.regionService.listerLieux().subscribe(data =>{
      this.lieux = data;
      console.log(data)
    })

  }

}
