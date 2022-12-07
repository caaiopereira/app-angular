import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Esportes } from './esportes';

@Injectable({
  providedIn: 'root'
})
export class EsportesService {

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient) { }

  readonly API = "http://localhost:3000/esportes/";

  getEsportes() : Observable<Esportes[]> {
    return this.http.get<Esportes[]>(this.API);
  }

  postEsportes(esporte: Esportes){
    return this.http.post(this.API, JSON.stringify(esporte), this.HttpOptions).subscribe();
  }

  delEsportes(id: number){
    return this.http.delete(this.API + id).subscribe();
  }

}
