import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(`${this.baseURL}/administradores`);
  }

  findById(id: string): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.baseURL}/administradores/${id}`);
  }

  save(administrador: Administrador): Observable<Administrador> {
    const obj = {
      nome: administrador.nome,
      login: administrador.login,
      senha: administrador.senha
    };
    return this.http.post<Administrador>(`${this.baseURL}/administradores`, obj);
  }

  update(administrador: Administrador): Observable<Administrador> {
    const obj = {
      nome: administrador.nome,
      login: administrador.login,
      senha: administrador.senha
    };
    return this.http.put<Administrador>(`${this.baseURL}/administradores/${administrador.id}`, obj);
  }

  delete(administrador: Administrador): Observable<any> {
    return this.http.delete<Administrador>(`${this.baseURL}/administradores/${administrador.id}`);
  }
}
