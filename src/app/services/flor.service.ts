import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flor } from '../models/flor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlorService {
  private baseURL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Flor[]> {
    return this.http.get<Flor[]>(`${this.baseURL}/flores`);
  }

  findById(id: string): Observable<Flor> {
    return this.http.get<Flor>(`${this.baseURL}/flores/${id}`);
  }

  findByNome(nome: string, pagina: number, tamanhoPagina: number): Observable<Flor[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Flor[]>(`${this.baseURL}/flores/search/${nome}`, {params});
  }

  save(flor: Flor): Observable<Flor> {
    const obj = {
      corPetalas: flor.corPetalas,
      alturaCaule: flor.alturaCaule
    };
    return this.http.post<Flor>(`${this.baseURL}/flores`, obj);
  }

  update(flor: Flor): Observable<Flor> {
    const obj = {
      corPetalas: flor.corPetalas,
      alturaCaule: flor.alturaCaule
    };
    return this.http.put<Flor>(`${this.baseURL}/flores/${flor.id}`, obj);
  }

  delete(flor: Flor): Observable<any> {
    return this.http.delete<Flor>(`${this.baseURL}/flores/${flor.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/flores/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/flores/search/${nome}/count`);
  }

}
