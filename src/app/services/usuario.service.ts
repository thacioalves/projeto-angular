import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseURL: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  findAll(pagina: number, tamanhoPagina: number): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios`, { params });
  }

  findById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/usuarios/${id}`);
  }

  findByNome(
    nome: string,
    pagina: number,
    tamanhoPagina: number
  ): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString(),
    };
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios/search/${nome}`, {
      params,
    });
  }

  save(usuario: Usuario): Observable<Usuario> {
    const obj = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      login: usuario.login,
      senha: usuario.senha,
    };
    return this.http.post<Usuario>(`${this.baseURL}/usuarios`, obj);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const obj = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      login: usuario.login,
      senha: usuario.senha,
    };
    return this.http.post<Usuario>(`${this.baseURL}/usuarios`, obj);
  }

  delete(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(`${this.baseURL}/usuarios/${usuario.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/usuarios/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(
      `${this.baseURL}/usuarios/search/${nome}/count`
    );
  }
}
