import { Component, OnInit } from '@angular/core';
import { EpedidosImpressos } from 'src/app/models/estoque/EpedidosImpressos';
import { EpedidosImpressosService } from 'src/app/service/estoque/EpedidosImpressos.service';

@Component({
  selector: 'app-estoque-pedidos-impressos',
  templateUrl: './estoque-pedidos-impressos.component.html',
  styleUrls: ['./estoque-pedidos-impressos.component.scss']
})
export class EstoquePedidosImpressosComponent implements OnInit {

  constructor(private service: EpedidosImpressosService) { }

  ngOnInit(){
    this.service.verEstoquePedidosImpressos().subscribe((epedidosImpressos: EpedidosImpressos[]) => {
      console.log(epedidosImpressos);
    })
  }

}
