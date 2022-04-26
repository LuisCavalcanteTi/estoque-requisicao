import { Component, OnInit } from '@angular/core';
import { UpedidosPendentes } from 'src/app/models/usuario/UpedidosPendentes';
import { UpedidosPendentesService } from 'src/app/service/usuario/UpedidosPendentes.service';


@Component({
  selector: 'app-usuario-pedidos-pendentes',
  templateUrl: './usuario-pedidos-pendentes.component.html',
  styleUrls: ['./usuario-pedidos-pendentes.component.scss']
})
export class UsuarioPedidosPendentesComponent implements OnInit {

  constructor(private service: UpedidosPendentesService) { }



  ngOnInit(){
    this.service.verUsuarioPedidosPendentes().subscribe((upedidosPendentes: UpedidosPendentes[]) => {
      console.log(upedidosPendentes);
    })
  }

}
