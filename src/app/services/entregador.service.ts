import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entregador } from '../models/entregador';

@Injectable({
  providedIn: 'root',
})
export class entregadorService {
  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Entregador[]> {
    return this.http.get<Entregador[]>(`${this.baseURL}/entregadores`);
  }

  findById(id: string): Observable<Entregador> {
    return this.http.get<Entregador>(`${this.baseURL}/entregadores/${id}`);
  }

  save(entregador: Entregador): Observable<Entregador> {
    const obj = {
      nomeEntregador: entregador.nomeEntregador,
      CNPJ: entregador.CNPJ,
      chaveRastreio: entregador.chaveRastreio,
      idProduto: entregador.idProduto,
    };
    return this.http.post<Entregador>(`${this.baseURL}/entregadores`, obj);
  }

  update(entregador: Entregador): Observable<Entregador> {
    const obj = {
      nomeEntregador: entregador.nomeEntregador,
      CNPJ: entregador.CNPJ,
      chaveRastreio: entregador.chaveRastreio,
      idProduto: entregador.idProduto,
    };
    return this.http.put<Entregador>(`${this.baseURL}/entregadores/${entregador.id}`, obj);
  }

  delete(entregador: Entregador): Observable<any> {
    return this.http.delete<Entregador>(`${this.baseURL}/entregadores/${entregador.id}`);
  }
}
