import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from './carrinho.service';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  save(carrinho: ItemCarrinho[] ): Observable<Produto> {
    const itens = carrinho.map(item => ({
      quantidade: item.quantidade,
      preco: item.valorUnidade,
      idProduto: item.id
    }));

    const produtos = {
      itens: itens
    };

    return this.http.post<any>(`${this.baseURL}/pedidos`, produtos);
  }
}
