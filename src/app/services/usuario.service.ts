import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuarios`);
  }

  findById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/usuarios/${id}`);
  }

  save(usuario: Usuario): Observable<Usuario> {
    const obj = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      sexo: usuario.sexo,
      telefone: usuario.telefone,
      endereco: usuario.endereco,
      perfis: usuario.perfis,
      login: usuario.login,
      senha: usuario.senha
    };
    return this.http.post<Usuario>(`${this.baseURL}/usuarios`, obj);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const obj = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      sexo: usuario.sexo,
      telefone: usuario.telefone,
      endereco: usuario.endereco,
      perfis: usuario.perfis,
      login: usuario.login,
      senha: usuario.senha
    };
    return this.http.put<Usuario>(`${this.baseURL}/usuarios/${usuario.id}`, obj);
  }

  delete(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(`${this.baseURL}/usuarios/${usuario.id}`);
  }
}
