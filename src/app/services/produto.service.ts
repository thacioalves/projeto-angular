import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/produtos`);
  }

  findById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`);
  }

  save(produto: Produto): Observable<Produto> {
    const obj = {
      nome: produto.nome,
      valorUnidade: produto.valorUnidade,
      descricao: produto.descricao
    };
    return this.http.post<Produto>(`${this.baseURL}/produtos`, obj);
  }

  update(produto: Produto): Observable<Produto> {
    const obj = {
      nome: produto.nome,
      valorUnidade: produto.valorUnidade,
      descricao: produto.descricao
    };
    return this.http.put<Produto>(`${this.baseURL}/produtos/${produto.id}`, obj);
  }

  delete(produto: Produto): Observable<any> {
    return this.http.delete<Produto>(`${this.baseURL}/produtos/${produto.id}`);
  }
}
