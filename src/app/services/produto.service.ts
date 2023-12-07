import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private baseURL: string = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  findAll(pagina: number, tamanhoPagina: number): Observable<Produto[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Produto[]>(`${this.baseURL}/produtos`, { params });
  }

  findById(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`);
  }

  findByNome(
    nome: string,
    pagina: number,
    tamanhoPagina: number
  ): Observable<Produto[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Produto[]>(`${this.baseURL}/produtos/search/${nome}`, {
      params,
    });
  }

  save(produto: Produto): Observable<Produto> {
    const obj = {
      nome: produto.nome,
      valorUnidade: produto.valorUnidade,
      descricao: produto.descricao,
    };
    return this.http.post<Produto>(`${this.baseURL}/produtos`, obj);
  }

  update(produto: Produto): Observable<Produto> {
    const obj = {
      nome: produto.nome,
      valorUnidade: produto.valorUnidade,
      descricao: produto.descricao,
    };
    return this.http.post<Produto>(`${this.baseURL}/produtos`, obj);
  }

  delete(produto: Produto): Observable<any> {
    return this.http.delete<Produto>(`${this.baseURL}/produtos/${produto.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/produtos/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseURL}/produtos/search/${nome}/count`
    );
  }

  getUrlImagem(nomeImagem: string): string {
    return `${this.baseURL}/image/download/${nomeImagem}`;
  }

  uploadImagem(id: number, nomeImagem: string, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id.toString());
    formData.append('nomeImagem', imagem.name);
    formData.append('imagem', imagem, imagem.name);

    return this.http.patch<Produto>(`${this.baseURL}/image/upload`, formData);
  }
}
