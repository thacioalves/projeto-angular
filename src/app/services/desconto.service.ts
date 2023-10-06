import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desconto } from '../models/desconto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DescontoService {
  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Desconto[]> {
    return this.http.get<Desconto[]>(`${this.baseURL}/descontos`);
  }

  findById(id: string): Observable<Desconto> {
    return this.http.get<Desconto>(`${this.baseURL}/descontos/${id}`);
  }

  save(desconto: Desconto): Observable<Desconto> {
    const obj = {
      valor: desconto.valor,
      descricao: desconto.descricao,
    };
    return this.http.post<Desconto>(`${this.baseURL}/descontos`, obj);
  }

  update(desconto: Desconto): Observable<Desconto> {
    const obj = {
      valor: desconto.valor,
      descricao: desconto.descricao,
    };
    return this.http.put<Desconto>(
      `${this.baseURL}/descontos/${desconto.id}`,
      obj
    );
  }

  delete(desconto: Desconto): Observable<any> {
    return this.http.delete<Desconto>(
      `${this.baseURL}/descontos/${desconto.id}`
    );
  }
}
