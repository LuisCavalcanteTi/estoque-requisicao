import { Component, OnInit } from '@angular/core';
import { UpedidosFinalizados } from 'src/app/models/usuario/UpedidosFinalizados';
import { UpedidosFinalizadosService } from 'src/app/service/usuario/UpedidosFinalizados.service';

@Component({
  selector: 'app-usuario-pedidos-finalizados',
  templateUrl: './usuario-pedidos-finalizados.component.html',
  styleUrls: ['./usuario-pedidos-finalizados.component.scss']
})
export class UsuarioPedidosFinalizadosComponent implements OnInit {

  constructor(private service: UpedidosFinalizadosService) { }

  ngOnInit(){
    this.service.verUsuarioPedidosFinalizados().subscribe((upedidosFinalizados: UpedidosFinalizados[]) => {
      console.log(upedidosFinalizados);
    })
  }

}
