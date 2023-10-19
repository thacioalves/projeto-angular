import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclame } from '../models/reclame';

@Injectable({
  providedIn: 'root',
})
export class ReclameService {
  private baseURL: string = 'http://localhost:8080';           //tem que criar isso no beck

  constructor(private http: HttpClient) {}

  findAll(): Observable<Reclame[]> {
    return this.http.get<Reclame[]>(`${this.baseURL}/reclames`);
  }

  findById(id: string): Observable<Reclame> {
    return this.http.get<Reclame>(`${this.baseURL}/reclames/${id}`);
  }

  save(reclame: Reclame): Observable<Reclame> {
    const obj = {
      idUsuario: reclame.idUsuario,
      idProduto: reclame.idProduto,
      reclamacao: reclame.reclamacao
    };
    return this.http.post<Reclame>(`${this.baseURL}/reclames`, obj);
  }

  update(reclame: Reclame): Observable<Reclame> {
    const obj = {
      idUsuario: reclame.idUsuario,
      idProduto: reclame.idProduto,
      reclamacao: reclame.reclamacao
    };
    return this.http.put<Reclame>(`${this.baseURL}/reclames/${reclame.id}`, obj);
  }

  delete(reclame: Reclame): Observable<any> {
    return this.http.delete<Reclame>(`${this.baseURL}/reclames/${reclame.id}`);
  }
}
