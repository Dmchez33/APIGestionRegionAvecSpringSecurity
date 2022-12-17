import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  //METHODE PERMETTANT D'AJOUTER UNE REGION
  listerPays(): Observable<any> {

    return this.http.get(`${AUTH_API}/liste_pays`);
  }

  //METHODE PERMETTANT D'AJOUTER UNE REGION
  listerPaysParNom(nompays: any): Observable<any> {

    return this.http.get(`${AUTH_API}/liste_pays/${nompays}`);
  }

  //METHODE PERMETTANT D'AJOUTER UNE REGION
  ajouterPays(file: File, nom: any, description: any, densite: any, superficie: any): Observable<any> {

    const data: FormData = new FormData();
    const pays = [{
      "nom": nom,
      "description": description,
      "superficie": superficie,
      "densite": densite
    }]
    data.append('file', file);
    data.append('pays', JSON.stringify(pays).slice(1, JSON.stringify(pays).lastIndexOf(']')));
    return this.http.post(`${AUTH_API}/ajout_pays`, data);
  }

  //METHODE PERMETTANT DE MODIFIER UNE REGION
  modifierPays(id: any, file: File, nom: any, description: any, densite: any, superficie: any): Observable<any> {

    const data: FormData = new FormData();
    const pays = [{
      "nom": nom,
      "description": description,
      "superficie": superficie,
      "densite": densite
    }]
    data.append('file', file);
    data.append('pays', JSON.stringify(pays).slice(1, JSON.stringify(pays).lastIndexOf(']')));
    return this.http.post(`${AUTH_API}/modifier_pays/${id}`, data);
  }

}
