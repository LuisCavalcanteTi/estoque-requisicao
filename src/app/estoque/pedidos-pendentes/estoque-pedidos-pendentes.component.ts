import { Component, OnInit } from '@angular/core';
import { EpedidosPendentes } from 'src/app/models/estoque/EpedidosPendentes';
import { EpedidosPendentesService } from 'src/app/service/estoque/EpedidosPendentes.service';

@Component({
  selector: 'app-estoque-pedidos-pendentes',
  templateUrl: './estoque-pedidos-pendentes.component.html',
  styleUrls: ['./estoque-pedidos-pendentes.component.scss']
})
export class EstoquePedidosPendentesComponent implements OnInit {

  pedidosPendentes: any;
  constructor(private service: EpedidosPendentesService) { }

  ngOnInit(){
    this.service.verEstoquePedidosPendentes().subscribe((epedidosPendentes: EpedidosPendentes[]) => {
      this.pedidosPendentes = epedidosPendentes;
    })
  }

}
