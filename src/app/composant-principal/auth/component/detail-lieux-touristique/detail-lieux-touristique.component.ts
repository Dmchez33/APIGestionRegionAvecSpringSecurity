import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { RegionService } from '../../../../service/region.service';

@Component({
  selector: 'app-detail-lieux-touristique',
  templateUrl: './detail-lieux-touristique.component.html',
  styleUrls: ['./detail-lieux-touristique.component.css']
})
export class DetailLieuxTouristiqueComponent implements OnInit {

  isLoggedIn = false;

  //VARIABLE CONTENANT LES COMMENTAIRE
  comment:any;

  //VARIABLE CONTENANT ID DU LIEUX TOURISQUE RECUPERER
  idLieux: any;

  //VARIABLE CONTENANT LES DETAIL D'UNE REGION
  regionDetails: any

  //VARIABLE CONTENANT LA LISTE DES LIEUX TOURISTIQUE
  lieux: any;
  roles: any;
  idUser: any;
  comments: any;
  nomRegion:any

  constructor(private regionService: RegionService,private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit(): void {


    
    this.idLieux = this.route.snapshot.params['id'];

    //METHODE PERMETTANT DE RETOURNERLES LES DETAILS D4UNE REGION
    this.regionService.listerRegionById(this.idLieux).subscribe(data =>{
      this.regionDetails = data;
      this.nomRegion = this.regionDetails.nom
      console.log(this.regionDetails.nom);
      this.regionService.getCommentbyID(this.nomRegion).subscribe(data =>{
        this.comments = data;
        console.log(data)
      })
    })

    //METHODE PERMETTANT DE RECUPERER LA LISTE DES LIEUX TOURISQUE PAR LE NOM DE LA REGION
    this.regionService.listerLieuxNomRegion(this.idLieux).subscribe(data =>{
      this.lieux = data;
      console.log(data)
    })

    //RECUPERATION DE L'ID DE USER
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {

      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.idUser = user.id;

    }
    
  }
  //AJOUT DE COMMENTAIRE
  ajoutComment(){
    console.log(this.idUser)
    this.regionService.ajoutComment(this.idUser,this.comment,this.regionDetails.id).subscribe(data =>{
      console.log(data);
      this.reloadPage();
    })
  
  }
//ACTUALISER LA PAGE
  reloadPage(): void {
    window.location.reload();
  }
  

}
