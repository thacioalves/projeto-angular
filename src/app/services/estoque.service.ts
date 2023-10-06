import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from '../models/estoque';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(`${this.baseURL}/estoques`);
  }

  findById(id: string): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.baseURL}/estoques/${id}`);
  }

  save(estoque: Estoque): Observable<Estoque> {
    const obj = {
      quantidadeProduto: estoque.quantidadeProduto,
      produto: estoque.idProduto,
    };
    return this.http.post<Estoque>(`${this.baseURL}/estoques`, obj);
  }

  update(estoque: Estoque): Observable<Estoque> {
    const obj = {
      quantidadeProduto: estoque.quantidadeProduto,
      produto: estoque.idProduto,
    };
    return this.http.put<Estoque>(
      `${this.baseURL}/estoques/${estoque.id}`,
      obj
    );
  }

  delete(estoque: Estoque): Observable<any> {
    return this.http.delete<Estoque>(`${this.baseURL}/estoques/${estoque.id}`);
  }
}
