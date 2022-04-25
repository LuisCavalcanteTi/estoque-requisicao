import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/models/pedidos.model';
import { PedidosService } from 'src/app/service/pedidos.service';

@Component({
  selector: 'app-usuario-pedidos-pendentes',
  templateUrl: './usuario-pedidos-pendentes.component.html',
  styleUrls: ['./usuario-pedidos-pendentes.component.scss']
})
export class UsuarioPedidosPendentesComponent implements OnInit {

  constructor(private service: PedidosService) { }

  ngOnInit(){
    this.service.todas().subscribe((pedidos: Pedidos[]) => {
      console.log(pedidos);
    })
  }

}
