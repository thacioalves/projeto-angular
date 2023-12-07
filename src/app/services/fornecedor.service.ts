import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  private baseURL: string = 'http://localhost:8080/fornecedores';

  constructor(private http: HttpClient) {}

  findAll(pagina: number, tamanhoPagina: number): Observable<Fornecedor[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Fornecedor[]>(`${this.baseURL}/fornecedores`, {
      params,
    });
  }

  findById(id: string): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.baseURL}/fornecedores/${id}`);
  }

  findByNome(
    nome: string,
    pagina: number,
    tamanhoPagina: number
  ): Observable<Fornecedor[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Fornecedor[]>(
      `${this.baseURL}/fornecedores/search/${nome}`,
      {
        params,
      }
    );
  }

  save(fornecedor: Fornecedor): Observable<Fornecedor> {
    const obj = {
      nome: fornecedor.nome,
      pais: fornecedor.pais,
      safra: fornecedor.safra,
      volume: fornecedor.volume,
    };
    return this.http.post<Fornecedor>(`${this.baseURL}/fornecedores`, obj);
  }

  update(fornecedor: Fornecedor): Observable<Fornecedor> {
    const obj = {
      nome: fornecedor.nome,
      pais: fornecedor.pais,
      safra: fornecedor.safra,
      volume: fornecedor.volume,
    };
    return this.http.post<Fornecedor>(`${this.baseURL}/fornecedores`, obj);
  }

  delete(fornecedor: Fornecedor): Observable<any> {
    return this.http.delete<Fornecedor>(
      `${this.baseURL}/fornecedores/${fornecedor.id}`
    );
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/fornecedores/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseURL}/fornecedores/search/${nome}/count`
    );
  }
}
