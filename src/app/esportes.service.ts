import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Esportes } from './esportes';

@Injectable({
  providedIn: 'root'
})
export class EsportesService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/esportes";

  getEsportes() : Observable<Esportes[]> {
    return this._httpClient.get<Esportes[]>(this.url);
  }
}
