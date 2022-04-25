import { Pedidos } from './../models/pedidos.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private listaPedidos: any[];
  private url = 'http://localhost:8080/usuario/vizualizar/pedidosPendentes';

  constructor(private httpClient: HttpClient) {

    this.listaPedidos = [];
   }

   todas(): Observable<Pedidos[]>{
     return this.httpClient.get<Pedidos[]>(this.url);
   }

}
