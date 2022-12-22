import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from 'src/app/service/region.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-lieu-detail',
  templateUrl: './lieu-detail.component.html',
  styleUrls: ['./lieu-detail.component.css']
})
export class LieuDetailComponent implements OnInit {

  //VARIABLE CONTENANT UN LIEUX TOURISQUE
  Lieux:any;
  idlieux:any;

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
  showAdmin: any;

  //VARIABLE CONTENANT L'URL DE LIEU DETAIL
  URL :any
  idLieu: any;
  constructor(private lieuxService: RegionService, private route: ActivatedRoute, private regionService: RegionService, private storageService: StorageService) { }

  ngOnInit(): void {
    //RECUPERATION DE ID DU LIEUX
    this.idlieux = this.route.snapshot.params['idL'];
    //RECUPERATION DU LIEUX
    this.lieuxService.listerLieuxById(this.idlieux).subscribe(data =>{
      this.Lieux = data;
      console.log(data);
    })

    //RECUPERATION DE L'ID DE USER
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {

      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.idUser = user.id;

      this.showAdmin = this.roles.includes('ROLE_ADMIN');

    }

    this.idLieu = this.route.snapshot.params['id'];

    //METHODE PERMETTANT DE RETOURNERLES LES DETAILS D4UNE REGION
    this.regionService.listerRegionById(this.idLieu).subscribe(data =>{
      this.regionDetails = data;
      this.nomRegion = this.regionDetails.nom
      console.log(this.regionDetails.nom);
      this.regionService.getCommentbyID(this.nomRegion).subscribe(data =>{
        this.comments = data;
        console.log(data)
      })
    })

  }

  //AJOUT DE COMMENTAIRE
  ajoutComment(){
    console.log(this.nomRegion);
    console.log(this.idUser)
    this.regionService.ajoutComment(this.idUser,this.comment,this.regionDetails.id).subscribe(data =>{
      console.log(data);
      this.alet();
      //this.reloadPage();
    })
  
  }

  alet(): void {
    setTimeout(() => {
      this.getAllComment();
    }, 1000);
  }

  //RECUPERATION DE TOUS LES COMMENTAIRE
 getAllComment(){
  this.regionService.getCommentbyID(this.nomRegion).subscribe(data =>{
    this.comments = data;
    console.log(data)
  })
 }

 //SUPPRESSION DES COMMENTAORE
 deleteComment(id:any){
  this.regionService.deleteComment(id).subscribe(data=>{

    console.log(data);
  })
  this.alet();
 }

}
