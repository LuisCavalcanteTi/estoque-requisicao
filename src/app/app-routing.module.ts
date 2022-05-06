import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { EstoquePedidosFinalizadosComponent } from './estoque/pedidos-finalizados/estoque-pedidos-finalizados.component';
import { EstoquePedidosImpressosComponent } from './estoque/pedidos-impressos/estoque-pedidos-impressos.component';
import { EstoquePedidosPendentesComponent } from './estoque/pedidos-pendentes/estoque-pedidos-pendentes.component';
import { LoginComponent } from './login/login.component';
import { UsuarioPedidosFinalizadosComponent } from './usuario/pedidos-finalizados/usuario-pedidos-finalizados.component';
import { UsuarioPedidosPendentesComponent } from './usuario/pedidos-pendentes/usuario-pedidos-pendentes.component';
import { UsuarioRequisicaoComponent } from './usuario/requisicao/usuario-requisicao.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'entrar', component: EntrarComponent},
{ path: 'usuario/RequisitarMaterial', component: UsuarioRequisicaoComponent},
{ path: 'usuario/PedidosPendentes', component: UsuarioPedidosPendentesComponent},
{ path: 'usuario/PedidosFinalizados', component: UsuarioPedidosFinalizadosComponent},
{ path: 'estoque/PedidosPendentes', component: EstoquePedidosPendentesComponent},
{ path: 'estoque/PedidosImpressos', component: EstoquePedidosImpressosComponent},
{ path: 'estoque/PedidosFinalizados', component: EstoquePedidosFinalizadosComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
