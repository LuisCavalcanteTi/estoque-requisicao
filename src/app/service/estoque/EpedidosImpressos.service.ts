import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpedidosImpressos } from 'src/app/models/estoque/EpedidosImpressos';

@Injectable({
  providedIn: 'root'
})
export class EpedidosImpressosService {

  private estoquePedidosImpressos: any[];

  private url = 'http://localhost:8080/estoque/visualizar/pedidosImpressos';

  constructor(private httpClient: HttpClient) {

    this.estoquePedidosImpressos = [];

   }

   verEstoquePedidosImpressos(): Observable<EpedidosImpressos[]>{
     return this.httpClient.get<EpedidosImpressos[]>(this.url);
   }



}
