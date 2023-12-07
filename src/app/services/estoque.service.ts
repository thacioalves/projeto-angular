import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from '../models/estoque';

@Injectable({
  providedIn: 'root',
})
export class EstoqueService {
  private baseURL: string = 'http://localhost:8080/estoques';

  constructor(private http: HttpClient) {}

  findAll(pagina: number, tamanhoPagina: number): Observable<Estoque[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Estoque[]>(`${this.baseURL}/estoques`, { params });
  }

  findByNome(
    nome: string,
    pagina: number,
    tamanhoPagina: number
  ): Observable<Estoque[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Estoque[]>(`${this.baseURL}/estoques/search/${nome}`, {
      params,
    });
  }

  findById(id: string): Observable<Estoque> {
    return this.http.get<Estoque>(`${this.baseURL}/estoques/${id}`);
  }

  save(estoque: Estoque): Observable<Estoque> {
    const obj = {
      quantidadeProduto: estoque.quantidadeProduto,
      produto: estoque.produto,
    };
    return this.http.post<Estoque>(`${this.baseURL}/estoques`, estoque);
  }

  update(estoque: Estoque): Observable<Estoque> {
    return this.http.put<Estoque>(
      `${this.baseURL}/estoques/${estoque.id}`,
      estoque
    );
  }

  delete(estoque: Estoque): Observable<any> {
    return this.http.delete<Estoque>(`${this.baseURL}/estoques/${estoque.id}`);
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/estoques/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseURL}/estoques/search/${nome}/count`
    );
  }
}
