import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpedidosPendentes } from 'src/app/models/estoque/EpedidosPendentes';

@Injectable({
  providedIn: 'root'
})

export class EpedidosPendentesService {


  private estoquePedidosPendentes: any[];

  private url = 'http://localhost:8080/estoque/visualizar/pedidosPendentes';

  constructor(private httpClient: HttpClient) {

    this.estoquePedidosPendentes = [];

   }





   verEstoquePedidosPendentes(): Observable<EpedidosPendentes[]>{
     return this.httpClient.get<EpedidosPendentes[]>(this.url);
   }


}
