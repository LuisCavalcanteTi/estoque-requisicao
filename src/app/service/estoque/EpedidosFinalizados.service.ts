import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpedidosFinalizados } from 'src/app/models/estoque/EpedidosFinalizados';

@Injectable({
  providedIn: 'root'
})
export class EpedidosFinalizadosService {

  private estoquePedidosFinalizados: any[];

  private url = 'http://localhost:8080/estoque/visualizar/pedidosFinalizados';

  constructor(private httpClient: HttpClient) {

    this.estoquePedidosFinalizados = [];

   }



   verEstoquePedidosFinalizados(): Observable<EpedidosFinalizados[]>{
     return this.httpClient.get<EpedidosFinalizados[]>(this.url);
   }



}
