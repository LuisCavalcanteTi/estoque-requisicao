import { Component, OnInit } from '@angular/core';
import { EpedidosFinalizados } from 'src/app/models/estoque/EpedidosFinalizados';
import { EpedidosFinalizadosService } from 'src/app/service/estoque/EpedidosFinalizados.service';

@Component({
  selector: 'app-estoque-pedidos-finalizados',
  templateUrl: './estoque-pedidos-finalizados.component.html',
  styleUrls: ['./estoque-pedidos-finalizados.component.scss']
})
export class EstoquePedidosFinalizadosComponent implements OnInit {
  pedidosFinalizados: any;
  constructor(private service: EpedidosFinalizadosService) { }

  ngOnInit(){
    this.service.verEstoquePedidosFinalizados().subscribe((epedidosFinalizados: EpedidosFinalizados[]) => {
       this.pedidosFinalizados = epedidosFinalizados;
    })
  }


}
