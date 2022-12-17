import { Component, OnInit } from '@angular/core';
import { PaysService } from '../service/pays.service';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  //VARIABLE CONTENANT LES INFORMATIONS DES PAYS RECUPERER
  pays: any;

  //VARIABLE CONTENANT LES INFORMATIONS DES REGIONS RECUPERER
  region: any;

  //DECLARATION DES DIFFERENTS ATTRIBUT DE LA TABLE REGION
  codeRegion: any;
  domaineActivite: any;
  superficieRegion: any;
  descriptionregion: any;
  nomRegion: any;
  langue: any;
  NomPaysReions: any;
  idpays: any;
  imageRegion: any;

  //DECLARATION DES DIFFERENTS ATTRIBUTS DE LA TABLE PAYS
  nomPays: any
  descriptionpays: any
  superfiepays: any
  densitepays: any
  imagepays: any

  //DECLARATION DES DIFFERENTS ATTRIBUTS DE LA TABLE LEIUX
  nomLieux: any
  descriptionLieux: any
  imageLieux: any
  nomRegionLieux: any

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


  }

  /***************************** PARTIE REGION *************************************/

  //METHODE PERMETTANT DE RECUPERER L'IMAGE DE LA REGION
  recuperationImageRegion(event: any) {

    this.imageRegion = event.target["files"][0];
    console.log(this.imageRegion)

  }

  //METHODE PERMETTANT D'ENVOYER LES VALEUR DE L'IMAGE AU SERVICE
  ajouterRegion() {

    console.log(this.NomPaysReions);
    //this.getPaysParNom();
    this.regionService.ajouterRegion(
      this.imageRegion,
      this.codeRegion,
      this.domaineActivite,
      this.superficieRegion,
      this.descriptionregion,
      this.nomRegion,
      this.NomPaysReions,
      this.langue
    ).subscribe(data => {

      console.log(data);

    })

  }



  /***************************** PARTIE PAYS *************************************/

  //METHODE PERMETTANT DE RECUPERER L'IMAGE DU PAYS
  recuperationImagePays(event: any) {

    this.imagepays = event.target["files"][0];
    console.log(this.imagepays)
  }

  //METHODE PERMETTANT DE RETROUVER LE PAR NOMPAYS
  getPaysParNom() {
    this.paysService.listerPaysParNom(this.NomPaysReions).subscribe(data => {
      this.idpays = data;
      console.log(this.idpays);
    })
  }

  //METHODE PERMETTANT D'ENVOYER LES VALEUR DE L'IMAGE AU SERVICE
  ajouterPays() {
    console.log(this.nomPays);
    this.paysService.ajouterPays(this.imagepays, this.nomPays, this.descriptionpays, this.densitepays, this.superfiepays).subscribe(data => {
      console.log(data);
    })

  }


  /***************************** PARTIE LIEUX *************************************/

  //METHODE PERMETTANT DE RECUPERER L'IMAGE DU PAYS
  recuperationImageLieux(event: any) {

    this.imageLieux = event.target["files"][0];
    console.log(this.imagepays)
  }
  ajouterLieux() {
    this.regionService.ajouterLieux(this.imageLieux, this.nomLieux, this.descriptionLieux,this.nomRegionLieux).subscribe(data =>{
      console.log(data);
    })
  }

}
