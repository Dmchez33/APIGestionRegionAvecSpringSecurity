import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/region';
const AUTH_APILIEUX = 'http://localhost:8080/api/lieux';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  //METHODE PERMETTANT D'AJOUTER UNE REGION DANS LA BASE DE DONNEE

  listerRegion(): Observable<any> {
    return this.http.get(`${AUTH_API}/liste_region`);
  }

  //METHODE PERMETTANT D'AJOUTER UNE REGION DANS LA BASE DE DONNEE

  ajouterRegion(file: File, conderegion: any, domaineactivite: any, superficie: any, description: any, nomregion: any, idpays: any, langue: any): Observable<any> {
    const data: FormData = new FormData();
    const region = [{
      "coderegion": conderegion,
      "domaineactivite": domaineactivite,
      "superficie": superficie,
      "description": description,
      "nomregion": nomregion,
      "languemajoritaire": langue
      // "idpays": idpays
    }]
    data.append('file', file);
    data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));
    return this.http.post(`${AUTH_API}/ajout_region/${idpays}`, data);
  }

  //METHODE PERMETTANT DE MODIFIER UNE REGION DANS LA BASE DE DONNEE
  modifierRegion(id: any, file: File, conderegion: any, domaineactivite: any, superficie: any, description: any, nomregion: any, idpays: any): Observable<any> {
    const data: FormData = new FormData();
    const region = [{
      "coderegion": conderegion,
      "domaineactivite": domaineactivite,
      "superficie": superficie,
      "description": description,
      "nomregion": nomregion,
      "idpays": idpays
    }]
    data.append('file', file);
    data.append('region', JSON.stringify(region).slice(1, JSON.stringify(region).lastIndexOf(']')));
    return this.http.post(`${AUTH_API}/modifier_region${id}`, data);
  }


  /****************************** LIEUX TOURISTIQUES ************* */

  //METHODE PERMETTANT D'AJOUTER UN LIEUX TOURISQUE DANS LA BASE DE DONNEE

  ajouterLieux(file: File, nomLieux: any, descriptionLieux: any, nomRegion: any): Observable<any> {
    const data: FormData = new FormData();
    const lieux = [{
      "nom": nomLieux,
      "description": descriptionLieux,
      // "languemajoritaire":langue
      // "idpays": idpays
    }]
    data.append('file', file);
    data.append('lieux', JSON.stringify(lieux).slice(1, JSON.stringify(lieux).lastIndexOf(']')));
    return this.http.post(`${AUTH_APILIEUX}/ajout_Lieux/${nomRegion}`, data);
  }

  //METHODE PERMETTANT D'AJOUTER UN LIEUX TOURISQUE DANS LA BASE DE DONNEE

  modifierLieux(id:any,file: File, nomLieux: any, descriptionLieux: any, nomRegion: any): Observable<any> {
    const data: FormData = new FormData();
    const lieux = [{
      "nom": nomLieux,
      "description": descriptionLieux,
      // "languemajoritaire":langue
      // "idpays": idpays
    }]
    data.append('file', file);
    data.append('lieux', JSON.stringify(lieux).slice(1, JSON.stringify(lieux).lastIndexOf(']')));
    return this.http.post(`${AUTH_API}/modifier_Lieux/${nomRegion}/${id}`, data);
  }


}
