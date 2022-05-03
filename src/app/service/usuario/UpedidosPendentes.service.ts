import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpedidosPendentes } from 'src/app/models/usuario/UpedidosPendentes';

@Injectable({
  providedIn: 'root'
})
export class UpedidosPendentesService {

  private usuarioPedidosPendentes: any[];

  private url = 'http://localhost:8080/usuario/visualizar/pedidosPendentes';

  constructor(private httpClient: HttpClient) {

    this.usuarioPedidosPendentes = [];

   }


   verUsuarioPedidosPendentes(): Observable<UpedidosPendentes[]>{
     return this.httpClient.get<UpedidosPendentes[]>(this.url);
   }


}
