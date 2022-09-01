import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from 'src/models/transferencias.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasServiceService {

  private url = 'http://localhost:3000/transferencias';

  constructor( private httpClient: HttpClient) { }

  litar(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencias: Transferencia): Observable<Transferencia[]>{
    transferencias.data = new Date();
    return this.httpClient.post<Transferencia[]>(this.url, transferencias);
  }
}
