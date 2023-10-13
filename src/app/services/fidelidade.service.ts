import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fidelidade } from '../models/fidelidade';

@Injectable({
  providedIn: 'root',
})
export class FidelidadeService {
  private baseURL: string = 'http://localhost:8080';           //tem que criar isso no beck

  constructor(private http: HttpClient) {}

  findAll(): Observable<Fidelidade[]> {
    return this.http.get<Fidelidade[]>(`${this.baseURL}/fidelidades`);
  }

  findById(id: string): Observable<Fidelidade> {
    return this.http.get<Fidelidade>(`${this.baseURL}/fidelidades/${id}`);
  }

  save(fidelidade: Fidelidade): Observable<Fidelidade> {
    const obj = {
      idUsuario: fidelidade.idUsuario,
      idDesconto: fidelidade.idDesconto
    };
    return this.http.post<Fidelidade>(`${this.baseURL}/fidelidades`, obj);
  }

  update(fidelidade: Fidelidade): Observable<Fidelidade> {
    const obj = {
      idUsuario: fidelidade.idUsuario,
      idDesconto: fidelidade.idDesconto
    };
    return this.http.put<Fidelidade>(`${this.baseURL}/fidelidades/${fidelidade.id}`, obj);
  }

  delete(fidelidade: Fidelidade): Observable<any> {
    return this.http.delete<Fidelidade>(`${this.baseURL}/fidelidades/${fidelidade.id}`);
  }
}
