import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eprodutos } from 'src/app/models/estoque/Eprodutos';

@Injectable({
  providedIn: 'root'
})



export class ProdutosService {


  private listarProdutos: any[];

  private url = "http://localhost:8080/estoque/visualizar/Produtos";

constructor(private httpClient: HttpClient) {
  this.listarProdutos = [];
 }


 verProdutos(): Observable<Eprodutos[]>{
  return this.httpClient.get<Eprodutos[]>(this.url);
}



}
