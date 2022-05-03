import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urequisicao } from 'src/app/models/usuario/Urequisicao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrequisicaoService {




  private url = 'http://localhost:8080/usuario/cadastrar';

  constructor(private httpClient: HttpClient) {  }

  salvarRequisicao(urequisicao: Urequisicao): Observable<Urequisicao> {
    return this.httpClient.post<Urequisicao>(this.url, urequisicao);
  }





}
