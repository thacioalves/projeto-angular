import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(`${this.baseURL}/fornecedores`);
  }

  findById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseURL}/fornecedores/${id}`);
  }

  nome!: string;
  pais!: string;
  safra!: string;
  volume!: number;

  save(fornecedor: Fornecedor): Observable<Fornecedor> {
    const obj = {
      nome: fornecedor.nome,
      pais: fornecedor.pais,
      safra: fornecedor.safra,
      volume: fornecedor.volume
    };
    return this.http.post<Fornecedor>(`${this.baseURL}/fornecedores`, obj);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    const obj = {
      nome: fornecedor.nome,
      pais: fornecedor.pais,
      safra: fornecedor.safra,
      volume: fornecedor.volume
    };
    return this.http.put<Fornecedor>(`${this.baseURL}/fornecedores/${fornecedor.id}`, obj);
  }

  delete(fornecedor: Fornecedor): Observable<any> {
    return this.http.delete<Fornecedor>(`${this.baseURL}/fornecedores/${fornecedor.id}`);
  }
}
