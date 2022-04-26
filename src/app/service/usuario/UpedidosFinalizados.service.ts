import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpedidosFinalizados } from 'src/app/models/usuario/UpedidosFinalizados';

@Injectable({
  providedIn: 'root'
})
export class UpedidosFinalizadosService {

  private usuarioPedidosPendentes: any[];

  private url = 'http://localhost:8080/usuario/visualizar/pedidosFinalizados';

  constructor(private httpClient: HttpClient) {

    this.usuarioPedidosPendentes = [];

   }





   verUsuarioPedidosFinalizados(): Observable<UpedidosFinalizados[]>{
     return this.httpClient.get<UpedidosFinalizados[]>(this.url);
   }

}
